import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, BookOpen, Microscope, Network, Target } from 'lucide-react';

export const ConsciousnessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Brain className="w-10 h-10 text-warm-accent" />
          Consciousness Research
        </h1>
        <p className="text-xl text-warm-text-secondary leading-relaxed">
          Investigating the mathematical foundations of consciousness through nested Markov blankets and autopoietic systems. Integrating theoretical neuroscience with empirical research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-warm-accent" />
            Theoretical Frameworks
          </h2>
          <div className="space-y-4">
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Free Energy Principle</h3>
              <p className="text-warm-text-secondary text-sm">
                Karl Friston's mathematical framework describing how biological systems minimize surprise
                through predictive coding and active inference.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Autopoiesis</h3>
              <p className="text-warm-text-secondary text-sm">
                Varela & Maturana's theory of self-organizing systems that maintain their organization
                through continuous production of their own components.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Bioelectric Intelligence</h3>
              <p className="text-warm-text-secondary text-sm">
                Michael Levin's framework exploring how bioelectric patterns store information
                and guide morphogenesis and cognition.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Homeostatic Feelings</h3>
              <p className="text-warm-text-secondary text-sm">
                Antonio Damasio's approach to understanding consciousness through the lens of
                homeostatic regulation and interoceptive awareness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <Microscope className="w-6 h-6 text-warm-accent" />
            Research Focus Areas
          </h2>
          <div className="space-y-4">
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Nested Self-Organizing Systems</h3>
              <p className="text-warm-text-secondary text-sm">
                Investigating how hierarchical Markov blankets create nested boundaries of self-organization,
                from cellular to cognitive levels.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Metabolic Constraints on Cognition</h3>
              <p className="text-warm-text-secondary text-sm">
                Exploring how energetic efficiency shapes cognitive architecture and conscious experience
                through metabolic optimization principles.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">PFC-Amygdala Dynamics</h3>
              <p className="text-warm-text-secondary text-sm">
                Examining prefrontal cortex and amygdala interactions in emotional regulation
                and conscious decision-making processes.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-4">
              <h3 className="text-warm-accent font-semibold mb-2">Vigilance & Emotion Recognition</h3>
              <p className="text-warm-text-secondary text-sm">
                Studying attention mechanisms and emotional processing as fundamental components
                of conscious awareness and social cognition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Network className="w-6 h-6 text-warm-accent" />
          Current Research Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-warm-bg rounded-lg p-6 cursor-pointer hover:shadow-md transition-all"
            onClick={() => navigate('/experiments/cognitive-effort')}
          >
            <h3 className="text-warm-accent font-semibold mb-3">Cognitive Effort</h3>
            <p className="text-warm-text-secondary text-sm mb-4">
              Investigating the neural and behavioral mechanisms underlying cognitive effort allocation
              and its relationship to conscious decision-making processes.
            </p>
            <div className="flex items-center gap-2 text-warm-accent">
              <Target className="w-4 h-4" />
              <span className="text-sm">Status: Data Collection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
