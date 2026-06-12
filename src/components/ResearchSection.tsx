import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="section-number">02 //</span>
        <h2 className="text-3xl font-bold font-display text-warm-text flex items-center gap-3">
          <Brain className="w-8 h-8 text-warm-accent" />
          Research
        </h2>
      </div>
      <div
        className="bg-white rounded-xl p-8 border border-warm-border mb-6 cursor-pointer hover:border-warm-accent/50 hover:shadow-md transition-all duration-300"
        onClick={() => navigate('/research')}
      >
        <p className="text-warm-text-secondary mb-4 leading-relaxed">
          Two strands — cognitive neuroscience and philosophy — converging on one question: is the
          mind reducible to computation? The neuroscience grounds cognition in the metabolic and
          oscillatory activity of living systems; the philosophy maps where computational accounts of
          mind and reason reach their limits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-warm-bg rounded-lg p-4">
            <h3 className="text-warm-accent font-semibold mb-2">Key Ideas</h3>
            <ul className="text-warm-text-secondary space-y-1 text-sm">
              <li>• Free Energy Principle (Friston)</li>
              <li>• Autopoiesis (Varela & Maturana)</li>
              <li>• Bioelectric Intelligence (Levin)</li>
              <li>• Homeostatic Feelings (Damasio)</li>
            </ul>
          </div>
          <div className="bg-warm-bg rounded-lg p-4">
            <h3 className="text-warm-accent font-semibold mb-2">Research Focus</h3>
            <ul className="text-warm-text-secondary space-y-1 text-sm">
              <li>• Nested self-organizing systems</li>
              <li>• Metabolic constraints on cognition</li>
              <li>• Cognitive effort & emotion recognition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
