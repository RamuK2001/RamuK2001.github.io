import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md px-6 py-4 rounded-b-2xl">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">Ramakrishna Karnati</h1>
        
            <div className="space-x-4 text-sm sm:text-base font-medium">
              <Link
                to="/"
                className="hover:bg-white hover:text-purple-700 transition px-3 py-1 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-white hover:text-purple-700 transition px-3 py-1 rounded-md"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="hover:bg-white hover:text-purple-700 transition px-3 py-1 rounded-md"
              >
                Projects
              </Link>
              <Link
                to="/certifications"
                className="hover:bg-white hover:text-purple-700 transition px-3 py-1 rounded-md"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="hover:bg-white hover:text-purple-700 transition px-3 py-1 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
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
