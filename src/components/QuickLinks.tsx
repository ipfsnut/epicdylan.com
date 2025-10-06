import React from 'react';
import { BookOpen, Brain, Code } from 'lucide-react';
import { PageType } from '../types';

interface QuickLinksProps {
  setCurrentPage: (page: PageType) => void;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ setCurrentPage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <button
        onClick={() => setCurrentPage('books')}
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all text-left"
      >
        <BookOpen className="w-8 h-8 text-purple-400 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Books</h3>
        <p className="text-gray-400">Explore my published works on consciousness and cognition</p>
      </button>
      
      <button
        onClick={() => setCurrentPage('theory')}
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-indigo-400 transition-all text-left"
      >
        <Brain className="w-8 h-8 text-indigo-400 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Theory Blog</h3>
        <p className="text-gray-400">Read my latest thoughts on consciousness research</p>
      </button>

      <a
        href="https://github.com/ipfsnut"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all"
      >
        <Code className="w-8 h-8 text-green-400 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Open Source</h3>
        <p className="text-gray-400">Check out my code and contributions</p>
      </a>
    </div>
  );
};