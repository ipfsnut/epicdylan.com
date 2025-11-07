import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ResearchSection } from '../components/ResearchSection';
import { BlogSection } from '../components/BlogSection';
import { SoftwareSection } from '../components/SoftwareSection';
import { HealthResearchSection } from '../components/HealthResearchSection';
import { ChessSection } from '../components/ChessSection';
import { QuickLinks } from '../components/QuickLinks';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleChessClick = () => {
    navigate('/chess');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Hero />
      <ResearchSection />
      <BlogSection />
      <SoftwareSection />
      <HealthResearchSection />
      <ChessSection 
        onClick={handleChessClick}
        showViewMoreButton={true}
      />
      <QuickLinks />
    </div>
  );
};