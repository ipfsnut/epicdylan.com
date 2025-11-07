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
      
      // Try multiple CORS proxy services
      const proxies = [
        'https://api.allorigins.win/get?url=',
        'https://cors-anywhere.herokuapp.com/',
        'https://thingproxy.freeboard.io/fetch/'
      ];
      
      for (let i = 0; i < proxies.length; i++) {
        try {
          let response;
          let data;
          
          if (proxies[i].includes('allorigins')) {
            response = await fetch(proxies[i] + encodeURIComponent(rssUrl));
            const jsonData = await response.json();
            data = jsonData.contents;
          } else {
            response = await fetch(proxies[i] + rssUrl);
            data = await response.text();
          }
          
          // Parse the RSS XML
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          
          const items = xmlDoc.querySelectorAll('item');
          if (items.length === 0) {
            throw new Error('No items found in RSS feed');
          }
          
          const parsedPosts: BlogPost[] = Array.from(items).map(item => ({
            title: item.querySelector('title')?.textContent || '',
            link: item.querySelector('link')?.textContent || '',
            description: item.querySelector('description')?.textContent || '',
            pubDate: item.querySelector('pubDate')?.textContent || '',
            author: item.querySelector('author')?.textContent || 'epicdylan.eth'
          }));
          
          setPosts(parsedPosts);
          setLoading(false);
          return; // Success, exit the loop
        } catch (err) {
          console.log(`Proxy ${i + 1} failed:`, err);
          if (i === proxies.length - 1) {
            // All proxies failed
            setError('Failed to load blog posts. Please visit the blog directly on Paragraph.');
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
        year: 'numeric',
        month: 'long',
        day: 'numeric'
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
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-purple-400" />
          Blog
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-4">
          Web3 musings, philosophy, & psychology
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <User className="w-4 h-4" />
          <span>@epicdylan.eth on Paragraph</span>
          <a 
            href="https://paragraph.com/@epicdylan.eth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            Visit on Paragraph
          </a>
        </div>
      </div>

      <div className="space-y-6">
        {loading && (
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-center text-gray-300">Loading blog posts...</div>
          </div>
        )}

        {error && (
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-center text-red-300">{error}</div>
            <div className="text-center mt-4">
              <a 
                href="https://paragraph.com/@epicdylan.eth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Visit blog directly on Paragraph
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-center text-gray-300">No blog posts found.</div>
          </div>
        )}

        {posts.map((post, index) => (
          <article key={index} className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                {post.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
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
              <p className="text-gray-300 mb-6 leading-relaxed">
                {stripHtml(post.description).substring(0, 300)}
                {stripHtml(post.description).length > 300 ? '...' : ''}
              </p>
            )}
            
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
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