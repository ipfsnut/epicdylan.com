import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { LiveClock } from './components/LiveClock';
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { BlogPage } from './pages/BlogPage';
import { ConsciousnessPage } from './pages/ConsciousnessPage';
import { Web3Page } from './pages/Web3Page';
import { CVPage } from './pages/CVPage';
import { FitnessPage } from './pages/FitnessPage';
import { ChessPage } from './pages/ChessPage';
import { CognitiveEffortPage } from './experiment-pages/CognitiveEffortPage';
import { BuiltWithPage } from './pages/BuiltWithPage';
import { useKonamiCode } from './hooks/useKonamiCode';

const App: React.FC = () => {
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleKonami = useCallback(() => {
    setEasterEggActive(true);
    console.log('🎮 Konami Code Activated! You found the secret!');
    setTimeout(() => setEasterEggActive(false), 2000);
  }, []);

  useKonamiCode(handleKonami);

  return (
    <AppProvider>
      <Router>
        <div className={`min-h-screen bg-warm-bg relative ${easterEggActive ? 'easter-egg-active' : ''}`}>
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/research" element={<ConsciousnessPage />} />
            <Route path="/projects" element={<Web3Page />} />
            {/* Legacy redirects */}
            <Route path="/web3" element={<Web3Page />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/chess" element={<ChessPage />} />
            <Route path="/experiments/cognitive-effort" element={<CognitiveEffortPage />} />
            <Route path="/built-with" element={<BuiltWithPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-warm-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Link
                to="/built-with"
                className="text-warm-text-secondary hover:text-warm-accent text-sm underline underline-offset-2 transition-colors"
              >
                built with ❤
              </Link>
              <a
                href="https://basescan.org/token/0x31711525456d3fdf8eccd99fefb02b65d7575cde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-accent hover:text-warm-accent-hover font-mono text-xs tracking-wider transition-colors"
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
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white border border-warm-accent rounded-lg p-8 text-center shadow-lg">
              <p className="text-warm-accent font-mono text-2xl mb-2">🎮 KONAMI CODE!</p>
              <p className="text-warm-text-secondary font-mono text-sm">You found the secret!</p>
            </div>
          )}
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
