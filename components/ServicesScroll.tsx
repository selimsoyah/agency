"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import SectionVisual from "./SectionVisual";

const services = [
    {
        id: "01",
        title: "Autonomous Agents",
        description: "Intelligent systems that operate independently to execute complex business logic."
    },
    {
        id: "02",
        title: "Neural Infrastructure",
        description: "Machine learning pipelines built for enterprise-scale data processing."
    },
    {
        id: "03",
        title: "Proprietary LLMs",
        description: "Custom-trained models optimized for specialized domain expertise."
    },
    {
        id: "04",
        title: "Predictive Analytics",
        description: "Anticipatory software that turns data into foresight and strategy."
    }
];

export default function ServicesScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 pl-20">
                    <div className="w-[600px] flex-shrink-0 flex items-center justify-center">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
                                OUR <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">EXPERTISE</span>
                            </h2>
                            <div className="h-1 w-32 bg-gold my-8" />
                            <p className="text-xl text-gray-400 max-w-sm">
                                We combine technical precision with creative excellence to deliver products that redefine industries.
                            </p>
                        </div>
                    </div>

                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[65vh] w-[400px] md:w-[500px] flex-shrink-0 overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:border-gold/50 rounded-xl"
                        >
                            {/* Background Visual */}
                            <motion.div
                                className="absolute inset-0 z-0"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <SectionVisual type={`service-${idx + 1}` as any} />
                            </motion.div>

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-1" />
                            <motion.div
                                className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1"
                            />

                            {/* Background Number */}
                            <div className="absolute top-6 left-6 text-9xl font-bold text-neutral-800/20 group-hover:text-gold/10 transition-all duration-700 select-none">
                                {service.id}
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                <motion.div
                                    initial={false}
                                    className="relative"
                                >
                                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <div className="overflow-hidden">
                                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-0 group-hover:mb-6 transition-all duration-500 transform group-hover:translate-y-0">
                                            {service.description}
                                        </p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4 text-gold font-bold tracking-[0.2em] uppercase text-sm mt-4 group/btn cursor-pointer">
                                            <span>Learn More</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
