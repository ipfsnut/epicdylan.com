import React from 'react';
import { Hero } from '../components/Hero';
import { ResearchSection } from '../components/ResearchSection';
import { BlogSection } from '../components/BlogSection';
import { SoftwareSection } from '../components/SoftwareSection';
import { HealthResearchSection } from '../components/HealthResearchSection';
import { QuickLinks } from '../components/QuickLinks';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Hero />
      <ResearchSection />
      <BlogSection />
      <SoftwareSection />
      <HealthResearchSection />
      <QuickLinks />
    </div>
  );
};