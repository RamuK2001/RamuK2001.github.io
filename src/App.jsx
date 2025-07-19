import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, React } from 'react';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Ramakrishna Karnati</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-4 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:bg-white hover:text-purple-700 px-3 py-1 rounded-md transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)} // close on click
              className="block bg-white text-purple-700 font-medium px-4 py-2 rounded-md shadow hover:bg-purple-100 mx-4 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
