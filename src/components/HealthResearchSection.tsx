import React from 'react';
import { Heart, Dumbbell, Utensils } from 'lucide-react';

export const HealthResearchSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-red-900/20 via-pink-900/20 to-purple-900/20 rounded-xl p-8 border border-red-500/20">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-number">05 //</span>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 glitch-hover" data-text="Fitness & Wellbeing">
            <Heart className="w-8 h-8 text-red-400" />
            Fitness & Wellbeing
          </h2>
        </div>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          As a psychologist, I know enough physiology to be dangerous. I tune my diet and exercise
          to look and feel my best—nothing too serious, just trying to stay sharp and healthy
          while spending most of my time thinking hard about consciousness.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/20 rounded-lg p-4 border border-red-500/10">
            <div className="flex items-center gap-2 mb-3">
              <Dumbbell className="w-5 h-5 text-red-400" />
              <h3 className="text-red-300 font-semibold">Current Routine</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Swimming and indoor cycling, alternating days. Upper body work mixed in.
              Simple and sustainable.
            </p>
          </div>

          <div className="bg-black/20 rounded-lg p-4 border border-pink-500/10">
            <div className="flex items-center gap-2 mb-3">
              <Utensils className="w-5 h-5 text-pink-400" />
              <h3 className="text-pink-300 font-semibold">Diet Focus</h3>
            </div>
            <p className="text-gray-400 text-sm">
              High protein, high fiber. Enough salt to avoid problems from all the sweating.
              Nothing fancy.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/fitness"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-lg transition-colors"
          >
            <Heart className="w-4 h-4" />
            Current Training Setup
          </a>
        </div>
      </div>
    </div>
  );
};