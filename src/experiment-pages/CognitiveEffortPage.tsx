import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Target, Brain } from 'lucide-react';

export const CognitiveEffortPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/research"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Brain className="w-10 h-10 text-warm-accent" />
          Cognitive Effort Study
        </h1>
        <p className="text-xl text-warm-text-secondary leading-relaxed">
          A comparison of facial emotion in physical and cognitive effort
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Study Overview</h2>
          <p className="text-warm-text-secondary mb-6">
            This research investigates the neural and behavioral mechanisms underlying cognitive effort allocation
            and its relationship to conscious decision-making processes. We're comparing facial emotional expressions
            during physical versus cognitive effort tasks to understand how the brain processes different types of effort.
          </p>
          <p className="text-warm-text-secondary">
            The study aims to identify distinct patterns in emotional expression that differentiate between physical
            exertion and mental strain.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Current Status</h2>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-warm-accent" />
            <span className="text-lg text-warm-accent font-semibold">Data Collection Phase</span>
          </div>
          <p className="text-warm-text-secondary">
            Currently recruiting participants and collecting behavioral data. We're using advanced facial recognition
            technology to capture micro-expressions during both physical tasks (exercise) and cognitive tasks
            (problem-solving) to understand effort.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Methodology</h2>
          <ul className="text-warm-text-secondary space-y-3 list-disc list-inside">
            <li>Participants complete standardized physical effort tasks (hand-grip dynamometer)</li>
            <li>Participants complete cognitive effort tasks (Number Switching Task)</li>
            <li>High-resolution facial expression data captured throughout both conditions</li>
            <li>Self-reported effort ratings collected after each task</li>
            <li>Analysis using machine learning to identify expression patterns unique to each effort type</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Resources</h2>
          <div className="space-y-4">
            <a
              href="https://github.com/ipfsnut/NST-vanilla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-warm-accent hover:text-warm-accent-hover transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <div>
                <span className="text-lg font-semibold">GitHub Repository</span>
                <p className="text-sm text-warm-text-secondary">View the code and data analysis pipeline</p>
              </div>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};
