import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/books', label: 'Books' },
    { path: '/research', label: 'Research' },
    { path: '/cv', label: 'CV' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/StowDylanAvatar.jpg" 
                alt="Dylan"
                className="w-10 h-10 rounded-full border-2 border-purple-400"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${
                    isActive(item.path)
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => { 
                  setIsContactModalOpen(true); 
                  setMobileMenuOpen(false); 
                }}
                className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-green-600 text-white"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 max-w-md w-full border border-white/20">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Contact</h2>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Name</h3>
                <p className="text-gray-300">T. Dylan Daniel</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:thomas.d.daniel@ttu.edu"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  thomas.d.daniel@ttu.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};