'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* HD Background Image with Colorful Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-transparent"></div>
      </div>
      
      <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/30">
            <span className="text-white text-sm font-semibold">🚀 Never Miss Revenue Again</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight px-4 text-white">
          Every Missed Call is
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500">$500 Lost</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed px-4">
          Your customers are calling. But you're busy, after hours, or overwhelmed. 
          <span className="text-cyan-300 font-semibold"> We answer for you 24/7</span>, book appointments instantly, 
          and turn every call into revenue.
        </p>

        {/* ROI Preview Card */}
        <div className={`bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 border border-white/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-sm text-white/80 mb-4 font-semibold uppercase tracking-wide">Your Potential Monthly Gain</div>
          <div className="text-5xl sm:text-6xl font-black text-white mb-2">$15,000</div>
          <div className="text-white/70 text-base">from 30 recovered calls per month</div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
          <button className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all">
            See How Much You're Losing 💰
          </button>
          <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white/20 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white/30 hover:scale-105 transition-all">
            Watch Demo ▶️
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
          {[
            { value: '99.8%', label: 'Calls Answered' },
            { value: '<10s', label: 'Response Time' },
            { value: '24/7', label: 'Always Available' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/30 transition-all duration-1000 hover:scale-105 hover:bg-white/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
