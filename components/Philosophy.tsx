import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Philosophy() {
  const principles = [
    {
      title: 'Architectural Sovereignty',
      description: "We don't build isolated features. We engineer AWS-backed digital infrastructure that you own entirely—no recurring seat fees, no vendor lock-in.",
      icon: '⚡',
    },
    {
      title: 'Autonomous Logic',
      description: "Our systems are designed for high-fidelity execution. We deploy agents that navigate legacy software and modern APIs with surgical precision.",
      icon: '🔑',
    },
    {
      title: 'Immutable Integrity',
      description: 'Every decision made by our neural engines is traceable, audited, and secured at the data layer to ensure enterprise compliance.',
      icon: '📊',
    },
  ];

  return (
    <section className="py-32 bg-[#0b1015] relative overflow-hidden" id="philosophy">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase">The Foundation</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter font-serif leading-none">
              OUR <br />
              <span className="text-gold italic">PHILOSOPHY</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm font-sans font-light leading-relaxed">
            The principles of architectural integrity and autonomous intelligence that drive True North Labs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div
                className="group relative p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="text- gold/40 text-xs font-bold tracking-[0.2em] mb-12 uppercase">
                  Method {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 font-serif tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {principle.description}
                </p>

                <div className="h-px w-0 group-hover:w-full bg-gold transition-all duration-700 ease-out"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* System Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 border border-gold/10 bg-gradient-to-br from-white/[0.03] to-transparent"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_#d4af37]"></div>
                <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">Infrastructure Operational</span>
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest pl-6">Continuous Global Deployment Monitoring</p>
            </div>
            <div className="grid grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-3xl font-bold text-white tracking-tighter">99.9<span className="text-gold">%</span></div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white tracking-tighter">50<span className="text-gold">ms</span></div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Latency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white tracking-tighter">∞</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Scale</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
