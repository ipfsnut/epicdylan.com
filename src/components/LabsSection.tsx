import React from 'react';
import { Beaker, ExternalLink } from 'lucide-react';
import { FarcasterAvatar } from './FarcasterAvatar';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tagline, description, url, icon, gradient }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-xl opacity-50 group-hover:opacity-100 blur-sm transition-all duration-500 animate-border-spin"></div>

      {/* Card content */}
      <div className={`relative bg-gradient-to-br ${gradient} backdrop-blur-lg rounded-xl p-6 border border-white/10 h-full transition-all duration-300 group-hover:scale-[1.02]`}>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-black/30 rounded-lg">
            {icon}
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-cyan-300 text-sm font-mono mb-3">{tagline}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-purple-300 text-sm font-medium group-hover:text-purple-200 transition-colors">
          <span>Launch App</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </a>
  );
};

export const LabsSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-2">
        <span className="section-number">04 //</span>
        <h2 className="text-3xl font-bold text-white flex items-center gap-3 glitch-hover" data-text="Labs">
          <Beaker className="w-8 h-8 text-cyan-400" />
          Labs
        </h2>
      </div>
      <p className="text-gray-400 mb-6 font-mono text-sm">{'// active experiments & live projects'}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="ABC DAO"
          tagline="Always. Be. Coding."
          description="Green Hat Free Open Source Software Collective. Building open source tools and supporting developers in the Farcaster ecosystem."
          url="https://abc.epicdylan.com"
          icon={<FarcasterAvatar username="abc-dao-dev" size="sm" showLink={false} />}
          gradient="from-green-900/40 to-emerald-900/40"
        />

        <ProjectCard
          title="ArbMe"
          tagline="Permissionless Arb Routes"
          description="DeFi arbitrage platform on Base. Track price fluctuations, manage liquidity pools, and stake tokens for automated returns."
          url="https://arbme.epicdylan.com"
          icon={<FarcasterAvatar username="arbme" size="sm" showLink={false} />}
          gradient="from-amber-900/40 to-orange-900/40"
        />
      </div>
    </div>
  );
};
