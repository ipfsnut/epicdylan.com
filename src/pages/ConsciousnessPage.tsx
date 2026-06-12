import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Microscope, ArrowRight, GraduationCap } from 'lucide-react';

const themes = [
  {
    title: 'Oscillatory dynamics as coordination layer',
    body: 'Reframing neural rhythms not as the mechanism that implements cognition, but as a metabolically driven coordination layer that lets individual cells map the body and its environment.',
  },
  {
    title: 'Markov blankets and the limits of measurement',
    body: 'Using the formalism of Markov blankets to explain why brain imaging cannot directly reveal cognitive processes — what we record sits outside the boundary of the system doing the cognizing.',
  },
  {
    title: 'Metabolic constraints on cognition',
    body: 'How a degraded energetic substrate constrains cognitive capacity — a pattern shared across ME/CFS, Long COVID, cancer-related cognitive impairment, Alzheimer’s disease, and age-related decline.',
  },
  {
    title: 'Ecological psychology and enactivism',
    body: 'Treating perception and action as primary, with affordances and the “virtual space of cognition” as an alternative to representationalist accounts of the mind.',
  },
];

const philosophyBooks = [
  {
    cover: '/formalDialectics.jpg',
    title: 'Formal Dialectics',
    meta: 'Cambridge Scholars Publishing, 2018',
    body: 'On the limits of reason: because language can only build incomplete systems, some of our oldest questions resist resolution by their very structure.',
  },
  {
    cover: '/INEVITABLEcover.png',
    title: 'INEVITABLE',
    meta: 'Whitney Morgan Media, 2024',
    body: 'On the philosophy of mind and AI: intelligence as an emergent feature of living networks, not a computational property that can be rebuilt in silicon.',
  },
];

const foundations = [
  { name: 'Free Energy Principle', who: 'Karl Friston' },
  { name: 'Autopoiesis & enactivism', who: 'Varela & Maturana' },
  { name: 'Bioelectric intelligence', who: 'Michael Levin' },
  { name: 'Homeostatic feelings', who: 'Antonio Damasio' },
];

export const ConsciousnessPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold font-display text-warm-text mb-8 flex items-center gap-3">
        <Brain className="w-10 h-10 text-warm-accent" />
        Research
      </h1>

      {/* Research statement */}
      <div className="space-y-5 text-warm-text leading-relaxed mb-14 max-w-3xl">
        <p className="text-xl text-warm-text-secondary">
          My work in cognition is inspired by my philosophy background. I take inspiration from Hermann von Helmholtz, who leveraged philosophy to inspire high impact laboratory work.
        </p>
        <p>
          The neuroscience asks how cognition is grounded in the physical activity of living systems.
          The philosophy asks where formal, computational accounts of mind and reason reach their
          limits. Each informs the other.
        </p>
      </div>

      {/* Cognitive neuroscience */}
      <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Cognitive neuroscience</h2>
      <div className="space-y-5 text-warm-text leading-relaxed mb-8 max-w-3xl">
        <p>
          The central claim of my recent work is that neural oscillations are not the mechanism that
          implements cognition, but a <span className="italic">coordination layer</span>: metabolic
          activity produces rhythmic patterns that individual cells can read, allowing an organism to
          map its own body and its environment.
        </p>
        <p>
          Using the formalism of <span className="italic">Markov blankets</span>, this explains why
          brain imaging cannot directly reveal cognitive processes — what we measure sits outside the
          boundary of the system doing the cognizing — and it predicts that a degraded metabolic
          substrate constrains cognitive capacity, a pattern shared across conditions as varied as
          ME/CFS, Long COVID, cancer-related cognitive impairment, Alzheimer’s disease, and
          age-related decline. The framework is testable: it predicts that aperiodic spectral
          flattening should precede the loss of specific oscillatory peaks.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {themes.map(({ title, body }) => (
          <div key={title} className="bg-white rounded-xl p-6 border border-warm-border">
            <h3 className="text-warm-text font-semibold mb-2">{title}</h3>
            <p className="text-warm-text-secondary text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Philosophy</h2>
      <div className="space-y-5 text-warm-text leading-relaxed mb-8 max-w-3xl">
        <p>
          The philosophy came first, and it remains central. Trained in philosophy through the
          master’s level, I work on the philosophy of mind and language and the limits of formal
          reasoning — questions I have pursued across two books and a chapter on the philosophy of
          language.
        </p>
        <p>
          Both books share the target that drives the empirical program: the assumption that thinking
          is, at bottom, computation. The philosophical work says why that assumption breaks down in
          principle; the neuroscience shows what minds are doing instead.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {philosophyBooks.map(({ cover, title, meta, body }) => (
          <Link
            key={title}
            to="/books"
            className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-colors flex gap-4"
          >
            <img
              src={cover}
              alt={`${title} cover`}
              className="w-16 flex-shrink-0 self-start rounded aspect-[2/3] object-cover border border-warm-border"
            />
            <div>
              <h3 className="text-warm-text font-semibold leading-snug">{title}</h3>
              <p className="text-warm-text-secondary/70 text-xs mb-2">{meta}</p>
              <p className="text-warm-text-secondary text-sm leading-relaxed">{body}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Empirical work */}
      <div className="bg-white rounded-xl p-6 border border-warm-border mb-14">
        <div className="flex items-start gap-4">
          <Microscope className="w-6 h-6 text-warm-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-warm-text font-semibold mb-2">Empirical work</h3>
            <p className="text-warm-text-secondary text-sm leading-relaxed">
              Alongside the theory, I run ecologically valid behavioral studies on cognition in the Integrated Cognitive Studies
              (ICS) Lab at Texas Tech University.
            </p>
          </div>
        </div>
      </div>

      {/* Foundations */}
      <h2 className="text-2xl font-bold font-display text-warm-text mb-2">Foundations</h2>
      <p className="text-warm-text-secondary text-sm mb-6">
        The work builds on, and argues with, four lines of thought:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {foundations.map(({ name, who }) => (
          <div key={name} className="bg-warm-bg rounded-lg p-4 border border-warm-border">
            <p className="text-warm-text text-sm font-medium leading-snug">{name}</p>
            <p className="text-warm-text-secondary/70 text-xs mt-1">{who}</p>
          </div>
        ))}
      </div>

      {/* Publication CTA + affiliation */}
      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <p className="text-xs uppercase tracking-widest text-warm-text-secondary mb-2">
          Latest publication
        </p>
        <h3 className="text-xl font-bold font-display text-warm-text leading-snug mb-3">
          Oscillatory Dynamics as the Coordination Layer of the Organism
        </h3>
        <p className="text-warm-text-secondary text-sm mb-5">
          Frontiers in Neuroscience, 20 (2026), in press.
        </p>
        <Link
          to="/publications"
          className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
        >
          View publications
          <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex items-center gap-2 text-warm-text-secondary text-sm mt-6 pt-6 border-t border-warm-border">
          <GraduationCap className="w-4 h-4 flex-shrink-0" />
          Ph.D. student in Cognition &amp; Cognitive Neuroscience, Texas Tech University — Integrated
          Cognitive Studies (ICS) Lab.
        </div>
      </div>
    </div>
  );
};
