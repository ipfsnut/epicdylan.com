import React from 'react';
import { Hero } from '../components/Hero';
import { ResearchSection } from '../components/ResearchSection';
import { BlogSection } from '../components/BlogSection';
import { SoftwareSection } from '../components/SoftwareSection';
import { QuickLinks } from '../components/QuickLinks';
import { PageType } from '../types';

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Hero />
      <ResearchSection setCurrentPage={setCurrentPage} />
      <BlogSection />
      <SoftwareSection />
      <QuickLinks setCurrentPage={setCurrentPage} />
    </div>
  );
};