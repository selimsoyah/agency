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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-gold/20' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-gold/50 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
              <span className="text-gold font-serif italic text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-[0.2em] text-white uppercase leading-none">True North</span>
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase mt-1">Labs</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <a href="#work" className="text-[10px] font-bold tracking-[0.3em] text-gray-400 hover:text-gold transition-colors uppercase">
              Work
            </a>
            <a href="#expertise" className="text-[10px] font-bold tracking-[0.3em] text-gray-400 hover:text-gold transition-colors uppercase">
              Expertise
            </a>
            <a href="#philosophy" className="text-[10px] font-bold tracking-[0.3em] text-gray-400 hover:text-gold transition-colors uppercase">
              Philosophy
            </a>
            <button className="text-[10px] font-bold tracking-[0.3em] border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all uppercase">
              Consultation
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
