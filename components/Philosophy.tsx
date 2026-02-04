import ScrollReveal from './ScrollReveal';

export default function Philosophy() {
  const principles = [
    {
      title: 'Infrastructure Over Features',
      description: "We don't build 'bots.' We build scalable AWS-backed infrastructure that integrates with your existing legacy software via custom web-scraping agents.",
      icon: '⚡',
    },
    {
      title: 'Full Code Ownership',
      description: "Unlike SaaS, you own the infrastructure we build. No monthly 'per-user' fees. Your system, your data, your power.",
      icon: '🔑',
    },
    {
      title: 'Traceable Logic',
      description: 'Every action our AI takes is logged, audited, and compliant.',
      icon: '📊',
    },
  ];

  return (
    <section className="py-24 bg-charcoal relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan text-sm font-mono px-4 py-2 border border-cyan/30 rounded">
              THE FOUNDATION
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Core <span className="text-cyan glow-text">Philosophy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles that drive our infrastructure-first approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="glass-effect p-8 rounded-lg hover:border-cyan/50 transition-all group"
              >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                {principle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {principle.description}
              </p>
              
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-cyan/0 via-cyan/50 to-cyan/0"></div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* System Status Indicator */}
        <div className="mt-16 glass-effect p-6 rounded-lg border border-cyan/20 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-mono">System Architecture Status</span>
            </div>
            <div className="text-cyan font-mono text-sm">
              100% Operational
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan">99.9%</div>
              <div className="text-xs text-gray-400 font-mono">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan">&lt;50ms</div>
              <div className="text-xs text-gray-400 font-mono">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan">24/7</div>
              <div className="text-xs text-gray-400 font-mono">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
