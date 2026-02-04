import ScrollReveal from './ScrollReveal';

export default function TechStack() {
  const stack = [
    {
      category: 'Backend',
      description: 'Serverless Execution',
      tech: 'AWS Lambda',
      icon: '⚡',
      details: 'Auto-scaling, pay-per-use compute',
    },
    {
      category: 'Intelligence',
      description: 'Natural Language Understanding',
      tech: 'Custom Python NLP & Amazon Lex',
      icon: '🧠',
      details: 'Intent recognition, entity extraction',
    },
    {
      category: 'Operations',
      description: 'Persistent Scraper Nodes',
      tech: 'AWS EC2',
      icon: '🔄',
      details: 'Dedicated compute for web automation',
    },
    {
      category: 'Infrastructure',
      description: 'Secure Messaging & Storage',
      tech: 'AWS SES & DynamoDB',
      icon: '💾',
      details: 'High-throughput, low-latency data layer',
    },
  ];

  const industries = [
    { name: 'Mechanics', icon: '🔧' },
    { name: 'HVAC', icon: '❄️' },
    { name: 'Medical Clinics', icon: '⚕️' },
    { name: 'Legal Firms', icon: '⚖️' },
    { name: 'Logistics', icon: '📦' },
  ];

  return (
    <section className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan text-sm font-mono px-4 py-2 border border-cyan/30 rounded">
              POWERED BY AWS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Technical <span className="text-cyan glow-text">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade infrastructure built on battle-tested AWS services
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stack.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="glass-effect p-6 rounded-lg group hover:border-cyan/50 transition-all"
              >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="mb-3">
                <h3 className="text-cyan text-sm font-mono mb-1">{item.category}</h3>
                <h4 className="text-white font-bold text-lg">{item.tech}</h4>
              </div>
              <p className="text-gray-400 text-sm mb-3">{item.description}</p>
              <p className="text-gray-500 text-xs font-mono">{item.details}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture Diagram */}
        <ScrollReveal>
          <div className="glass-effect p-8 rounded-lg border border-cyan/20 mb-20">
          <h3 className="text-white text-2xl font-bold mb-8 text-center">System Architecture Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="glass-effect px-6 py-4 rounded border border-cyan/30 min-w-[160px] text-center">
              <div className="text-3xl mb-2">📞</div>
              <div className="text-white font-mono text-sm">Client Request</div>
            </div>
            
            <div className="text-cyan text-2xl rotate-90 md:rotate-0">→</div>
            
            <div className="glass-effect px-6 py-4 rounded border border-cyan/30 min-w-[160px] text-center bg-cyan/5">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-cyan font-mono text-sm font-bold">Lambda</div>
            </div>
            
            <div className="text-cyan text-2xl rotate-90 md:rotate-0">→</div>
            
            <div className="glass-effect px-6 py-4 rounded border border-cyan/30 min-w-[160px] text-center bg-cyan/5">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-cyan font-mono text-sm font-bold">NLP Engine</div>
            </div>
            
            <div className="text-cyan text-2xl rotate-90 md:rotate-0">→</div>
            
            <div className="glass-effect px-6 py-4 rounded border border-cyan/30 min-w-[160px] text-center bg-cyan/5">
              <div className="text-3xl mb-2">🔄</div>
              <div className="text-cyan font-mono text-sm font-bold">EC2 Scraper</div>
            </div>
            
            <div className="text-cyan text-2xl rotate-90 md:rotate-0">→</div>
            
            <div className="glass-effect px-6 py-4 rounded border border-cyan/30 min-w-[160px] text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-white font-mono text-sm">Confirmation</div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Target Industries */}
        <div>
          <h3 className="text-white text-3xl font-bold mb-8 text-center">
            Built for <span className="text-cyan">High-Volume</span> Service Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded text-center hover:border-cyan/50 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="text-white font-mono text-sm">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-effect p-12 rounded-lg border border-cyan/30">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your <span className="text-cyan glow-text">Infrastructure?</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Own your system. Scale without limits. Deploy with confidence.
            </p>
            <button className="px-10 py-5 bg-cyan text-black font-mono font-bold text-lg rounded hover:bg-cyan/90 transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]">
              Schedule Infrastructure Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
