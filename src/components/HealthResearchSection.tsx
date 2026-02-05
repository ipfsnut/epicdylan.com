import React from 'react';
import { Heart, Dumbbell, Utensils } from 'lucide-react';

export const HealthResearchSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-number">05 //</span>
          <h2 className="text-3xl font-bold font-display text-warm-text flex items-center gap-3 glitch-hover" data-text="Fitness & Wellbeing">
            <Heart className="w-8 h-8 text-warm-accent" />
            Fitness & Wellbeing
          </h2>
        </div>

        <p className="text-warm-text-secondary text-lg mb-6 leading-relaxed">
          As a psychologist, I know enough physiology to be dangerous. I tune my diet and exercise
          to look and feel my best—nothing too serious, just trying to stay sharp and healthy
          while spending most of my time thinking hard about consciousness.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-warm-bg rounded-lg p-4 border border-warm-border">
            <div className="flex items-center gap-2 mb-3">
              <Dumbbell className="w-5 h-5 text-warm-accent" />
              <h3 className="text-warm-accent font-semibold">Current Routine</h3>
            </div>
            <p className="text-warm-text-secondary text-sm">
              Swimming and indoor cycling, alternating days. Upper body work mixed in.
              Simple and sustainable.
            </p>
          </div>

          <div className="bg-warm-bg rounded-lg p-4 border border-warm-border">
            <div className="flex items-center gap-2 mb-3">
              <Utensils className="w-5 h-5 text-warm-accent" />
              <h3 className="text-warm-accent font-semibold">Diet Focus</h3>
            </div>
            <p className="text-warm-text-secondary text-sm">
              High protein, high fiber. Enough salt to avoid problems from all the sweating.
              Nothing fancy.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/fitness"
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
          >
            <Heart className="w-4 h-4" />
            Current Training Setup
          </a>
        </div>
      </div>
    </div>
  );
};
