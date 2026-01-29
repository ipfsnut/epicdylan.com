import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TerminalBanner } from '../components/TerminalBanner';
import { ResearchSection } from '../components/ResearchSection';
import { BlogSection } from '../components/BlogSection';
import { SoftwareSection } from '../components/SoftwareSection';
import { LabsSection } from '../components/LabsSection';
import { HealthResearchSection } from '../components/HealthResearchSection';
import { ChessSection } from '../components/ChessSection';
import { QuickLinks } from '../components/QuickLinks';
import { ScrollReveal } from '../components/ScrollReveal';
import { AsciiDivider } from '../components/AsciiDivider';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleChessClick = () => {
    navigate('/chess');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
      <Hero />
      <TerminalBanner />

      <ScrollReveal>
        <ResearchSection />
      </ScrollReveal>

      <AsciiDivider variant="dots" />

      <ScrollReveal delay={100}>
        <BlogSection />
      </ScrollReveal>

      <AsciiDivider variant="arrows" />

      <ScrollReveal delay={100}>
        <SoftwareSection />
      </ScrollReveal>

      <AsciiDivider variant="binary" />

      <ScrollReveal delay={100}>
        <LabsSection />
      </ScrollReveal>

      <AsciiDivider variant="default" />

      <ScrollReveal delay={100}>
        <HealthResearchSection />
      </ScrollReveal>

      <AsciiDivider variant="dots" />

      <ScrollReveal delay={100}>
        <ChessSection
          onClick={handleChessClick}
          showViewMoreButton={true}
        />
      </ScrollReveal>

      <AsciiDivider variant="arrows" />

      <ScrollReveal delay={100}>
        <QuickLinks />
      </ScrollReveal>
    </div>
  );
};