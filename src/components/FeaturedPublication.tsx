import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { featuredPublication } from '../data/publications';

export const FeaturedPublication: React.FC = () => {
  const pub = featuredPublication;
  if (!pub) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="section-number">01 //</span>
        <h2 className="text-3xl font-bold font-display text-warm-text">Latest Publication</h2>
      </div>
      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <p className="text-xs uppercase tracking-widest text-warm-text-secondary mb-3">
          {pub.venue} ({pub.year}){pub.volume ? `, ${pub.volume}` : ''}
          {pub.note ? ` · ${pub.note}` : ''}
        </p>
        <h3 className="text-2xl font-bold font-display text-warm-text leading-snug mb-4">
          {pub.title}
        </h3>
        {pub.abstract && (
          <p className="text-warm-text-secondary leading-relaxed mb-6">{pub.abstract}</p>
        )}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
          >
            View publications
            <ArrowRight className="w-4 h-4" />
          </Link>
          {pub.url && (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-warm-border text-warm-text-secondary hover:text-warm-text hover:border-warm-text-secondary rounded-lg transition-colors"
            >
              Read on Frontiers
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
