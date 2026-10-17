import React, { useLayoutEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Experience from "./pages/Experience";
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Navbar from './components/Navbar';
import BackgroundVisuals from './components/BackgroundVisuals';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0.85, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ willChange: 'filter, opacity', transform: 'translateZ(0)' }}
      className="w-full flex-1"
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col font-sans bg-purple-50/40 dark:bg-black text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <BackgroundVisuals />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
