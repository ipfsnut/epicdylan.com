import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { ParticleField } from './components/ParticleField';
import { LiveClock } from './components/LiveClock';
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { BlogPage } from './pages/BlogPage';
import { ConsciousnessPage } from './pages/ConsciousnessPage';
import { Web3Page } from './pages/Web3Page';
import { ABCDAOPage } from './pages/ABCDAOPage';
import { CVPage } from './pages/CVPage';
import { FitnessPage } from './pages/FitnessPage';
import { ChessPage } from './pages/ChessPage';
import { CognitiveEffortPage } from './experiment-pages/CognitiveEffortPage';
import { useKonamiCode } from './hooks/useKonamiCode';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: position.x,
        top: position.y,
        opacity: visible ? 1 : 0
      }}
    />
  );
};

const App: React.FC = () => {
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleKonami = useCallback(() => {
    setEasterEggActive(true);
    // Play a fun sound or show a message
    console.log('🎮 Konami Code Activated! You found the secret!');
    setTimeout(() => setEasterEggActive(false), 2000);
  }, []);

  useKonamiCode(handleKonami);

  return (
    <AppProvider>
      <Router>
        <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative ${easterEggActive ? 'easter-egg-active' : ''}`}>
          {/* Cipherpunk overlays */}
          <ParticleField />
          <CursorGlow />
          <div className="scanlines"></div>
          <div className="noise-overlay"></div>

          <Navigation />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/research" element={<ConsciousnessPage />} />
            <Route path="/projects" element={<Web3Page />} />
            <Route path="/projects/abc-dao" element={<ABCDAOPage />} />
            {/* Legacy redirects */}
            <Route path="/web3" element={<Web3Page />} />
            <Route path="/web3/abc-dao" element={<ABCDAOPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/chess" element={<ChessPage />} />
            <Route path="/experiments/cognitive-effort" element={<CognitiveEffortPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">Built with React • Real data from GitHub API</p>
              <a
                href="https://basescan.org/token/0x31711525456d3fdf8eccd99fefb02b65d7575cde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 font-mono text-xs tracking-wider transition-colors"
                title="$EPICDYLAN.COM on Base"
              >
                $EPICDYLAN.COM • 0x3171...5cde
              </a>
            </div>
            <div className="text-center mt-4">
              <LiveClock />
            </div>
          </footer>

          {/* Easter egg notification */}
          {easterEggActive && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/90 border border-green-500 rounded-lg p-8 text-center">
              <p className="text-green-400 font-mono text-2xl mb-2">🎮 KONAMI CODE!</p>
              <p className="text-gray-400 font-mono text-sm">You found the secret!</p>
            </div>
          )}
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;