import React from 'react';
import { BookOpen } from 'lucide-react';

export const BooksPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
        <BookOpen className="w-12 h-12 text-purple-400" />
        Books
      </h1>
      <p className="text-xl text-gray-400 mb-12">
        Published works exploring consciousness, computation, and the nature of mind
      </p>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <div className="flex items-start gap-6">
            <div className="w-32 h-48 bg-purple-600/30 rounded-lg flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-purple-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Book Title Coming Soon</h2>
              <p className="text-gray-300 mb-4">
                Description of your book on consciousness research, Markov blankets, and the mathematical foundations of subjective experience.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 py-12">
          <p>More books information coming soon. Contact for details about published works.</p>
        </div>
      </div>
    </div>
  );
};