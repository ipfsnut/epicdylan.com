import React from 'react';
import { Code } from 'lucide-react';
import { GitHubRepos } from './GitHubRepos';

export const SoftwareSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="section-number">03 //</span>
        <h2 className="text-3xl font-bold font-display text-warm-text flex items-center gap-3 glitch-hover" data-text="Software Development">
          <Code className="w-8 h-8 text-warm-accent" />
          Software Development
        </h2>
      </div>
      <a
        href="https://github.com/ipfsnut/evermark-beta"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-xl p-8 border border-warm-border mb-6 cursor-pointer hover:border-warm-accent/50 hover:shadow-md transition-all duration-300"
      >
        <div className="mb-4">
          <h3 className="text-2xl font-bold font-display text-warm-text mb-2">Evermark Beta</h3>
          <p className="text-warm-text-secondary mb-4">
            Content curation and collective memory platform with decentralized storage, Farcaster integration, and custom SDK architecture
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full text-sm">React 19</span>
          <span className="px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full text-sm">Supabase</span>
          <span className="px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full text-sm">IPFS</span>
          <span className="px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full text-sm">Farcaster</span>
        </div>
      </a>

      <h3 className="text-2xl font-bold font-display text-warm-text mb-4">Recent Repositories</h3>
      <GitHubRepos />
    </div>
  );
};
