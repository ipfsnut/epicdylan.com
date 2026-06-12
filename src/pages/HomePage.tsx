import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedPublication } from '../components/FeaturedPublication';
import { ResearchSection } from '../components/ResearchSection';
import { QuickLinks } from '../components/QuickLinks';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
      <Hero />
      <FeaturedPublication />
      <ResearchSection />
      <QuickLinks />
    </div>
  );
};
