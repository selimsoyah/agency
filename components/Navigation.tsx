'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-2xl">💼</span>
            </div>
            <span className="font-bold text-2xl text-white">Agency</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="font-semibold text-gray-300 hover:text-cyan-400 transition-colors">
              Benefits
            </a>
            <a href="#roi" className="font-semibold text-gray-300 hover:text-cyan-400 transition-colors">
              ROI Calculator
            </a>
            <a href="#testimonials" className="font-semibold text-gray-300 hover:text-cyan-400 transition-colors">
              Reviews
            </a>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
