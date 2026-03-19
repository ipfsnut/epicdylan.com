import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';

const formatDate = (dateString: string) => {
  try {
    return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch {
    return dateString;
  }
};

const PostBody: React.FC<{ body: string }> = ({ body }) => {
  const blocks = body.split('\n\n');
  return (
    <>
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Heading
        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          return (
            <h3 key={i} className="text-lg font-bold font-display text-warm-text mt-6 mb-2">
              {trimmed.slice(2, -2)}
            </h3>
          );
        }

        // List items (block of lines starting with -)
        if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) {
          return (
            <ul key={i} className="list-disc list-inside space-y-1 text-warm-text-secondary leading-relaxed mb-4">
              {trimmed.split('\n').map((line, j) => (
                <li key={j}><InlineMarkdown text={line.trim().slice(2)} /></li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-warm-text-secondary leading-relaxed mb-4">
            <InlineMarkdown text={trimmed} />
          </p>
        );
      })}
    </>
  );
};

const InlineMarkdown: React.FC<{ text: string }> = ({ text }) => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Links: [text](url)
    const linkMatch = remaining.match(/^([\s\S]*?)\[([^\]]+)\]\(([^)]+)\)([\s\S]*)/);
    if (linkMatch) {
      if (linkMatch[1]) parts.push(<InlineMarkdown key={key++} text={linkMatch[1]} />);
      parts.push(
        <a key={key++} href={linkMatch[3]} target="_blank" rel="noopener noreferrer"
          className="text-warm-accent hover:text-warm-accent-hover underline">{linkMatch[2]}</a>
      );
      remaining = linkMatch[4];
      continue;
    }

    // Inline code: `code`
    const codeMatch = remaining.match(/^([\s\S]*?)`([^`]+)`([\s\S]*)/);
    if (codeMatch) {
      if (codeMatch[1]) parts.push(<InlineMarkdown key={key++} text={codeMatch[1]} />);
      parts.push(
        <code key={key++} className="bg-warm-bg px-1.5 py-0.5 rounded text-sm font-mono text-warm-text">{codeMatch[2]}</code>
      );
      remaining = codeMatch[3];
      continue;
    }

    // Bold: **text**
    const boldMatch = remaining.match(/^([\s\S]*?)\*\*([^*]+)\*\*([\s\S]*)/);
    if (boldMatch) {
      if (boldMatch[1]) parts.push(<span key={key++}>{boldMatch[1]}</span>);
      parts.push(<strong key={key++} className="text-warm-text font-semibold">{boldMatch[2]}</strong>);
      remaining = boldMatch[3];
      continue;
    }

    // Plain text
    parts.push(<span key={key++}>{remaining}</span>);
    break;
  }

  return <>{parts}</>;
};

// Full post view
const PostView: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="max-w-3xl mx-auto px-6 py-16">
    <Link to="/blog" className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors">
      <ArrowLeft className="w-4 h-4" />
      All Posts
    </Link>
    <article>
      <h1 className="text-3xl md:text-4xl font-bold font-display text-warm-text mb-4 leading-tight">
        {post.title}
      </h1>
      <div className="flex items-center gap-2 text-sm text-warm-text-secondary mb-8">
        <Calendar className="w-4 h-4" />
        <span>{formatDate(post.date)}</span>
      </div>
      <div className="border-t border-warm-border pt-8">
        <PostBody body={post.body} />
      </div>
    </article>
  </div>
);

// Post list view
const ListView: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-16">
    <Link to="/" className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors">
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>

    <div className="mb-12">
      <h1 className="text-4xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
        <BookOpen className="w-10 h-10 text-warm-accent" />
        Blog
      </h1>
      <p className="text-xl text-warm-text-secondary leading-relaxed">
        Web3 musings, philosophy, & psychology
      </p>
    </div>

    <div className="space-y-6">
      {blogPosts.map(post => (
        <article key={post.slug} className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-3 leading-tight">
            {post.title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-warm-text-secondary mb-4">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <p className="text-warm-text-secondary mb-6 leading-relaxed">
            {post.description}
          </p>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
          >
            Read Post
          </Link>
        </article>
      ))}
    </div>
  </div>
);

export const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts.find(p => p.slug === slug) : null;

  if (slug && !post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-warm-text-secondary mb-4">Post not found.</p>
        <Link to="/blog" className="text-warm-accent hover:text-warm-accent-hover">Back to blog</Link>
      </div>
    );
  }

  return post ? <PostView post={post} /> : <ListView />;
};
