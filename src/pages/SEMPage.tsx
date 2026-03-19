import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Maximize2, Minimize2, Network, BookOpen, Terminal, Heart, ClipboardList, GraduationCap } from 'lucide-react';
import { TipJar } from '../components/TipJar';

export const SEMPage: React.FC = () => {
  const [explainerOpen, setExplainerOpen] = useState(true);
  const [graphOpen, setGraphOpen] = useState(true);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const graphContainerRef = useRef<HTMLDivElement>(null);

  const scrollPosRef = useRef(0);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      scrollPosRef.current = window.scrollY;
      await graphContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        // restore scroll position after exiting fullscreen
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPosRef.current);
        });
      }
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-warm-text mb-4 flex items-center gap-3">
          <Network className="w-10 h-10 text-warm-accent" />
          SEM Tutor
        </h1>
        <p className="text-xl text-warm-text-secondary leading-relaxed mb-4">
          Built by a student to help students learn SEM &mdash; because it's important to know it well.
          77 concepts across 6 families, connected by 167 edges.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Spread', color: 'bg-red-100 text-red-700 border-red-200' },
            { name: 'Relationship', color: 'bg-blue-100 text-blue-700 border-blue-200' },
            { name: 'Sampling', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
            { name: 'Shape', color: 'bg-amber-100 text-amber-700 border-amber-200' },
            { name: 'SEM', color: 'bg-purple-100 text-purple-700 border-purple-200' },
            { name: 'Inference', color: 'bg-orange-100 text-orange-700 border-orange-200' },
          ].map(family => (
            <span
              key={family.name}
              className={`px-3 py-1 rounded-full border text-sm font-medium ${family.color}`}
            >
              {family.name}
            </span>
          ))}
        </div>
      </div>

      {/* Explainer — collapsible */}
      <div className="bg-white rounded-xl border border-warm-border mb-8">
        <button
          onClick={() => setExplainerOpen(!explainerOpen)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <h2 className="text-2xl font-bold font-display text-warm-text flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-warm-accent" />
            How to Use This
          </h2>
          {explainerOpen
            ? <ChevronUp className="w-5 h-5 text-warm-text-secondary" />
            : <ChevronDown className="w-5 h-5 text-warm-text-secondary" />}
        </button>
        {explainerOpen && (
          <div className="px-6 pb-6 space-y-6">
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Study with Claude Code
              </h3>
              <p className="text-warm-text-secondary text-sm mb-3">
                The primary way to use this: point Claude Code at the llms.txt and have it quiz you.
                The concept graph contains 77 nodes with definitions, formulas, worked examples, and teaching notes &mdash;
                everything an LLM needs to be your quiz master or guided practice tutor.
              </p>
              <div className="bg-white rounded-lg p-4 font-mono text-xs text-warm-text border border-warm-border space-y-1">
                <p className="text-warm-text-secondary"># In Claude Code, try:</p>
                <p>"Read epicdylan.com/sem/llms.txt and quiz me on SEM"</p>
                <p>"Give me guided practice on the Spread pipeline"</p>
                <p>"I'm weak on fit indices &mdash; drill me on RMSEA, CFI, and SRMR"</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-warm-bg rounded-lg p-5">
                <h3 className="text-warm-accent font-semibold mb-2">Quiz Mode</h3>
                <p className="text-warm-text-secondary text-sm">
                  10 questions per round with dual-axis scoring: difficulty tiers (1&ndash;5) crossed with
                  skill tracks (Conceptual, Computational, Interpretive). Each track has its own ELO,
                  so the quiz keeps drilling your weak spots.
                </p>
              </div>
              <div className="bg-warm-bg rounded-lg p-5">
                <h3 className="text-warm-accent font-semibold mb-2">Guided Practice</h3>
                <p className="text-warm-text-secondary text-sm">
                  No scoring, no timer, no judgment. Pick a concept, work through the formula step by step,
                  ask anything. The tutor scaffolds without solving &mdash; building computation fluency so
                  your brain is free for interpretation.
                </p>
              </div>
            </div>

            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-2">Browse the Graph</h3>
              <p className="text-warm-text-secondary text-sm">
                Click any node to see its definition, formula, and connections. Use the category filters
                to focus on a family. Search by name. Especially useful if you're new to this form of
                math &mdash; wander around and see how everything connects.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Graph — collapsible with fullscreen */}
      <div className="bg-white rounded-xl border border-warm-border mb-8">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={() => setGraphOpen(!graphOpen)}
            className="flex items-center gap-3 text-left"
          >
            <h2 className="text-2xl font-bold font-display text-warm-text flex items-center gap-3">
              <Network className="w-6 h-6 text-warm-accent" />
              Concept Graph
            </h2>
            {graphOpen
              ? <ChevronUp className="w-5 h-5 text-warm-text-secondary ml-2" />
              : <ChevronDown className="w-5 h-5 text-warm-text-secondary ml-2" />}
          </button>
          {graphOpen && (
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-warm-accent hover:bg-warm-bg transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen
                ? <Minimize2 className="w-4 h-4" />
                : <Maximize2 className="w-4 h-4" />}
              {isFullscreen ? 'Exit' : 'Fullscreen'}
            </button>
          )}
        </div>
        {graphOpen && (
          <div
            ref={graphContainerRef}
            className="bg-[#08080c] rounded-b-xl overflow-hidden relative"
            style={{ height: isFullscreen ? '100vh' : '70vh' }}
          >
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101018]/90 border border-[#2a2a3c] text-[#e4e4ec] text-sm font-medium hover:bg-[#181824] transition-all backdrop-blur-sm"
              >
                <Minimize2 className="w-4 h-4" />
                Exit Fullscreen
              </button>
            )}
            <iframe
              src="/sem/graph.html"
              title="SEM Tutor — Interactive Concept Graph"
              className="w-full h-full border-0"
              allow="fullscreen"
            />
          </div>
        )}
      </div>

      {/* Quiz Rules — collapsible */}
      <div className="bg-white rounded-xl border border-warm-border mb-8">
        <button
          onClick={() => setRulesOpen(!rulesOpen)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <h2 className="text-2xl font-bold font-display text-warm-text flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-warm-accent" />
            Quiz Rules
          </h2>
          {rulesOpen
            ? <ChevronUp className="w-5 h-5 text-warm-text-secondary" />
            : <ChevronDown className="w-5 h-5 text-warm-text-secondary" />}
        </button>
        {rulesOpen && (
          <div className="px-6 pb-6 space-y-6">
            <p className="text-warm-text-secondary text-sm">
              These rules are baked into the llms.txt so Claude Code (or any LLM) can run the quiz for you.
              They're here for reference.
            </p>

            {/* Dual-axis system */}
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-3">Dual-Axis System: Difficulty &times; Skill Type</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-warm-text font-medium text-sm mb-2">Difficulty Tiers (adaptive ELO)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-warm-text-secondary border-b border-warm-border">
                          <th className="pb-2 pr-4">Tier</th>
                          <th className="pb-2 pr-4">Label</th>
                          <th className="pb-2 pr-4">Points</th>
                          <th className="pb-2">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-warm-text-secondary">
                        <tr><td className="py-1.5 pr-4 font-mono">1</td><td className="pr-4">Easy</td><td className="pr-4">1 pt</td><td>Single concept, given numbers, one operation</td></tr>
                        <tr><td className="py-1.5 pr-4 font-mono">2</td><td className="pr-4">Moderate</td><td className="pr-4">2 pts</td><td>Two-step problem, identify which formula</td></tr>
                        <tr><td className="py-1.5 pr-4 font-mono">3</td><td className="pr-4">Standard</td><td className="pr-4">3 pts</td><td>Multi-step with setup, explain reasoning</td></tr>
                        <tr><td className="py-1.5 pr-4 font-mono">4</td><td className="pr-4">Hard</td><td className="pr-4">4 pts</td><td>Combine concepts across families</td></tr>
                        <tr><td className="py-1.5 pr-4 font-mono">5</td><td className="pr-4">Expert</td><td className="pr-4">5 pts</td><td>Derive, critique, or troubleshoot from scratch</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-warm-text font-medium text-sm mb-2">Skill Tracks (independent ELO per track)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-4 border border-warm-border">
                      <h5 className="text-warm-accent font-semibold text-sm mb-1">Conceptual</h5>
                      <p className="text-warm-text-secondary text-xs">What is it, why, how does it connect?</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-warm-border">
                      <h5 className="text-warm-accent font-semibold text-sm mb-1">Computational</h5>
                      <p className="text-warm-text-secondary text-xs">Work the math, use the formula.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-warm-border">
                      <h5 className="text-warm-accent font-semibold text-sm mb-1">Interpretive</h5>
                      <p className="text-warm-text-secondary text-xs">Read output, make a judgment call.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Per-round quotas */}
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-2">Per-Round Quotas</h3>
              <ul className="text-warm-text-secondary text-sm space-y-1 list-disc list-inside">
                <li>10 questions per round</li>
                <li>At least 3 Computational questions</li>
                <li>At least 3 Interpretive questions</li>
                <li>At most 4 Conceptual questions</li>
              </ul>
              <p className="text-warm-text-secondary text-sm mt-2 italic">
                This prevents hiding in theory. Each track has its own ELO starting at Tier 3.
              </p>
            </div>

            {/* Scoring */}
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-2">Scoring</h3>
              <ul className="text-warm-text-secondary text-sm space-y-1 list-disc list-inside">
                <li>Correct answer earns points for that tier</li>
                <li>No penalty for wrong answers (tier drops in that track only)</li>
                <li>Half points for partially correct answers</li>
                <li>Brief feedback after each answer</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Guided Practice — collapsible */}
      <div className="bg-white rounded-xl border border-warm-border mb-8">
        <button
          onClick={() => setPracticeOpen(!practiceOpen)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <h2 className="text-2xl font-bold font-display text-warm-text flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-warm-accent" />
            Guided Practice
          </h2>
          {practiceOpen
            ? <ChevronUp className="w-5 h-5 text-warm-text-secondary" />
            : <ChevronDown className="w-5 h-5 text-warm-text-secondary" />}
        </button>
        {practiceOpen && (
          <div className="px-6 pb-6 space-y-6">
            <p className="text-warm-text-secondary text-sm">
              Guided practice is <strong>not a quiz</strong>. It's an open-ended math drill with no scoring, no timer,
              and no judgment. The goal is fluency.
            </p>

            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-3">How It Works</h3>
              <ol className="text-warm-text-secondary text-sm space-y-2 list-decimal list-inside">
                <li>You pick a concept (or ask for one to be picked for you)</li>
                <li>The tutor walks you through the formula step by step, with concrete numbers</li>
                <li>You do the next one with different numbers, showing your work</li>
                <li>If you get stuck, ask anything &mdash; the tutor explains without judgment</li>
                <li>Repeat until solid, then move to the next concept</li>
              </ol>
            </div>

            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-3">Suggested Drill Sequences</h3>
              <div className="space-y-3">
                {[
                  { name: 'The Spread Pipeline', steps: 'deviation \u2192 SS \u2192 variance \u2192 SD \u2192 standard error' },
                  { name: 'Covariance to Correlation', steps: 'covariance \u2192 correlation (standardize) \u2192 r\u00B2 (square it)' },
                  { name: 'Matrix Vitals', steps: 'covariance matrix \u2192 trace \u2192 eigenvalues \u2192 determinant' },
                  { name: 'SEM Fit Gauntlet', steps: 'degrees of freedom \u2192 \u03C7\u00B2 \u2192 RMSEA \u2192 CFI \u2192 SRMR' },
                  { name: 'Model Comparison', steps: 'AIC (A vs B) \u2192 BIC (same) \u2192 \u03C7\u00B2 difference test' },
                ].map(seq => (
                  <div key={seq.name} className="bg-white rounded-lg p-4 border border-warm-border">
                    <h4 className="text-warm-text font-medium text-sm mb-1">{seq.name}</h4>
                    <p className="text-warm-text-secondary text-xs font-mono">{seq.steps}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-2">Tutor Behavior</h3>
              <ul className="text-warm-text-secondary text-sm space-y-1 list-disc list-inside">
                <li>Never skip steps &mdash; show every intermediate calculation</li>
                <li>Scaffold, don't solve &mdash; give the next step only, not the whole answer</li>
                <li>Connect math to meaning &mdash; after every computation, explain what the number means</li>
                <li>Track what's shaky &mdash; circle back to operations the student struggles with</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Tip Jar */}
      <div className="bg-white rounded-xl border border-warm-border overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-2 flex items-center gap-3">
            <Heart className="w-6 h-6 text-warm-accent" />
            Tip Jar
          </h2>
          <p className="text-warm-text-secondary text-sm">
            This is free, open-source software. If it helped you learn, consider leaving a tip.
          </p>
        </div>
        <TipJar />
      </div>
    </div>
  );
};
