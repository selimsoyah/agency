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
        <section className="relative h-screen flex items-start justify-start overflow-hidden">
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

            {/* Content Layer - Far Left, Top */}
            <div className="relative z-10 flex flex-col items-start justify-start h-full pl-8 md:pl-12 lg:pl-16 pr-4 pt-24 md:pt-32 text-left w-full md:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-white font-serif leading-none mix-blend-difference"
                >
                    ELEVATE
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-bold tracking-tighter mb-12 text-white font-serif leading-none italic mix-blend-difference"
                >
                    FORWARD
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-sm md:text-base text-gray-400 max-w-md mb-12 font-sans uppercase tracking-[0.2em]"
                >
                    AI-Powered Software<br />That Scales With Your Ambition.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="text-xs font-bold tracking-[0.2em] border-b border-white pb-1 hover:border-gold hover:text-gold transition-colors duration-300 uppercase">
                        Initialize Project
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
