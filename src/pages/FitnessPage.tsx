import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Droplets, Target, Activity, Zap, Heart, ArrowLeft } from 'lucide-react';

export const FitnessPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Dumbbell className="w-12 h-12 text-cyan-400" />
          <h1 className="text-5xl font-bold text-white">Fitness Strategy</h1>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          Current approach to training and recovery, optimized for a researcher balancing
          intense mental work with physical performance. Getting back into the swing of things
          after a snowstorm left me housebound for a few days.
        </p>
      </div>

      {/* Current Program Overview */}
      <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-8 mb-12 border border-cyan-500/20">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Current Program</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/20 rounded-lg p-5 border border-cyan-500/10">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">Supplementation</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                3mg creatine daily
              </li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-lg p-5 border border-cyan-500/10">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">Nutrition Focus</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• High protein intake</li>
              <li>• High fiber diet</li>
              <li>• Adequate salt intake</li>
            </ul>
          </div>
          <div className="bg-black/20 rounded-lg p-5 border border-cyan-500/10">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">Current Goal</h3>
            <p className="text-gray-300 text-sm">
              Reactivate after being housebound. Maintain electrolyte balance with adequate sodium
              to avoid hyponatremia from heavy sweating.
            </p>
          </div>
        </div>
      </div>

      {/* Alternating Day Cycle */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl font-bold text-white">The Alternating Day Cycle</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Swim Day */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Day A: Freestyle Swimming</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-200 font-semibold mb-2">Session:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Freestyle swim session</li>
                  <li>• Focus on form and breathing</li>
                  <li>• Low impact, high cardio benefit</li>
                  <li>• Great for active recovery</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-lg p-3">
                <p className="text-blue-200 text-sm">
                  <strong>Why swimming:</strong> Zero joint impact while maintaining cardiovascular
                  fitness. Perfect for recovery periods.
                </p>
              </div>
            </div>
          </div>

          {/* Cycle + Upper Body Day */}
          <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-xl p-6 border border-orange-500/20">
            <h3 className="text-xl font-bold text-orange-300 mb-4">Day B: Indoor Cycling + Upper Body</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-orange-200 font-semibold mb-2">Cardio:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Indoor cycling session</li>
                  <li>• Controlled environment</li>
                  <li>• Adjustable intensity</li>
                </ul>
              </div>
              <div>
                <h4 className="text-orange-200 font-semibold mb-2">Upper Body:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Push movements (pushups, presses)</li>
                  <li>• Pull movements (pullups, rows)</li>
                  <li>• Core work as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-br from-gray-800/20 to-slate-900/20 rounded-xl p-6 border border-gray-500/20">
          <p className="text-gray-300 text-center">
            <strong className="text-white">Simple alternation:</strong> Swim → Cycle + Upper Body → Swim → Cycle + Upper Body → ...
          </p>
        </div>
      </div>

      {/* Hydration & Electrolytes */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Droplets className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">Hydration & Electrolytes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-blue-300">Hyponatremia Prevention</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Heavy sweating can deplete sodium levels, leading to hyponatremia. This is especially
              important when ramping back up after a period of inactivity.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Don't just drink water—replace electrolytes</li>
              <li>• Add salt to meals intentionally</li>
              <li>• Consider electrolyte supplements during/after intense sessions</li>
              <li>• Monitor for symptoms: headache, nausea, confusion</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-green-300">Nutrition Priorities</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-green-200 font-semibold mb-2">High Protein:</h4>
                <p className="text-gray-300 text-sm">
                  Essential for muscle recovery and maintenance. Aim for protein at every meal.
                </p>
              </div>
              <div>
                <h4 className="text-green-200 font-semibold mb-2">High Fiber:</h4>
                <p className="text-gray-300 text-sm">
                  Supports gut health and satiety. Vegetables, legumes, whole grains.
                </p>
              </div>
              <div>
                <h4 className="text-green-200 font-semibold mb-2">Adequate Salt:</h4>
                <p className="text-gray-300 text-sm">
                  Don't fear sodium when you're sweating heavily. Your body needs it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl p-8 border border-purple-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">Training Philosophy</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Simplicity over complexity. The best program is the one you'll actually do. Alternating
          between swimming and cycling provides variety, prevents overuse injuries, and keeps
          training sustainable.
        </p>
        <p className="text-gray-300 leading-relaxed">
          After periods of inactivity (like being snowed in), the priority is gentle reactivation—not
          immediately jumping back to peak intensity. Build back gradually, stay hydrated, and
          listen to your body.
        </p>
      </div>
    </div>
  );
};
