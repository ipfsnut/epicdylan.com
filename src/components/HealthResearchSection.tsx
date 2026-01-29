import React from 'react';
import { Heart, Activity, Brain, Target } from 'lucide-react';

export const HealthResearchSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-red-900/20 via-pink-900/20 to-purple-900/20 rounded-xl p-8 border border-red-500/20">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-number">05 //</span>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 glitch-hover" data-text="Health & Performance Research">
            <Heart className="w-8 h-8 text-red-400" />
            Health & Performance Research
          </h2>
        </div>
        
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          My research extends beyond consciousness into the practical domains of human optimization. 
          I study the intersection of cognitive performance, physical training, and recovery protocols 
          through systematic self-experimentation and evidence-based methodologies.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/20 rounded-lg p-4 border border-red-500/10">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-red-400" />
              <h3 className="text-red-300 font-semibold">Training Science</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Recovery-focused protocols for sustainable athletic performance in cognitive workers
            </p>
          </div>

          <div className="bg-black/20 rounded-lg p-4 border border-pink-500/10">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-pink-400" />
              <h3 className="text-pink-300 font-semibold">Cognitive Enhancement</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Nutrition timing, supplementation strategies, and lifestyle optimization for mental performance
            </p>
          </div>

          <div className="bg-black/20 rounded-lg p-4 border border-purple-500/10">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-purple-400" />
              <h3 className="text-purple-300 font-semibold">Self-Experimentation</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Systematic N-of-1 studies tracking biomarkers, performance metrics, and subjective outcomes
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a 
            href="/fitness"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-lg transition-colors"
          >
            <Heart className="w-4 h-4" />
            View Current Training Protocols
          </a>
        </div>
      </div>
    </div>
  );
};