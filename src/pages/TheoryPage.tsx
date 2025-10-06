import React from 'react';
import { Brain, ExternalLink } from 'lucide-react';

export const TheoryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
        <Brain className="w-12 h-12 text-indigo-400" />
        Theory Blog
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Explorations in consciousness, free energy, and self-organizing systems
      </p>

      <a
        href="https://paragraph.com/@tdylandanielphilosophy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors mb-12"
      >
        Visit Full Blog
        <ExternalLink className="w-5 h-5" />
      </a>

      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Latest Posts from Paragraph</h2>
            <ExternalLink className="w-6 h-6 text-indigo-400" />
          </div>
          <p className="text-gray-300 mb-6">
            Recent writings on consciousness research, theoretical neuroscience, and the integration of 
            free energy principles with autopoietic systems theory.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-white mb-1">Nested Markov Blankets</h3>
              <p className="text-gray-400 text-sm mb-2">
                Exploring how hierarchical boundaries give rise to consciousness and agency
              </p>
              <a 
                href="https://paragraph.com/@tdylandanielphilosophy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                Read more →
              </a>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-white mb-1">Free Energy & Feeling</h3>
              <p className="text-gray-400 text-sm mb-2">
                How thermodynamic imperatives become subjective experience
              </p>
              <a 
                href="https://paragraph.com/@tdylandanielphilosophy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                Read more →
              </a>
            </div>

            <div className="border-l-4 border-pink-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-white mb-1">Autopoiesis & Active Inference</h3>
              <p className="text-gray-400 text-sm mb-2">
                Bridging Varela's enactivism with Friston's computational framework
              </p>
              <a 
                href="https://paragraph.com/@tdylandanielphilosophy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                Read more →
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              For the complete blog with all posts, visit{' '}
              <a 
                href="https://paragraph.com/@tdylandanielphilosophy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                paragraph.com/@tdylandanielphilosophy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};