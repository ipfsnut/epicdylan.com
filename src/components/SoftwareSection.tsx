import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { GitHubRepos } from './GitHubRepos';

export const SoftwareSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <Code className="w-8 h-8 text-green-400" />
        Software Development
      </h2>
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Evermark Beta</h3>
            <p className="text-gray-200 mb-4">
              Content curation and collective memory platform with decentralized storage, Farcaster integration, and custom SDK architecture
            </p>
          </div>
          <a 
            href="https://github.com/ipfsnut/evermark-beta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">React 19</span>
          <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">Supabase</span>
          <span className="px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-sm">IPFS</span>
          <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">Farcaster</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">Recent Repositories</h3>
      <GitHubRepos />
    </div>
  );
};