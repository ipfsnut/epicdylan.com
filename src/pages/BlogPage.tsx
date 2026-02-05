import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Calendar, User } from 'lucide-react';

interface BlogPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
}

export const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      const rssUrl = 'https://api.paragraph.com/blogs/rss/%40epicdylan.eth';

      const proxies = [
        { url: 'https://api.allorigins.win/get?url=', name: 'AllOrigins', format: 'json' },
        { url: 'https://corsproxy.io/?', name: 'CorsProxy.io', format: 'text' },
        { url: 'https://api.codetabs.com/v1/proxy?quest=', name: 'CodeTabs', format: 'text' }
      ];

      for (let i = 0; i < proxies.length; i++) {
        const proxy = proxies[i];
        try {
          console.log(`Trying ${proxy.name}...`);

          let response;
          let data;

          if (proxy.format === 'json') {
            response = await fetch(proxy.url + encodeURIComponent(rssUrl), {
              method: 'GET',
              headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            const jsonData = await response.json();
            data = jsonData.contents;
            if (!data) throw new Error('No contents in response');
          } else {
            response = await fetch(proxy.url + encodeURIComponent(rssUrl), {
              method: 'GET',
              headers: { 'Accept': 'text/plain' }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            data = await response.text();
          }

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          const parserError = xmlDoc.querySelector('parsererror');
          if (parserError) throw new Error('Invalid XML format received');

          const items = xmlDoc.querySelectorAll('item');
          if (items.length === 0) throw new Error('No items found in RSS feed');

          const parsedPosts: BlogPost[] = Array.from(items).map(item => ({
            title: item.querySelector('title')?.textContent || '',
            link: item.querySelector('link')?.textContent || '',
            description: item.querySelector('description')?.textContent || '',
            pubDate: item.querySelector('pubDate')?.textContent || '',
            author: (() => {
            const authorText = item.querySelector('author')?.textContent || 'epicdylan';
            const match = authorText.match(/\(([^)]+)\)/);
            return match ? match[1] : 'epicdylan';
          })()
          }));

          console.log(`Successfully loaded ${parsedPosts.length} posts via ${proxy.name}`);
          setPosts(parsedPosts);
          setLoading(false);
          return;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';
          console.error(`${proxy.name} failed:`, errorMessage);
          if (i === proxies.length - 1) {
            setError('Failed to load blog posts from RSS feed. Please visit the blog directly on Paragraph.');
            setLoading(false);
          }
        }
      }
    };

    fetchRSSFeed();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-warm-accent" />
          Blog
        </h1>
        <p className="text-xl text-warm-text-secondary leading-relaxed mb-4">
          Web3 musings, philosophy, & psychology
        </p>
        <div className="flex items-center gap-2 text-sm text-warm-text-secondary">
          <User className="w-4 h-4" />
          <span>@epicdylan.eth on Paragraph</span>
          <a
            href="https://paragraph.com/@epicdylan.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-warm-accent hover:text-warm-accent-hover transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            Visit on Paragraph
          </a>
        </div>
      </div>

      <div className="space-y-6">
        {loading && (
          <div className="bg-white rounded-xl p-8 border border-warm-border">
            <div className="text-center text-warm-text-secondary">Loading blog posts...</div>
          </div>
        )}

        {error && (
          <div className="bg-white rounded-xl p-8 border border-red-200">
            <div className="text-center text-red-500">{error}</div>
            <div className="text-center mt-4">
              <a
                href="https://paragraph.com/@epicdylan.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors"
              >
                Visit blog directly on Paragraph
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="bg-white rounded-xl p-8 border border-warm-border">
            <div className="text-center text-warm-text-secondary">No blog posts found.</div>
          </div>
        )}

        {posts.map((post, index) => (
          <article key={index} className="bg-white rounded-xl p-8 border border-warm-border">
            <div className="mb-4">
              <h2 className="text-2xl font-bold font-display text-warm-text mb-3 leading-tight">
                {post.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-warm-text-secondary mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.pubDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            {post.description && (
              <p className="text-warm-text-secondary mb-6 leading-relaxed">
                {stripHtml(post.description).substring(0, 300)}
                {stripHtml(post.description).length > 300 ? '...' : ''}
              </p>
            )}

            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
            >
              Read Full Post
              <ExternalLink className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};
