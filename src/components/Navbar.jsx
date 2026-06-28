import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 py-4 shadow-md transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg dark:bg-slate-900/80' : 'bg-gradient-to-r from-purple-600 to-blue-600'
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <h1
          className={`text-lg font-bold tracking-tight sm:text-2xl transition-colors duration-300 ${
            scrolled ? 'text-slate-900 dark:text-slate-50' : 'text-white'
          }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            RAMAKRISHNA KARNATI
          </Link>
        </h1>

        <div
          className={`hidden items-center space-x-4 font-medium md:flex transition-colors duration-300 ${
            scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`rounded-md px-3 py-1 transition-all duration-300 focus:outline-none focus:ring-2 ${
                scrolled
                  ? 'hover:text-purple-600 dark:hover:text-purple-400 focus:ring-purple-500'
                  : 'hover:bg-white/20 focus:ring-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          className={`focus:outline-none focus:ring-2 md:hidden transition-colors duration-300 ${
            scrolled
              ? 'text-slate-800 dark:text-slate-200 focus:ring-purple-500'
              : 'text-white focus:ring-white/70'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className={`mt-2 space-y-2 border-t pt-2 md:hidden transition-colors duration-300 ${
            scrolled ? 'border-gray-200/50 dark:border-gray-700/50' : 'border-white/30'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`mx-4 block rounded-md px-4 py-2 font-medium shadow transition-all duration-300 focus:outline-none focus:ring-2 ${
                scrolled
                  ? 'bg-white/80 text-purple-700 hover:bg-purple-100 focus:ring-purple-500 dark:bg-slate-800/80 dark:text-purple-300 dark:hover:bg-slate-700'
                  : 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
