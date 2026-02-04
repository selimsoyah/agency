'use client';

import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* HD Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
          alt="Business success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/85 to-slate-900/95"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center text-white">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 glass-card text-cyan-400 rounded-full text-sm font-semibold border-cyan-500/20">
                ⏰ LIMITED TIME OFFER
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Stop Losing Money
              <br />
              <span className="gradient-text">Starting Today</span>
            </h2>
            
            <p className="text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-light">
              Get your first <span className="font-semibold text-cyan-400">30 days FREE</span> - no credit card required. 
              See exactly how much revenue you're missing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-black text-xl rounded-xl hover:scale-105 hover:shadow-2xl transition-all animate-pulse-scale">
                Start Free Trial →
              </button>
              <button className="px-12 py-6 glass-card-light text-gray-900 font-bold text-xl rounded-xl hover:scale-105 transition-all">
                Schedule Demo Call
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-cyan-400">✓</span>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-cyan-400">✓</span>
                <span>Setup in 5 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-cyan-400">✓</span>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Urgency Section */}
        <ScrollReveal delay={200}>
          <div className="mt-16 glass-card p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-white text-center">
              <div>
                <div className="text-5xl font-black text-cyan-300 mb-2">$13,680</div>
                <div className="text-sm opacity-80">Average amount lost in just one month of waiting</div>
              </div>
              <div>
                <div className="text-5xl font-black text-cyan-300 mb-2">47</div>
                <div className="text-sm opacity-80">Calls you'll miss this week without us</div>
              </div>
              <div>
                <div className="text-5xl font-black text-cyan-300 mb-2">3</div>
                <div className="text-sm opacity-80">Competitors who answer while you don't</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
