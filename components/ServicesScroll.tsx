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
                        <div
                            key={service.id}
                            className="group relative h-[65vh] w-[400px] md:w-[500px] flex-shrink-0 overflow-hidden bg-neutral-900 border border-neutral-800 transition-colors hover:border-gold/30"
                        >
                            <div className="absolute inset-0 z-0">
                                <SectionVisual type={`service-${idx + 1}` as any} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                            <div className="absolute top-6 left-6 text-8xl font-bold text-neutral-800/30 group-hover:text-gold/20 transition-colors">
                                {service.id}
                            </div>
                            <div className="absolute bottom-0 left-0 p-10 w-full z-10 pointer-events-none">
                                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xl text-gray-400 font-light">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
