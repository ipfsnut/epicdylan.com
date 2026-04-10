import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/blogPosts';

/* ================================================================ */
/*  Markdown-ish renderer (handles ##, **, `, -, [] links)          */
/* ================================================================ */

const InlineMarkdown: React.FC<{ text: string }> = ({ text }) => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/^([\s\S]*?)\[([^\]]+)\]\(([^)]+)\)([\s\S]*)/);
    if (linkMatch) {
      if (linkMatch[1]) parts.push(<InlineMarkdown key={key++} text={linkMatch[1]} />);
      parts.push(
        <a key={key++} href={linkMatch[3]} target="_blank" rel="noopener noreferrer"
          className="underline decoration-current/30 hover:decoration-current">{linkMatch[2]}</a>
      );
      remaining = linkMatch[4];
      continue;
    }

    const codeMatch = remaining.match(/^([\s\S]*?)`([^`]+)`([\s\S]*)/);
    if (codeMatch) {
      if (codeMatch[1]) parts.push(<InlineMarkdown key={key++} text={codeMatch[1]} />);
      parts.push(
        <code key={key++} className="text-[13px] font-mono px-1 py-0.5 rounded bg-current/5">{codeMatch[2]}</code>
      );
      remaining = codeMatch[3];
      continue;
    }

    const boldMatch = remaining.match(/^([\s\S]*?)\*\*([^*]+)\*\*([\s\S]*)/);
    if (boldMatch) {
      if (boldMatch[1]) parts.push(<span key={key++}>{boldMatch[1]}</span>);
      parts.push(<strong key={key++} className="font-bold">{boldMatch[2]}</strong>);
      remaining = boldMatch[3];
      continue;
    }

    parts.push(<span key={key++}>{remaining}</span>);
    break;
  }

  return <>{parts}</>;
};

const PostBody: React.FC<{ body: string }> = ({ body }) => {
  const blocks = body.split('\n\n');
  return (
    <>
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="text-xl font-bold mt-10 mb-3 border-b border-current/15 pb-2">
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="text-base font-semibold mt-6 mb-2 italic">
              {trimmed.slice(4)}
            </h3>
          );
        }

        if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) {
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 mb-4 text-[15px]">
              {trimmed.split('\n').map((line, j) => (
                <li key={j} className="leading-7"><InlineMarkdown text={line.trim().slice(2)} /></li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="leading-7 mb-4 text-[15px]">
            <InlineMarkdown text={trimmed} />
          </p>
        );
      })}
    </>
  );
};

/* ================================================================ */
/*  Post view — terminal/paper theme toggle + sidebar nav           */
/* ================================================================ */

const PostView: React.FC<{ post: BlogPost; slug: string }> = ({ post, slug }) => {
  const [paper, setPaper] = useState(false);

  // Set meta tags for sharing
  React.useEffect(() => {
    const ogImage = `https://epicdylan.com/og/${slug}.png`;
    document.title = `${post.title} — epicdylan.com`;

    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const setName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', post.title);
    setMeta('og:description', post.description);
    setMeta('og:image', ogImage);
    setMeta('og:type', 'article');
    setMeta('og:url', `https://epicdylan.com/blog/${slug}`);
    setName('twitter:card', 'summary_large_image');
    setName('twitter:title', post.title);
    setName('twitter:description', post.description);
    setName('twitter:image', ogImage);
  }, [post, slug]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${paper ? 'bg-[#f4f1ea]' : 'bg-black'}`}>
      <main
        className={`min-h-screen max-w-4xl mx-auto px-6 py-16 transition-colors duration-300 border-x ${
          paper
            ? 'bg-[#faf8f4] text-[#2a2a2a] border-[#d4c9b8]'
            : 'bg-[#080808] text-[#00ff41] border-[#00ff41]/10'
        }`}
        style={{ fontFamily: "'Times New Roman', 'Georgia', 'Noto Serif', serif" }}
      >
        <button
          onClick={() => setPaper(!paper)}
          className={`fixed top-4 right-4 z-50 px-3 py-1.5 rounded-sm text-xs tracking-wider uppercase border transition-colors font-mono ${
            paper
              ? 'bg-[#2a2a2a] text-[#f4f1ea] border-[#2a2a2a] hover:bg-[#444]'
              : 'bg-black text-[#00ff41] border-[#00ff41]/40 hover:bg-[#00ff41]/10'
          }`}
        >
          {paper ? 'Terminal' : 'Paper'}
        </button>

        <div className="flex gap-0 min-h-screen">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0 pr-6 border-r border-current/10 mr-8">
            <Link to="/blog" className="block text-xs font-bold tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity mb-4">
              &larr; All Posts
            </Link>
            <nav className="space-y-1">
              {blogPosts.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className={`block text-[13px] py-1.5 px-2 -mx-2 rounded-sm transition-all leading-tight ${
                    p.slug === slug ? 'bg-current/10 font-bold' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  {p.title}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Article */}
          <article className="flex-1 min-w-0 max-w-2xl">
            <Link to="/blog" className="lg:hidden text-sm hover:underline mb-6 block opacity-40">
              &larr; Back
            </Link>
            <time className="text-xs opacity-30 tracking-wider uppercase">{post.date}</time>
            <h1 className="text-2xl font-bold mt-2 mb-4 leading-tight">{post.title}</h1>
            <hr className="border-current/15 mb-8" />
            <PostBody body={post.body} />
          </article>
        </div>
      </main>
    </div>
  );
};

/* ================================================================ */
/*  List view — Xbox-inspired index                                 */
/* ================================================================ */

const ListView: React.FC = () => (
  <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-10 font-sans">
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="block text-xs text-[#00ff41]/40 hover:text-[#00ff41] tracking-widest uppercase mb-6 transition-colors">
        &larr; Home
      </Link>

      <div className="mb-6">
        <div className="text-[#00ff41] text-xs font-bold tracking-widest uppercase mb-0.5">
          {blogPosts.length} {blogPosts.length === 1 ? 'Item' : 'Items'}
        </div>
        <div className="text-white text-2xl font-extrabold uppercase tracking-wide">
          Development Log
        </div>
        <div className="h-[2px] bg-gradient-to-r from-[#00ff41]/80 to-transparent mt-2" />
      </div>

      <div className="space-y-0">
        {blogPosts.map((post, i) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
            <div className={`
              relative px-4 py-3 -mx-4 rounded-sm transition-all
              group-hover:bg-[#00ff41] group-hover:text-black
              ${i === 0 ? 'bg-[#00ff41]/10 border-l-2 border-[#00ff41]' : 'border-l-2 border-transparent'}
            `}>
              <div className="font-bold text-[15px] tracking-wide group-hover:text-black">
                {post.title}
              </div>
              <div className={`
                text-xs mt-0.5 transition-colors
                ${i === 0 ? 'text-[#00ff41]/60' : 'text-white/30'}
                group-hover:text-black/60
              `}>
                {post.date}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {blogPosts.length > 0 && (
        <Link to={`/blog/${blogPosts[0].slug}`} className="block group mt-10 border-t border-[#00ff41]/20 pt-6">
          <div className="text-[#00ff41]/40 text-[10px] font-bold tracking-widest uppercase mb-2">Latest</div>
          <div className="text-white font-bold text-lg mb-2 group-hover:text-[#00ff41] transition-colors">
            {blogPosts[0].title}
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg">
            {blogPosts[0].description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-white/20">
            <span>{blogPosts[0].date}</span>
            <span>EPICDYLAN.COM</span>
            <span>BASE MAINNET</span>
          </div>
        </Link>
      )}
    </div>
  </main>
);

/* ================================================================ */
/*  Router                                                           */
/* ================================================================ */

export const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts.find(p => p.slug === slug) : null;

  if (slug && !post) {
    return (
      <div className="min-h-screen bg-black text-[#00ff41] flex items-center justify-center font-mono">
        <div className="text-center">
          <p className="opacity-40 mb-4">Post not found.</p>
          <Link to="/blog" className="underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  return post && slug ? <PostView post={post} slug={slug} /> : <ListView />;
};
