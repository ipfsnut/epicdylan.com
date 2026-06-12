import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="mb-6">
        <img
          src="/StowDylanAvatar.jpg"
          alt="T. Dylan Daniel"
          className="w-28 h-28 rounded-full mx-auto border border-warm-border object-cover"
        />
      </div>
      <h1 className="text-5xl font-bold mb-3 font-display text-warm-text">T. Dylan Daniel</h1>
      <p className="text-lg text-warm-text-secondary mb-4">
        Cognitive Neuroscience &middot; Philosophy of Mind &middot; Author
      </p>
      <p className="text-warm-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
        Doctoral researcher in cognition and cognitive neuroscience at Texas Tech University and
        author of <span className="italic">INEVITABLE</span> and{' '}
        <span className="italic">Formal Dialectics</span>. Work spans oscillatory dynamics and the
        metabolic basis of cognition, the free energy principle and ecological psychology, and the
        philosophy of mind and language.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/publications"
          className="px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
        >
          Publications
        </Link>
        <Link
          to="/books"
          className="px-6 py-3 border border-warm-border text-warm-text hover:border-warm-text-secondary rounded-lg transition-colors"
        >
          Books
        </Link>
      </div>
    </div>
  );
};
