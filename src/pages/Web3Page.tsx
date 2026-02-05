import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hexagon, Code, ExternalLink } from 'lucide-react';
import { FarcasterAvatar } from '../components/FarcasterAvatar';

export const Web3Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Hexagon className="w-10 h-10 text-warm-accent" />
          Projects
        </h1>
        <p className="text-xl text-warm-text-secondary leading-relaxed mb-4">
          Exploring decentralized technologies, DAOs, and the future of digital ownership
        </p>
        <p className="text-warm-text-secondary font-mono text-sm mb-3">{'// building in public since 2021'}</p>
        <a
          href="https://warpcast.com/epicdylan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover font-mono text-sm transition-colors"
        >
          @epicdylan
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <Hexagon className="w-6 h-6 text-warm-accent" />
            DAOs
          </h2>
          <div className="space-y-6">
            <div className="bg-warm-bg rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FarcasterAvatar username="pagedao" size="md" />
                <h3 className="text-warm-accent font-semibold text-lg">PageDAO</h3>
              </div>
              <p className="text-warm-text-secondary mb-2">
                <span className="text-warm-accent font-medium">Founder</span> • Web3 Writer's Organization
              </p>
              <p className="text-warm-text-secondary mb-3">
                Founded in 2021, PageDAO is a decentralized autonomous organization focused on supporting writers and content creators in the Web3 space, fostering collaboration and innovation in digital publishing.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://pagedao.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  Visit PageDAO <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://warpcast.com/pagedao" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  @pagedao <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-warm-bg rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FarcasterAvatar username="pizzadao" size="md" />
                <h3 className="text-warm-accent font-semibold text-lg">PizzaDAO</h3>
              </div>
              <p className="text-warm-text-secondary mb-2">
                <span className="text-warm-accent font-medium">Original Member</span> • Global Pizza Community
              </p>
              <p className="text-warm-text-secondary mb-3">
                Founded in 2021, PizzaDAO is a global decentralized community that has given away over $1,000,000 worth of pizza across 80+ countries. The organization operates as a "DO-acracy" hosting annual Global Pizza Parties and creating NFT collections to support their mission of making "pizza free" worldwide.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://rarepizzas.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  Visit PizzaDAO <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://warpcast.com/pizzadao" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  @pizzadao <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-warm-bg rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FarcasterAvatar username="abc-dao-dev" size="md" />
                <h3 className="text-warm-accent font-semibold text-lg">ABC DAO</h3>
              </div>
              <p className="text-warm-text-secondary mb-2">
                <span className="text-warm-accent font-medium">Founder</span> • Green Hat Free Open Source Software Collective
              </p>
              <p className="text-warm-text-secondary mb-3">
                Always Be Coding - A free open source software collective building tools and supporting developers in the Farcaster ecosystem.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://abc.epicdylan.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  Visit ABC DAO <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://warpcast.com/abc-dao-dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  @abc-dao-dev <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-warm-accent" />
            Technologies
          </h2>
          <div className="space-y-6">
            <div className="bg-warm-bg rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FarcasterAvatar username="arbme" size="md" />
                <h3 className="text-warm-accent font-semibold text-lg">ArbMe</h3>
              </div>
              <p className="text-warm-text-secondary mb-4">
                Permissionless Arb Routes • DeFi arbitrage platform on Base with liquidity pools, token staking, and automated returns
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://arbme.epicdylan.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors">
                  Launch App <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://warpcast.com/arbme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors">
                  @arbme <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Readme Books</h3>
              <p className="text-warm-text-secondary mb-4">
                NFT book collection and marketplace platform • In continuous service since December 25, 2021
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://opensea.io/collection/readme-books" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors">
                  OpenSea Collection <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://mint.nftbookbazaar.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-warm-text-secondary hover:bg-warm-text text-white rounded-lg transition-colors">
                  Mint Page <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://pagedao.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-warm-text-secondary hover:bg-warm-text text-white rounded-lg transition-colors">
                  PageDAO <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
