import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Code, FileText } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="section-number">07 //</span>
        <h2 className="text-3xl font-bold font-display text-warm-text glitch-hover" data-text="Quick Links">
          Quick Links
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Link
        to="/books"
        className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-all block hover:shadow-md"
      >
        <BookOpen className="w-8 h-8 text-warm-accent mb-3" />
        <h3 className="text-xl font-semibold text-warm-text mb-2">Books</h3>
        <p className="text-warm-text-secondary">Explore my published works on consciousness and cognition</p>
      </Link>

      <Link
        to="/research"
        className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-all block hover:shadow-md"
      >
        <Brain className="w-8 h-8 text-warm-accent mb-3" />
        <h3 className="text-xl font-semibold text-warm-text mb-2">Consciousness Research</h3>
        <p className="text-warm-text-secondary">Explore detailed research on consciousness and cognition</p>
      </Link>

      <Link
        to="/cv"
        className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-all block hover:shadow-md"
      >
        <FileText className="w-8 h-8 text-warm-accent mb-3" />
        <h3 className="text-xl font-semibold text-warm-text mb-2">CV</h3>
        <p className="text-warm-text-secondary">View my education, research, and publications</p>
      </Link>

      <a
        href="https://github.com/ipfsnut"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-all hover:shadow-md"
      >
        <Code className="w-8 h-8 text-warm-accent mb-3" />
        <h3 className="text-xl font-semibold text-warm-text mb-2">Open Source</h3>
        <p className="text-warm-text-secondary">Check out my code and contributions</p>
      </a>
      </div>
    </div>
  );
};
