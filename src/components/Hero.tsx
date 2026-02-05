import React from 'react';
import { Github, Users, Code2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FarcasterAvatar } from './FarcasterAvatar';

export const Hero: React.FC = () => {
  const { farcasterData, githubData } = useApp();

  // Prefer Farcaster pfp, fallback to GitHub
  const avatarUrl = farcasterData?.pfp_url || githubData?.avatar_url;

  return (
    <div className="text-center mb-16">
      <div className="mb-6">
        {avatarUrl && (
          <a
            href="https://warpcast.com/epicdylan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <img
              src={avatarUrl}
              alt="Dylan"
              className="w-32 h-32 rounded-full mx-auto border-4 border-warm-accent shadow-lg"
            />
          </a>
        )}
      </div>
      <h1 className="text-6xl font-bold mb-4 font-display text-warm-text">
        Dylan
      </h1>
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="relative">
          <div className="w-3 h-3 bg-warm-accent rounded-full online-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-warm-accent rounded-full animate-ping opacity-75"></div>
        </div>
        <p className="text-2xl text-warm-text-secondary">
          Consciousness Researcher • Web3 Builder
        </p>
      </div>
      <p className="text-xl text-warm-text-secondary mb-6">
        Psychology PhD Student • Open Source Developer • Author
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="https://github.com/ipfsnut"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://warpcast.com/epicdylan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-warm-text hover:bg-warm-text/90 text-white rounded-lg transition-colors"
        >
          <Users className="w-5 h-5" />
          Farcaster
        </a>
        <a
          href="https://github.com/ipfsnut/epicdylan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-warm-text-secondary hover:bg-warm-text text-white rounded-lg transition-colors"
        >
          <Code2 className="w-5 h-5" />
          Site Source
        </a>
      </div>

      {/* App Pills with Farcaster Avatars */}
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        <a
          href="https://abc.epicdylan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 bg-white hover:bg-warm-bg border border-warm-accent/50 hover:border-warm-accent text-warm-accent rounded-full text-sm font-mono transition-all"
        >
          <FarcasterAvatar username="abc-dao-dev" size="sm" showLink={false} />
          ABC
        </a>
        <a
          href="https://arbme.epicdylan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 bg-white hover:bg-warm-bg border border-warm-accent/50 hover:border-warm-accent text-warm-accent rounded-full text-sm font-mono transition-all"
        >
          <FarcasterAvatar username="arbme" size="sm" showLink={false} />
          ArbMe
        </a>
        <a
          href="https://warpcast.com/the-ratchet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 bg-white hover:bg-warm-bg border border-warm-accent/50 hover:border-warm-accent text-warm-accent rounded-full text-sm font-mono transition-all"
        >
          <FarcasterAvatar username="the-ratchet" size="sm" showLink={false} />
          Ratchet
        </a>
      </div>
    </div>
  );
};
