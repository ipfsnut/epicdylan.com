import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Droplets, Target, Activity, Zap, Heart, ArrowLeft } from 'lucide-react';

export const FitnessPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Dumbbell className="w-12 h-12 text-warm-accent" />
          <h1 className="text-5xl font-bold font-display text-warm-text">Fitness Strategy</h1>
        </div>
        <p className="text-xl text-warm-text-secondary leading-relaxed max-w-4xl">
          Current approach to training and recovery, optimized for a researcher balancing
          intense mental work with physical performance. Getting back into the swing of things
          after a snowstorm left me housebound for a few days.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 mb-12 border border-warm-border">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-warm-accent" />
          <h2 className="text-2xl font-bold font-display text-warm-text">Current Program</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-warm-bg rounded-lg p-5 border border-warm-border">
            <h3 className="text-lg font-semibold text-warm-accent mb-3">Supplementation</h3>
            <ul className="text-warm-text-secondary space-y-2">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-warm-accent" />
                3mg creatine daily
              </li>
            </ul>
          </div>
          <div className="bg-warm-bg rounded-lg p-5 border border-warm-border">
            <h3 className="text-lg font-semibold text-warm-accent mb-3">Nutrition Focus</h3>
            <ul className="text-warm-text-secondary space-y-2">
              <li>• High protein intake</li>
              <li>• High fiber diet</li>
              <li>• Adequate salt intake</li>
            </ul>
          </div>
          <div className="bg-warm-bg rounded-lg p-5 border border-warm-border">
            <h3 className="text-lg font-semibold text-warm-accent mb-3">Current Goal</h3>
            <p className="text-warm-text-secondary text-sm">
              Reactivate after being housebound. Maintain electrolyte balance with adequate sodium
              to avoid hyponatremia from heavy sweating.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="w-8 h-8 text-warm-accent" />
          <h2 className="text-3xl font-bold font-display text-warm-text">The Alternating Day Cycle</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-warm-border">
            <h3 className="text-xl font-bold text-warm-accent mb-4">Day A: Freestyle Swimming</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-warm-text font-semibold mb-2">Session:</h4>
                <ul className="text-warm-text-secondary text-sm space-y-1">
                  <li>• Freestyle swim session</li>
                  <li>• Focus on form and breathing</li>
                  <li>• Low impact, high cardio benefit</li>
                  <li>• Great for active recovery</li>
                </ul>
              </div>
              <div className="bg-warm-bg rounded-lg p-3">
                <p className="text-warm-text-secondary text-sm">
                  <strong className="text-warm-text">Why swimming:</strong> Zero joint impact while maintaining cardiovascular
                  fitness. Perfect for recovery periods.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-warm-border">
            <h3 className="text-xl font-bold text-warm-accent mb-4">Day B: Indoor Cycling + Upper Body</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-warm-text font-semibold mb-2">Cardio:</h4>
                <ul className="text-warm-text-secondary text-sm space-y-1">
                  <li>• Indoor cycling session</li>
                  <li>• Controlled environment</li>
                  <li>• Adjustable intensity</li>
                </ul>
              </div>
              <div>
                <h4 className="text-warm-text font-semibold mb-2">Upper Body:</h4>
                <ul className="text-warm-text-secondary text-sm space-y-1">
                  <li>• Push movements (pushups, presses)</li>
                  <li>• Pull movements (pullups, rows)</li>
                  <li>• Core work as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-warm-bg rounded-xl p-6 border border-warm-border">
          <p className="text-warm-text-secondary text-center">
            <strong className="text-warm-text">Simple alternation:</strong> Swim → Cycle + Upper Body → Swim → Cycle + Upper Body → ...
          </p>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Droplets className="w-8 h-8 text-warm-accent" />
          <h2 className="text-3xl font-bold font-display text-warm-text">Hydration & Electrolytes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-warm-border">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-6 h-6 text-warm-accent" />
              <h3 className="text-xl font-bold text-warm-accent">Hyponatremia Prevention</h3>
            </div>
            <p className="text-warm-text-secondary mb-4">
              Heavy sweating can deplete sodium levels, leading to hyponatremia. This is especially
              important when ramping back up after a period of inactivity.
            </p>
            <ul className="text-warm-text-secondary space-y-2">
              <li>• Don't just drink water—replace electrolytes</li>
              <li>• Add salt to meals intentionally</li>
              <li>• Consider electrolyte supplements during/after intense sessions</li>
              <li>• Monitor for symptoms: headache, nausea, confusion</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-warm-border">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-warm-accent" />
              <h3 className="text-xl font-bold text-warm-accent">Nutrition Priorities</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-warm-text font-semibold mb-2">High Protein:</h4>
                <p className="text-warm-text-secondary text-sm">Essential for muscle recovery and maintenance. Aim for protein at every meal.</p>
              </div>
              <div>
                <h4 className="text-warm-text font-semibold mb-2">High Fiber:</h4>
                <p className="text-warm-text-secondary text-sm">Supports gut health and satiety. Vegetables, legumes, whole grains.</p>
              </div>
              <div>
                <h4 className="text-warm-text font-semibold mb-2">Adequate Salt:</h4>
                <p className="text-warm-text-secondary text-sm">Don't fear sodium when you're sweating heavily. Your body needs it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <h3 className="text-2xl font-bold font-display text-warm-text mb-4">Training Philosophy</h3>
        <p className="text-warm-text-secondary leading-relaxed mb-4">
          Simplicity over complexity. The best program is the one you'll actually do. Alternating
          between swimming and cycling provides variety, prevents overuse injuries, and keeps
          training sustainable.
        </p>
        <p className="text-warm-text-secondary leading-relaxed">
          After periods of inactivity (like being snowed in), the priority is gentle reactivation—not
          immediately jumping back to peak intensity. Build back gradually, stay hydrated, and
          listen to your body.
        </p>
      </div>
    </div>
  );
};
