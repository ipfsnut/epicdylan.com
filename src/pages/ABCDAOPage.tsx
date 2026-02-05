import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Zap, Target, Users, Trophy, Shield } from 'lucide-react';

export const ABCDAOPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/projects"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold font-display text-warm-text mb-6">
          ABC_DAO
        </h1>
        <p className="text-2xl text-warm-text-secondary mb-8">
          Always Be Coding - The Future of Developer Incentives
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://abc.epicdylan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white font-bold rounded-lg transition-colors"
          >
            Start Earning $ABC
          </a>
          <a
            href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white font-bold rounded-lg transition-colors"
          >
            Join on Farcaster
          </a>
        </div>
      </header>

      {/* What is ABC DAO */}
      <section className="bg-white rounded-xl p-8 mb-8 border border-warm-border">
        <h2 className="text-3xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-warm-accent" />
          What is ABC DAO?
        </h2>
        <p className="text-warm-text-secondary text-lg mb-8">
          ABC DAO is revolutionizing how developers get paid for their work. Every time you push code, you earn cryptocurrency. It's that simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-warm-accent/10 border border-warm-accent/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-warm-accent mb-2">106+</div>
            <div className="text-warm-text-secondary text-sm">Commits Rewarded</div>
          </div>
          <div className="bg-warm-accent/10 border border-warm-accent/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-warm-accent mb-2">$ABC</div>
            <div className="text-warm-text-secondary text-sm">50k-1M per Commit</div>
          </div>
          <div className="bg-warm-accent/10 border border-warm-accent/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-warm-accent mb-2">0.002 ETH</div>
            <div className="text-warm-text-secondary text-sm">One-time Membership</div>
          </div>
          <div className="bg-warm-accent/10 border border-warm-accent/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-warm-accent mb-2">24/7</div>
            <div className="text-warm-text-secondary text-sm">Automated Rewards</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-warm-text mb-4">Why ABC DAO?</h3>
        <p className="text-warm-text-secondary mb-4"><strong>For New Web3 Developers:</strong></p>
        <ul className="text-warm-text-secondary space-y-2 ml-6">
          <li className="flex items-start gap-2">
            <Target className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Immediate Value:</strong> Start earning crypto from day one</span>
          </li>
          <li className="flex items-start gap-2">
            <Code className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Learn by Doing:</strong> Real projects, real rewards, real experience</span>
          </li>
          <li className="flex items-start gap-2">
            <Zap className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Web3 Native:</strong> Built on blockchain technology you're learning</span>
          </li>
          <li className="flex items-start gap-2">
            <Users className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Community:</strong> Connect with other developers building the future</span>
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="bg-white rounded-xl p-8 mb-8 border border-warm-border">
        <h2 className="text-3xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-warm-accent" />
          How It Works
        </h2>
        <div className="space-y-6 mb-8">
          {[
            {
              number: 1,
              title: "Join the Community",
              description: "Pay a one-time 0.002 ETH membership fee and connect your GitHub account via our Farcaster mini-app."
            },
            {
              number: 2,
              title: "Start Coding",
              description: "Work on any public repository. Every commit you push gets automatically detected by our system."
            },
            {
              number: 3,
              title: "Earn Instantly",
              description: "Receive 50k-1M $ABC tokens per commit. Rewards are distributed automatically within minutes."
            },
            {
              number: 4,
              title: "Build Your Portfolio",
              description: "Showcase your verified commits, track your earnings, and build your reputation in the Web3 space."
            }
          ].map((step) => (
            <div key={step.number} className="flex items-start gap-4 bg-warm-bg rounded-lg p-6 border-l-4 border-warm-accent">
              <div className="bg-warm-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h4 className="text-warm-accent font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-warm-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-warm-text rounded-lg p-6 font-mono">
          <pre className="text-warm-accent text-sm">
{`git commit -m "feat: added new DeFi feature"
git push origin main

# Automatic reward: 50,000 $ABC tokens earned!
# Social announcement posted
# Tokens available for trading/staking`}
          </pre>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white rounded-xl p-8 mb-8 border border-warm-border">
        <h2 className="text-3xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Shield className="w-8 h-8 text-warm-accent" />
          Technology & Transparency
        </h2>

        <h3 className="text-xl font-bold text-warm-text mb-4">Built on Base (Ethereum L2)</h3>
        <p className="text-warm-text-secondary mb-6">
          ABC DAO operates on Base, providing fast transactions and low fees while maintaining Ethereum's security guarantees.
        </p>

        <h3 className="text-xl font-bold text-warm-text mb-4">Smart Contract Integration</h3>
        <div className="bg-warm-text rounded-lg p-6 font-mono mb-6">
          <pre className="text-warm-accent text-sm">
{`// ABC Token Contract: 0x...ABC
// Treasury Wallet: abcdao.base.eth
// Staking Contract: 0x...STAKE
// Rewards Distribution: Automated via GitHub webhooks`}
          </pre>
        </div>

        <h3 className="text-xl font-bold text-warm-text mb-4">Key Features</h3>
        <ul className="text-warm-text-secondary space-y-2 ml-6">
          <li className="flex items-start gap-2">
            <Code className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>GitHub Integration:</strong> Automatic commit detection and reward distribution</span>
          </li>
          <li className="flex items-start gap-2">
            <Users className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Farcaster Social:</strong> Built-in social media integration for Web3 developers</span>
          </li>
          <li className="flex items-start gap-2">
            <Trophy className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Token Staking:</strong> Earn additional rewards by staking your $ABC tokens</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Leaderboards:</strong> Track your progress against other developers</span>
          </li>
          <li className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-warm-accent mt-0.5 flex-shrink-0" />
            <span><strong>Security First:</strong> Smart contracts built with security best practices</span>
          </li>
        </ul>
      </section>

      {/* Getting Started */}
      <section className="bg-white rounded-xl p-8 mb-8 border border-warm-border">
        <h2 className="text-3xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-warm-accent" />
          Ready to Start Earning?
        </h2>
        <p className="text-warm-text-secondary text-lg mb-8">
          Join the revolution of incentivized development. Whether you're a seasoned developer or just starting your Web3 journey, ABC DAO has a place for you.
        </p>

        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://abc.epicdylan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white font-bold rounded-lg transition-colors"
            >
              Launch ABC DAO App
            </a>
            <a
              href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white font-bold rounded-lg transition-colors"
            >
              Join on Farcaster
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-warm-text mb-4">Quick Links</h3>
        <ul className="text-warm-text-secondary space-y-2">
          <li><strong>Mini-App:</strong> <a href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao" className="text-warm-accent hover:text-warm-accent-hover transition-colors">farcaster.xyz/miniapps/S1edg9PycxZP/abcdao</a></li>
          <li><strong>Main Platform:</strong> <a href="https://abc.epicdylan.com" className="text-warm-accent hover:text-warm-accent-hover transition-colors">abc.epicdylan.com</a></li>
          <li><strong>Developer Roster:</strong> <a href="https://abc.epicdylan.com/roster" className="text-warm-accent hover:text-warm-accent-hover transition-colors">abc.epicdylan.com/roster</a></li>
          <li><strong>Token Staking:</strong> <a href="https://abc.epicdylan.com/staking" className="text-warm-accent hover:text-warm-accent-hover transition-colors">abc.epicdylan.com/staking</a></li>
          <li><strong>Treasury:</strong> <a href="https://abc.epicdylan.com/treasury" className="text-warm-accent hover:text-warm-accent-hover transition-colors">abc.epicdylan.com/treasury</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-warm-bg border-t border-warm-border rounded-t-xl p-8 text-center">
        <p className="text-warm-text-secondary mb-4">
          &copy; 2025 ABC DAO - Always Be Coding. Built by developers, for developers.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao" className="text-warm-accent hover:text-warm-accent-hover transition-colors">Farcaster</a>
          <a href="https://abc.epicdylan.com" className="text-warm-accent hover:text-warm-accent-hover transition-colors">Platform</a>
          <a href="https://github.com/abc-dao" className="text-warm-accent hover:text-warm-accent-hover transition-colors">GitHub</a>
        </div>
        <p className="text-warm-text-secondary text-sm">Decentralized. Transparent. Rewarding.</p>
      </footer>
    </div>
  );
};
