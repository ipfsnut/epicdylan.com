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
    { path: '/blog', label: 'Blog' },
    { path: '/research', label: 'Research' },
    { path: '/fitness', label: 'Fitness' },
    { path: '/chess', label: 'Chess' },
    { path: '/projects', label: 'Projects' },
    { path: '/cv', label: 'CV' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-lg border-b border-warm-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/StowDylanAvatar.jpg"
                alt="Dylan"
                className="w-10 h-10 rounded-full border-2 border-warm-accent"
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
                      ? 'bg-warm-accent text-white'
                      : 'text-warm-text-secondary hover:text-warm-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-warm-accent hover:bg-warm-accent-hover text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-warm-text"
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
                      ? 'bg-warm-accent text-white'
                      : 'text-warm-text-secondary'
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
                className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-warm-accent text-white"
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
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full border border-warm-border shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold font-display text-warm-text">Contact</h2>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-warm-text-secondary hover:text-warm-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-warm-bg rounded-lg p-4">
                <h3 className="text-warm-accent font-semibold mb-2">Name</h3>
                <p className="text-warm-text-secondary">T. Dylan Daniel</p>
              </div>

              <div className="bg-warm-bg rounded-lg p-4">
                <h3 className="text-warm-accent font-semibold mb-2">Email</h3>
                <a
                  href="mailto:thomas.d.daniel@ttu.edu"
                  className="text-warm-accent hover:text-warm-accent-hover transition-colors"
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
