import React from 'react';
import { Dumbbell, Calendar, Target, Activity, Zap, Heart, AlertTriangle, CheckCircle } from 'lucide-react';

export const FitnessPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Dumbbell className="w-12 h-12 text-cyan-400" />
          <h1 className="text-5xl font-bold text-white">Fitness Strategy</h1>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          My current approach to training and recovery, optimized for a 40-year-old researcher 
          balancing intense mental work with physical performance. Feel free to study these 
          strategies if you're interested in evidence-based training approaches.
        </p>
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-8 mb-12 border border-orange-500/20">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold text-white">Current Focus: Recovery-Based Training</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-2">Profile</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• 40 years old </li>
              <li>• 18 months running experience</li>
              <li>• Daily intense biking</li>
              <li>• Creatine supplementation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-2">Current Challenge</h3>
            <p className="text-gray-300">
              Overtrained calves from excessive high-intensity leg work. 
              Pivoting to swimming-focused recovery while maintaining cardio fitness 
              and building upper body strength.
            </p>
          </div>
        </div>
      </div>

      {/* 7-Day Cycle */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">The 7-Day Recovery Cycle</h2>
        </div>
        
        <div className="grid gap-6">
          {/* Monday */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold text-blue-300 mb-3">Monday: SWIM + LIGHT UPPER BODY</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-200 font-semibold mb-2">Morning/Midday:</h4>
                <ul className="text-gray-300 text-sm space-y-1 mb-3">
                  <li>• Swim: 30-40 min moderate pace</li>
                  <li>• Mix freestyle and backstroke</li>
                  <li>• 5-min warmup and cooldown</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-200 font-semibold mb-2">Evening (if energy permits):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Pushups: 2 sets to near-failure</li>
                  <li>• Bar hangs: 2 × 30-45 seconds</li>
                  <li>• Rest 2-3 minutes between rounds</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tuesday */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold text-green-300 mb-3">Tuesday: ACTIVE RECOVERY</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-green-200 font-semibold mb-2">Activity:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 20-30 minute walk (flat terrain)</li>
                  <li>• Foam rolling: calves, quads, hip flexors</li>
                  <li>• Light stretching routine</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-200 font-semibold mb-2">Recovery Focus:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Extra hydration throughout day</li>
                  <li>• Consider Epsom salt bath</li>
                  <li>• Transport biking only</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wednesday */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-300 mb-3">Wednesday: SWIM + CORE</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-purple-200 font-semibold mb-2">Swimming:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 35-45 minutes with intervals</li>
                  <li>• 6-8 × 50m faster efforts</li>
                  <li>• 10 minutes easy cool-down</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-200 font-semibold mb-2">Strength:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Pullups: 3 sets to near-failure</li>
                  <li>• Dips: 3 sets (8-12 reps)</li>
                  <li>• Plank variations: 3 × 45-60 sec</li>
                  <li>• Dead bug: 3 × 10 each side</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thursday */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/20">
            <h3 className="text-xl font-bold text-yellow-300 mb-3">Thursday: BIKE EMPHASIS (Controlled)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-yellow-200 font-semibold mb-2">Cardio:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Structured bike ride: 45-60 min</li>
                  <li>• Moderate intensity (conversational pace)</li>
                  <li>• Flatter route preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-200 font-semibold mb-2">Recovery:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 15-minute gentle yoga</li>
                  <li>• Focus on hips and lower back</li>
                  <li>• No other intense activities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Friday */}
          <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl p-6 border border-red-500/20">
            <h3 className="text-xl font-bold text-red-300 mb-3">Friday: SWIM + FULL UPPER BODY</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-red-200 font-semibold mb-2">Swimming:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 30-40 min easy-moderate</li>
                  <li>• Focus on technique and breathing</li>
                  <li>• Make it enjoyable, not punishing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-200 font-semibold mb-2">Full Upper Body Routine:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Pushups, Pullups, Dips: 3 sets to failure</li>
                  <li>• Bar hangs: 2 × 45-60 seconds</li>
                  <li>• Farmers carry: 1/8 mile w/ 25-30lb DBs</li>
                  <li>• 2-3 min rest between exercises</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-xl p-6 border border-indigo-500/20">
            <h3 className="text-xl font-bold text-indigo-300 mb-3">Saturday: LONG SWIM OR BIKE</h3>
            <p className="text-gray-300 text-sm mb-3">Choose based on how you feel:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-indigo-200 font-semibold mb-2">Option A - Long Swim:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 45-60 min continuous</li>
                  <li>• Conversational/sustainable pace</li>
                  <li>• Long slow distance equivalent</li>
                </ul>
              </div>
              <div>
                <h4 className="text-indigo-200 font-semibold mb-2">Option B - Long Bike:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 60-90 min Zone 2 ride</li>
                  <li>• Conversational heart rate</li>
                  <li>• Scenic route, make it fun</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="bg-gradient-to-br from-gray-800/20 to-slate-900/20 rounded-xl p-6 border border-gray-500/20">
            <h3 className="text-xl font-bold text-gray-300 mb-3">Sunday: ACTIVE REST + ASSESSMENT</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-200 font-semibold mb-2">Recovery:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 20-30 min easy walk or light bike</li>
                  <li>• Gentle yoga or stretching: 20-30 min</li>
                  <li>• Equipment check and meal prep</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-200 font-semibold mb-2">Self-Assessment:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Calf soreness level (1-10 scale)</li>
                  <li>• Energy levels and sleep quality</li>
                  <li>• Plan next week's schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl font-bold text-white">Key Training Principles</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-green-300">Recovery Priority</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>NO running</strong> until calf soreness is completely gone</li>
              <li>• Swimming as primary cardio (zero calf impact)</li>
              <li>• When ready, introduce run/walk intervals slowly</li>
              <li>• Progressive volume increases: max 10% per week</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-blue-300">Daily Bike Management</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Transport rides count as activity</li>
              <li>• Keep commutes easier on harder workout days</li>
              <li>• Consider as "bonus cardio" not primary training</li>
              <li>• Avoid double hard bike sessions in one day</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-purple-300">Creatine Protocol</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Consistent 5g daily supplementation</li>
              <li>• <strong>Increase water intake significantly</strong></li>
              <li>• Expect 2-5 lb water weight increase (normal)</li>
              <li>• Supports recovery and reduces cramping</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-500/20">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold text-orange-300">Success Metrics</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Decreasing calf soreness weekly</li>
              <li>• Maintained/improved cardiovascular fitness</li>
              <li>• Increased upper body strength</li>
              <li>• Better sleep quality and energy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nutrition & Recovery */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-xl font-bold text-yellow-300 mb-4">Nutrition Timing</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-yellow-200 font-semibold mb-2">Pre-Workout (30-60 min):</h4>
              <p className="text-gray-300 text-sm">Light carbs</p>
            </div>
            <div>
              <h4 className="text-yellow-200 font-semibold mb-2">Post-Workout (30-60 min):</h4>
              <p className="text-gray-300 text-sm">Protein + carbs</p>
            </div>
            <div>
              <h4 className="text-yellow-200 font-semibold mb-2">Daily Targets:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Protein: 200g daily </li>
                <li>• Hydration: Half body weight in oz minimum</li>
                <li>• Don't skimp on carbs with high cardio volume</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl p-6 border border-red-500/20">
          <h3 className="text-xl font-bold text-red-300 mb-4">Recovery Protocol</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-red-200 font-semibold mb-2">Daily Essentials:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Quality sleep: 7-8 hours</li>
                <li>• Aggressive hydration</li>
                <li>• Consistent protein intake</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-200 font-semibold mb-2">Weekly Protocol:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Foam roll 3-4x per week</li>
                <li>• Epsom salt bath once weekly</li>
                <li>• Consider massage/sports therapy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-200 font-semibold mb-2 text-red-400">Red Flags - Stop & Rest:</h4>
              <ul className="text-red-300 text-sm space-y-1">
                <li>• Sharp pain vs. dull soreness</li>
                <li>• Pain worsening during workout</li>
                <li>• Limping or altered gait</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="mt-12 bg-gradient-to-br from-gray-800/20 to-slate-900/20 rounded-xl p-8 border border-gray-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">Training Philosophy at 40</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Recovery isn't optional—it's a critical part of training. The fact that I recognized overtraining 
          and pivoted to swimming shows good self-awareness. You don't lose fitness as fast as you think. 
          Taking 2-3 weeks to properly recover results in better long-term progress than grinding through 
          pain and risking real injury.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The real issue: too much high-intensity leg work combined with inadequate recovery. 
          Weekly volume might be fine, but more easy days and variety are essential. 
          Swimming provides that variety while maintaining cardiovascular fitness.
        </p>
      </div>
    </div>
  );
};