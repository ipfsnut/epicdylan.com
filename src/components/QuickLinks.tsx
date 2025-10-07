import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Code, FileText } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Link
        to="/books"
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all block"
      >
        <BookOpen className="w-8 h-8 text-purple-400 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Books</h3>
        <p className="text-gray-400">Explore my published works on consciousness and cognition</p>
      </Link>
      
      <Link
        to="/research"
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-indigo-400 transition-all block"
      >
        <Brain className="w-8 h-8 text-indigo-400 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Consciousness Research</h3>
        <p className="text-gray-400">Explore detailed research on consciousness and cognition</p>
      </Link>

      <Link
        to="/cv"
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-orange-400 transition-all block"
      >
        <FileText className="w-8 h-8 text-orange-400 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">CV</h3>
        <p className="text-gray-400">View my education, research, and publications</p>
      </Link>

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