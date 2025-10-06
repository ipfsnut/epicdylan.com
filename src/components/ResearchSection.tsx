import React from 'react';
import { Brain } from 'lucide-react';
import { PageType } from '../types';

interface ResearchSectionProps {
  setCurrentPage: (page: PageType) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ setCurrentPage }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <Brain className="w-8 h-8 text-purple-400" />
        Consciousness Research
      </h2>
      <div 
        className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-6 cursor-pointer hover:from-purple-600/30 hover:to-indigo-600/30 transition-all duration-300 hover:border-white/30"
        onClick={() => setCurrentPage('consciousness')}
      >
        <p className="text-gray-200 mb-4 leading-relaxed">
          Advanced psychology degree student investigating the mathematical foundations of consciousness through nested Markov blankets 
          and autopoietic systems. Integrating theoretical neuroscience with empirical research.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/30 rounded-lg p-4">
            <h3 className="text-purple-300 font-semibold mb-2">Key Frameworks</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Free Energy Principle (Friston)</li>
              <li>• Autopoiesis (Varela & Maturana)</li>
              <li>• Bioelectric Intelligence (Levin)</li>
              <li>• Homeostatic Feelings (Damasio)</li>
            </ul>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <h3 className="text-purple-300 font-semibold mb-2">Research Focus</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Nested self-organizing systems</li>
              <li>• Metabolic constraints on cognition</li>
              <li>• PFC-amygdala dynamics</li>
              <li>• Vigilance & emotion recognition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};