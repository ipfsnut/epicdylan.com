import React from 'react';
import { ArrowLeft, ExternalLink, Target, Brain } from 'lucide-react';
import { PageType } from '../types';

interface CognitiveEffortPageProps {
  setCurrentPage: (page: PageType) => void;
}

export const CognitiveEffortPage: React.FC<CognitiveEffortPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={() => setCurrentPage('consciousness')}
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <Brain className="w-10 h-10 text-cyan-400" />
          Cognitive Effort Study
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          A comparison of facial emotion in physical and cognitive effort
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Study Overview</h2>
          <p className="text-gray-300 mb-6">
            This research investigates the neural and behavioral mechanisms underlying cognitive effort allocation 
            and its relationship to conscious decision-making processes. We're comparing facial emotional expressions 
            during physical versus cognitive effort tasks to understand how the brain processes different types of effort.
          </p>
          <p className="text-gray-300">
            The study aims to identify distinct patterns in emotional expression that differentiate between physical 
            exertion and mental strain.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-cyan-400" />
            <span className="text-lg text-cyan-300 font-semibold">Data Collection Phase</span>
          </div>
          <p className="text-gray-300">
            Currently recruiting participants and collecting behavioral data. We're using advanced facial recognition 
            technology to capture micro-expressions during both physical tasks (exercise) and cognitive tasks 
            (problem-solving) to understand effort.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Methodology</h2>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>Participants complete standardized physical effort tasks (hand-grip dynamometer)</li>
            <li>Participants complete cognitive effort tasks (Number Switching Task)</li>
            <li>High-resolution facial expression data captured throughout both conditions</li>
            <li>Self-reported effort ratings collected after each task</li>
            <li>Analysis using machine learning to identify expression patterns unique to each effort type</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Resources</h2>
          <div className="space-y-4">
            <a 
              href="https://github.com/ipfsnut/NST-vanilla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <div>
                <span className="text-lg font-semibold">GitHub Repository</span>
                <p className="text-sm text-gray-400">View the code and data analysis pipeline</p>
              </div>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};