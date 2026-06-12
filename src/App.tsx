import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { PublicationsPage } from './pages/PublicationsPage';
import { BooksPage } from './pages/BooksPage';
import { ConsciousnessPage } from './pages/ConsciousnessPage';
import { CVPage } from './pages/CVPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-warm-bg relative">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/research" element={<ConsciousnessPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <footer className="max-w-4xl mx-auto px-6 py-10 mt-8 border-t border-warm-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-warm-text-secondary">
            <span>T. Dylan Daniel</span>
            <a
              href="mailto:thomas.d.daniel@ttu.edu"
              className="hover:text-warm-text transition-colors"
            >
              thomas.d.daniel@ttu.edu
            </a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
