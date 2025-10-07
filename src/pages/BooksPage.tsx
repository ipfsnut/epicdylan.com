import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export const BooksPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
        <BookOpen className="w-12 h-12 text-purple-400" />
        Books
      </h1>
      <p className="text-xl text-gray-400 mb-12">
        Published works exploring consciousness, computation, and the nature of mind
      </p>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 sm:w-32 flex-shrink-0 rounded-lg overflow-hidden aspect-[2/3]">
              <img 
                src="/INEVITABLEcover.png" 
                alt="Inevitable: Distributed Cognition and Network Superintelligence book cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Inevitable: Distributed Cognition and the Network of Superintelligence</h2>
              <p className="text-gray-300 mb-4">
                Modern science has done an extremely good job of getting to the bottom of a number of tough problems in information theory and the study of cognition. It is therefore surprising to see that the concept of artificial intelligence has derailed into speculation about intelligent machines. This book presents a contrasting vision of the future of intelligence. Instead of assuming that artificial general intelligence is on the way, the time has come to reconsider the way we think about AI in light of the facts that emerge from a careful study of the intelligence found in living minds.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.alexandriabooks.com/collection/inevitable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Alexandria
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.amazon.com/Inevitable-Distributed-Cognition-Network-Superintelligence/dp/1962668096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                >
                  Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 sm:w-32 flex-shrink-0 rounded-lg overflow-hidden aspect-[2/3]">
              <img 
                src="/formalDialectics.jpg" 
                alt="Formal Dialectics book cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Formal Dialectics</h2>
              <p className="text-gray-300 mb-4">
                Why do the attempts we make to explain the world around us fall short? Arguments for or against the existence of God, the question of free will, and even Principia Mathematica are all examples of explanations that look solid from some points of view, but which have serious weaknesses from other perspectives. This book explores the built-in limits of reason itself by pointing out the fact that language can only be used to create incomplete systems. Philosophy, mathematics, and logic supply the groundwork for the introduction of a framing mechanism to help thinkers understand why thinking itself can sometimes fail.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.amazon.com/Formal-Dialectics-Thomas-Dylan-Daniel/dp/1527515753/ref=sr_1_2?crid=8THHQYI2YNUF&dib=eyJ2IjoiMSJ9.aCiKogAMu-hkLwkNf4UiCampCekdmk7sTd6Qa645HDcGfQ-Ed5swOPU4l8htJ0LvxTU4eXau47kE6m4gHmO7xpijbwYBMJiKtSHcQedJAjw1N0YLeApcJk7Vr7T3-x9tf43SRBvb663hj98Yu80RDhLnfyxdJa-w9QkH1W6YrjWIafs9ATk8jNP7uOo7QCsxuXOF3Ut8nMFExmhbI9kM85Rd-YyWu3zNGlu36srPWKs.6HZ5vW5YZeZDduUYCebijnCJ8MiV1dTBRihvcw8l4ew&dib_tag=se&keywords=formal+dialectics&qid=1759793018&sprefix=formal+dialectics%2Caps%2C127&sr=8-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                >
                  Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};