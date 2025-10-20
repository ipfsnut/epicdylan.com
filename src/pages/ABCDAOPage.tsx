import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Zap, Target, Users, Trophy, Shield } from 'lucide-react';

export const ABCDAOPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const characters = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Array to store drops
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // Draw matrix rain
    const drawMatrix = () => {
      // Black background with transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(drawMatrix, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-green-400 font-mono overflow-x-hidden">
      {/* Matrix Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{ zIndex: -1 }}
      />

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          to="/web3"
          className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Web3 Projects
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-green-400 animate-pulse">
            ABC_DAO
          </h1>
          <p className="text-2xl text-green-300 mb-8">
            Always Be Coding - The Future of Developer Incentives
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://abc.epicdylan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black font-bold rounded hover:from-green-400 hover:to-green-300 transition-all duration-300 transform hover:scale-105"
            >
              Start Earning $ABC
            </a>
            <a
              href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black font-bold rounded hover:from-green-400 hover:to-green-300 transition-all duration-300 transform hover:scale-105"
            >
              Join on Farcaster
            </a>
          </div>
        </header>

        {/* What is ABC DAO */}
        <section className="bg-black/80 border border-green-400 rounded-xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            What is ABC DAO?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            ABC DAO is revolutionizing how developers get paid for their work. Every time you push code, you earn cryptocurrency. It's that simple.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-400/10 border border-green-400 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">106+</div>
              <div className="text-green-300 text-sm">Commits Rewarded</div>
            </div>
            <div className="bg-green-400/10 border border-green-400 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$ABC</div>
              <div className="text-green-300 text-sm">50k-1M per Commit</div>
            </div>
            <div className="bg-green-400/10 border border-green-400 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">0.002 ETH</div>
              <div className="text-green-300 text-sm">One-time Membership</div>
            </div>
            <div className="bg-green-400/10 border border-green-400 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-green-300 text-sm">Automated Rewards</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-green-300 mb-4">Why ABC DAO?</h3>
          <p className="text-gray-300 mb-4"><strong>For New Web3 Developers:</strong></p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <Target className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Immediate Value:</strong> Start earning crypto from day one</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Learn by Doing:</strong> Real projects, real rewards, real experience</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Web3 Native:</strong> Built on blockchain technology you're learning</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Community:</strong> Connect with other developers building the future</span>
            </li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="bg-black/80 border border-green-400 rounded-xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8" />
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
              <div key={step.number} className="flex items-start gap-4 bg-green-400/5 border-l-4 border-green-400 rounded p-6">
                <div className="bg-green-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-green-400 font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/90 border border-green-400 rounded p-6 font-mono">
            <pre className="text-green-400">
{`git commit -m "feat: added new DeFi feature"
git push origin main

# 🎉 Automatic reward: 50,000 $ABC tokens earned!
# 📱 Social announcement posted
# 💰 Tokens available for trading/staking`}
            </pre>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-black/80 border border-green-400 rounded-xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8" />
            Technology & Transparency
          </h2>

          <h3 className="text-xl font-bold text-green-300 mb-4">Built on Base (Ethereum L2)</h3>
          <p className="text-gray-300 mb-6">
            ABC DAO operates on Base, providing fast transactions and low fees while maintaining Ethereum's security guarantees.
          </p>

          <h3 className="text-xl font-bold text-green-300 mb-4">Smart Contract Integration</h3>
          <div className="bg-black/90 border border-green-400 rounded p-6 font-mono mb-6">
            <pre className="text-green-400">
{`// ABC Token Contract: 0x...ABC
// Treasury Wallet: abcdao.base.eth
// Staking Contract: 0x...STAKE
// Rewards Distribution: Automated via GitHub webhooks`}
            </pre>
          </div>

          <h3 className="text-xl font-bold text-green-300 mb-4">Key Features</h3>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <Code className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>GitHub Integration:</strong> Automatic commit detection and reward distribution</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Farcaster Social:</strong> Built-in social media integration for Web3 developers</span>
            </li>
            <li className="flex items-start gap-2">
              <Trophy className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Token Staking:</strong> Earn additional rewards by staking your $ABC tokens</span>
            </li>
            <li className="flex items-start gap-2">
              <Target className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Leaderboards:</strong> Track your progress against other developers</span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span><strong>Secure & Audited:</strong> Smart contracts built with security best practices</span>
            </li>
          </ul>
        </section>

        {/* Getting Started */}
        <section className="bg-black/80 border border-green-400 rounded-xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            Ready to Start Earning?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join the revolution of incentivized development. Whether you're a seasoned developer or just starting your Web3 journey, ABC DAO has a place for you.
          </p>

          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://abc.epicdylan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black font-bold rounded hover:from-green-400 hover:to-green-300 transition-all duration-300 transform hover:scale-105"
              >
                Launch ABC DAO App
              </a>
              <a
                href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black font-bold rounded hover:from-green-400 hover:to-green-300 transition-all duration-300 transform hover:scale-105"
              >
                Join on Farcaster
              </a>
            </div>
          </div>

          <h3 className="text-xl font-bold text-green-300 mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>📱 <strong>Mini-App:</strong> <a href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao" className="text-green-400 hover:text-green-300">farcaster.xyz/miniapps/S1edg9PycxZP/abcdao</a></li>
            <li>🌐 <strong>Main Platform:</strong> <a href="https://abc.epicdylan.com" className="text-green-400 hover:text-green-300">abc.epicdylan.com</a></li>
            <li>👥 <strong>Developer Roster:</strong> <a href="https://abc.epicdylan.com/roster" className="text-green-400 hover:text-green-300">abc.epicdylan.com/roster</a></li>
            <li>📈 <strong>Token Staking:</strong> <a href="https://abc.epicdylan.com/staking" className="text-green-400 hover:text-green-300">abc.epicdylan.com/staking</a></li>
            <li>💰 <strong>Treasury:</strong> <a href="https://abc.epicdylan.com/treasury" className="text-green-400 hover:text-green-300">abc.epicdylan.com/treasury</a></li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 border-t border-green-400 rounded-t-xl p-8 text-center">
          <p className="text-gray-400 mb-4">
            &copy; 2025 ABC DAO - Always Be Coding. Built by developers, for developers.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://farcaster.xyz/miniapps/S1edg9PycxZP/abcdao" className="text-green-400 hover:text-green-300">Farcaster</a>
            <a href="https://abc.epicdylan.com" className="text-green-400 hover:text-green-300">Platform</a>
            <a href="https://github.com/abc-dao" className="text-green-400 hover:text-green-300">GitHub</a>
          </div>
          <p className="text-gray-500 text-sm">Decentralized. Transparent. Rewarding.</p>
        </footer>
      </div>
    </div>
  );
};