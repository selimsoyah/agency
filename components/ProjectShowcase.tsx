"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";

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
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        FEATURED <span className="text-gold">WORK</span>
                    </h2>
                    <div className="h-1 w-20 bg-gold" />
                </motion.div>

                <div ref={ref} className="relative grid md:grid-cols-2 gap-12 items-center">
                    <motion.div style={{ y, opacity }} className="relative z-10">
                        <div className="relative aspect-square md:aspect-[4/5] bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 group">
                            {/* Abstract visualization of Voice AI */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-gold/30 flex items-center justify-center animate-pulse">
                                    <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-gold/50 flex items-center justify-center">
                                        <div className="w-16 h-16 md:w-24 md:h-24 bg-gold/10 rounded-full backdrop-blur-md" />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-3xl font-bold text-white mb-2">Voice AI Agent</h3>
                                <p className="text-gray-400">Natural Language Processing • Real-time Audio • 24/7 Availability</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">
                            Intelligence that <br />
                            <span className="text-gold">Speaks for Itself.</span>
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            We engineered a proprietary Voice AI capable of handling complex customer interactions with human-like latency and understanding.
                            It allows businesses to capture revenue 24/7 without lifting a finger.
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
                                    <span className="w-2 h-2 bg-gold rounded-full mr-4" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gold transition-colors duration-300">
                            VIEW CASE STUDY
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
