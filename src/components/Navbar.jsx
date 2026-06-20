import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav
      className="relative z-50 bg-gradient-to-r from-purple-600 to-blue-600 py-4 text-white shadow-md"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <h1 className="text-lg font-bold tracking-tight sm:text-2xl">
          <Link to="/" onClick={() => setIsOpen(false)}>
            RAMAKRISHNA KARNATI
          </Link>
        </h1>

        <div className="hidden items-center space-x-4 font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-md px-3 py-1 transition hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="text-white focus:outline-none focus:ring-2 focus:ring-white/70 md:hidden"
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
        <div id="mobile-navigation" className="mt-4 space-y-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="mx-4 block rounded-md bg-white px-4 py-2 font-medium text-purple-700 shadow transition hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              {link.label}
            </Link>
          ))}
          <div className="mx-4 mt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
