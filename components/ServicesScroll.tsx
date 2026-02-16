"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";

const services = [
    {
        id: "01",
        title: "Custom Software",
        description: "Bespoke architectures tailored to your operational needs."
    },
    {
        id: "02",
        title: "AI Automation",
        description: "Intelligent workflows that reduce manual labor by 90%."
    },
    {
        id: "03",
        title: "Digital Infrastructure",
        description: "Scalable cloud solutions built for hyper-growth."
    },
    {
        id: "04",
        title: "UX/UI Design",
        description: "Award-winning interfaces that captivate and convert."
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

                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-[60vh] w-[400px] md:w-[500px] flex-shrink-0 overflow-hidden bg-neutral-900 border border-neutral-800 transition-colors hover:bg-neutral-800"
                        >
                            <div className="absolute top-6 left-6 text-8xl font-bold text-neutral-800 group-hover:text-gold/20 transition-colors">
                                {service.id}
                            </div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
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
