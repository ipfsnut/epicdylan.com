import React from 'react';
import { ExternalLink, PenTool } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <PenTool className="w-8 h-8 text-cyan-400" />
        Blog & Writing
      </h2>
      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Web3 Musings, Philosophy, & Psychology</h3>
            <p className="text-gray-300">
              Exploring the intersection of technology, consciousness, and human behavior on Paragraph.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <PenTool className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        
        <a
          href="https://paragraph.com/@epicdylan.eth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-cyan-200 px-4 py-2 rounded-lg transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
        >
          Read Blog Posts
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};