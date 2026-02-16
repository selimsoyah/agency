"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { Suspense } from "react";

function HeroText3D() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Center>
                {/* Note: You would normally load a font here. For now we use standard HTML overlay for text to ensure readability and SEO, 
            and use 3D for abstract elements behind/around it. 
            If we had a font file (Typeface JSON), we could use Text3D.
        */}
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#d4af37" wireframe />
                </mesh>
            </Center>
        </Float>
    );
}

export default function Hero3D() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Scene Layer */}
            <div className="absolute inset-0 z-0 opacity-30">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <HeroText3D />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                >
                    ELEVATE YOUR <br />
                    <span className="text-gold">DIGITAL PRESENCE</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light"
                >
                    We build bespoke software and AI solutions for the world's most vivid brands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-lg uppercase tracking-widest rounded-sm">
                        Start Your Project
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
            </motion.div>
        </section>
    );
}
