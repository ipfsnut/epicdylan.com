import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="section-number">02 //</span>
        <h2 className="text-3xl font-bold font-display text-warm-text flex items-center gap-3 glitch-hover" data-text="Blog & Writing">
          <PenTool className="w-8 h-8 text-warm-accent" />
          Blog & Writing
        </h2>
      </div>
      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-warm-text mb-2">Web3 Musings, Philosophy, & Psychology</h3>
            <p className="text-warm-text-secondary">
              Exploring the intersection of technology, consciousness, and human behavior on Paragraph.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-warm-accent rounded-lg flex items-center justify-center">
              <PenTool className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-warm-accent/10 hover:bg-warm-accent/20 text-warm-accent hover:text-warm-accent-hover px-4 py-2 rounded-lg transition-all duration-300 border border-warm-accent/30 hover:border-warm-accent/50"
        >
          Read Blog Posts
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
