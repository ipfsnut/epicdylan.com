import React from 'react';
import { Brain, ArrowLeft, BookOpen, Microscope, Network, Target } from 'lucide-react';
import { PageType } from '../types';

interface ConsciousnessPageProps {
  setCurrentPage: (page: PageType) => void;
}

export const ConsciousnessPage: React.FC<ConsciousnessPageProps> = ({ setCurrentPage }) => {

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <Brain className="w-10 h-10 text-purple-400" />
          Consciousness Research
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Investigating the mathematical foundations of consciousness through nested Markov blankets and autopoietic systems. Integrating theoretical neuroscience with empirical research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Theoretical Frameworks
          </h2>
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-purple-300 font-semibold mb-2">Free Energy Principle</h3>
              <p className="text-gray-300 text-sm">
                Karl Friston's mathematical framework describing how biological systems minimize surprise 
                through predictive coding and active inference.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-purple-300 font-semibold mb-2">Autopoiesis</h3>
              <p className="text-gray-300 text-sm">
                Varela & Maturana's theory of self-organizing systems that maintain their organization 
                through continuous production of their own components.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-purple-300 font-semibold mb-2">Bioelectric Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Michael Levin's framework exploring how bioelectric patterns store information 
                and guide morphogenesis and cognition.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-purple-300 font-semibold mb-2">Homeostatic Feelings</h3>
              <p className="text-gray-300 text-sm">
                Antonio Damasio's approach to understanding consciousness through the lens of 
                homeostatic regulation and interoceptive awareness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Microscope className="w-6 h-6 text-cyan-400" />
            Research Focus Areas
          </h2>
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-cyan-300 font-semibold mb-2">Nested Self-Organizing Systems</h3>
              <p className="text-gray-300 text-sm">
                Investigating how hierarchical Markov blankets create nested boundaries of self-organization, 
                from cellular to cognitive levels.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-cyan-300 font-semibold mb-2">Metabolic Constraints on Cognition</h3>
              <p className="text-gray-300 text-sm">
                Exploring how energetic efficiency shapes cognitive architecture and conscious experience 
                through metabolic optimization principles.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-cyan-300 font-semibold mb-2">PFC-Amygdala Dynamics</h3>
              <p className="text-gray-300 text-sm">
                Examining prefrontal cortex and amygdala interactions in emotional regulation 
                and conscious decision-making processes.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-cyan-300 font-semibold mb-2">Vigilance & Emotion Recognition</h3>
              <p className="text-gray-300 text-sm">
                Studying attention mechanisms and emotional processing as fundamental components 
                of conscious awareness and social cognition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-lg rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Network className="w-6 h-6 text-purple-400" />
          Current Research Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="bg-black/20 rounded-lg p-6 cursor-pointer hover:bg-black/30 transition-colors"
            onClick={() => setCurrentPage('cognitive-effort')}
          >
            <h3 className="text-cyan-300 font-semibold mb-3">Cognitive Effort</h3>
            <p className="text-gray-300 text-sm mb-4">
              Investigating the neural and behavioral mechanisms underlying cognitive effort allocation 
              and its relationship to conscious decision-making processes.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <Target className="w-4 h-4" />
              <span className="text-sm">Status: Data Collection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};