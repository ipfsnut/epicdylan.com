import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { ConsciousnessPage } from './pages/ConsciousnessPage';
import { CognitiveEffortPage } from './experiment-pages/CognitiveEffortPage';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'books':
        return <BooksPage />;
      case 'consciousness':
        return <ConsciousnessPage setCurrentPage={setCurrentPage} />;
      case 'cognitive-effort':
        return <CognitiveEffortPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        
        {renderPage()}
        
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400 border-t border-white/10">
          <p>Built with React • Real data from GitHub & Farcaster APIs</p>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;