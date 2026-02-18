"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import SectionVisual from "./SectionVisual";

export default function ProjectShowcase() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <Section className="py-32" id="work">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
                        FEATURED <span className="text-gold italic">WORK</span>
                    </h2>
                    <div className="h-0.5 w-20 bg-gradient-to-r from-gold to-transparent" />
                </motion.div>

                <div ref={ref} className="relative grid md:grid-cols-2 gap-12 items-center">
                    <motion.div style={{ y, opacity }} className="relative z-10">
                        <div className="relative aspect-square md:aspect-[4/5] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 group cursor-pointer hover:border-gold/30 transition-colors">
                            <SectionVisual type="project" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent pointer-events-none">
                                <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Atlas Voice Engine</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">Natural Language Processing • Real-time Audio</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative z-10">
                        <h3 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                            The Compass of <br />
                            <span className="text-gold italic">Autonomous Scale.</span>
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            We engineered Atlas, a proprietary Neural Voice Engine capable of navigating complex customer intent with surgical precision.
                            It allows True North Labs partners to capture revenue across time zones, autonomously.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['99.8% Call Answer Rate', '<500ms Response Latency', 'Seamless Booking Integration'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center text-lg text-gray-200"
                                >
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-4 shadow-[0_0_10px_#d4af37]" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gold transition-colors duration-300 rounded-full">
                            VIEW CASE STUDY
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
