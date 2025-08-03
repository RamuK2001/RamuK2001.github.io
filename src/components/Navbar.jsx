import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // <-- ADD THIS

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
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">RAMAKRISHNA KARNATI</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:bg-white hover:text-purple-700 px-3 py-1 rounded-md transition"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle /> {/* <-- Add toggle here */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block bg-white text-purple-700 font-medium px-4 py-2 rounded-md shadow hover:bg-purple-100 mx-4 transition"
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
