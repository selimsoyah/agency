"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, ReactNode } from "react";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function Background3D() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#d4af37"
          speed={4}
          distort={0.3}
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

const Reveal = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function ViewCaseStudy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Title fades and scales as foreground content covers it
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

  return (
    <div ref={containerRef} className="bg-black text-white selection:bg-gold selection:text-black">

      {/* --- FIXED BACKGROUND LAYER (The Title) --- */}
      <section className="fixed inset-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <Background3D />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="relative z-10 text-center pointer-events-none"
        >
          <span className="text-[10px] tracking-[0.8em] uppercase text-gold/60 mb-8 block font-sans font-bold">Case Study // Voice AI</span>
          <h1 className="text-7xl md:text-[13rem] font-serif font-bold tracking-tighter leading-[0.8] mb-4 text-white">
            VOCAL<br />STRATUS
          </h1>
        </motion.div>
      </section>

      {/* --- SCROLLABLE FOREGROUND --- */}
      <main className="relative z-10 mt-[100vh] bg-[#050505] shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">

        {/* 01. Briefing Section */}
        <section className="px-8 md:px-24 py-40">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-balance">
                  Natural phonetics. <span className="italic text-gray-500">Infinite scale.</span>
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed uppercase tracking-[0.25em]">
                  Traditional IVR systems are rigid. Vocal Stratus is a neural-link telephone assistant that understands intent, emotion, and dialect in real-time.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 02. The Voice AI Cinematic Image */}
        <section className="w-full px-4 md:px-8 mb-40">
          <Reveal>
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
              {/* Realistic Soundwave/Neural Imagery */}
              <img
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=2070"
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-1000 ease-in-out"
                alt="Abstract AI Neural Network sound waves"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 flex items-center gap-4">
                <div className="w-2 h-2 bg-gold animate-pulse rounded-full" />
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold">Real-time Audio Synthesis: Active</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 03. Tactical KPI Grid */}
        <section className="px-8 md:px-24 pb-40 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Processing Speed", val: "95ms", desc: "Sub-human response latency" },
            { label: "Sentiment Accuracy", val: "94%", desc: "Accurate emotional detection" },
            { label: "Cost Reduction", val: "60%", desc: "Operation overhead minimized" },
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="p-12 border border-white/5 bg-zinc-950 hover:border-gold/30 transition-all group">
                <h4 className="text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-8">{item.label}</h4>
                <span className="text-6xl font-serif block mb-4 group-hover:text-gold transition-colors">{item.val}</span>
                <p className="text-[10px] tracking-widest text-gray-400 uppercase leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* 04. Editorial Design Block */}
        <section className="bg-white text-black py-40 px-8 md:px-24">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <span className="text-[10px] tracking-[0.6em] uppercase text-gray-400 mb-12 block font-bold">The Architecture</span>
              <h3 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] mb-16 tracking-tighter">
                Conversations that <span className="italic">convert.</span>
              </h3>
              <div className="h-[1px] w-full bg-black/10 mb-16" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <p className="text-lg leading-relaxed uppercase tracking-wider font-medium">
                  By training on over 500,000 hours of multi-dialect telephone data, the Vocal Stratus engine eliminates the "robotic" stutter found in legacy AI assistants.
                </p>
                <p className="text-lg leading-relaxed uppercase tracking-wider font-medium">
                  We’ve built more than a tool; we’ve built a bridge between high-volume efficiency and human-to-human empathy.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 05. Next Project Footer */}
        <footer className="h-screen flex flex-col items-center justify-center text-center px-8 border-t border-white/10">
          <Reveal>
            <p className="text-xs tracking-[1em] text-gray-600 uppercase mb-10">Next Evolution</p>
            <h2 className="text-6xl md:text-[10rem] font-serif font-bold leading-none hover:text-gold transition-all duration-700 cursor-pointer">
              PROJECT<br />AETHER →
            </h2>
          </Reveal>
        </footer>
      </main>
    </div>
  );
}