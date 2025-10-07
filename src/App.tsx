import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { ConsciousnessPage } from './pages/ConsciousnessPage';
import { CognitiveEffortPage } from './experiment-pages/CognitiveEffortPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/research" element={<ConsciousnessPage />} />
            <Route path="/experiments/cognitive-effort" element={<CognitiveEffortPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400 border-t border-white/10">
            <p>Built with React • Real data from GitHub API</p>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;