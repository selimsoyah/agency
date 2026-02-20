"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, MeshDistortMaterial, Stars, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- 1. Realistic Human Climber ---
function RealisticClimber() {
  const group = useRef();
  const limbs = {
    lArm: useRef(), rArm: useRef(),
    lLeg: useRef(), rLeg: useRef()
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const speed = 2;
    
    // Diagonal Ascent Logic
    const progress = (t * 0.3) % 12;
    group.current.position.y = progress - 5;
    group.current.position.x = progress - 4;
    group.current.position.z = 1.2;

    // Movement animation
    limbs.lArm.current.rotation.x = Math.sin(t * speed) * 0.6 - 1.2;
    limbs.rArm.current.rotation.x = Math.sin(t * speed + Math.PI) * 0.6 - 1.2;
    limbs.lLeg.current.rotation.x = Math.sin(t * speed + Math.PI) * 0.3 + 0.5;
    limbs.rLeg.current.rotation.x = Math.sin(t * speed) * 0.3 + 0.5;
    group.current.rotation.z = -0.4; // Lean into cliff
  });

  const bodyMat = <meshStandardMaterial color="#0a0a0a" roughness={0.4} />;
  const toolMat = <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.5} />;

  return (
    <group ref={group} scale={0.28}>
      {/* Torso/Jacket */}
      <mesh castShadow>
        <capsuleGeometry args={[0.25, 0.6, 8, 16]} />
        {bodyMat}
      </mesh>
      {/* Helmet (Gold) */}
      <mesh position={[0, 0.65, 0.15]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        {toolMat}
      </mesh>
      {/* Arms & Axe */}
      <group ref={limbs.lArm} position={[0.3, 0.4, 0]}>
        <mesh position={[0, -0.2, 0]}><capsuleGeometry args={[0.07, 0.4, 8]} />{bodyMat}</mesh>
        <group position={[0, -0.4, 0.2]} rotation={[1.5, 0, 0]}>
           <mesh><cylinderGeometry args={[0.01, 0.01, 0.5]} />{bodyMat}</mesh>
           <mesh position={[0, 0.2, 0.05]}><boxGeometry args={[0.02, 0.06, 0.25]} />{toolMat}</mesh>
        </group>
      </group>
      <group ref={limbs.rArm} position={[-0.3, 0.4, 0]}>
        <mesh position={[0, -0.2, 0]}><capsuleGeometry args={[0.07, 0.4, 8]} />{bodyMat}</mesh>
      </group>
      {/* Legs */}
      <group ref={limbs.lLeg} position={[0.15, -0.4, 0]}><mesh position={[0, -0.3, 0]}><capsuleGeometry args={[0.1, 0.5, 8]} />{bodyMat}</mesh></group>
      <group ref={limbs.rLeg} position={[-0.15, -0.4, 0]}><mesh position={[0, -0.3, 0]}><capsuleGeometry args={[0.1, 0.5, 8]} />{bodyMat}</mesh></group>
    </group>
  );
}

// --- 2. Chiseled Solid Mountain ---
function ChiseledMountain() {
  return (
    <group position={[2, -2, -2]} rotation={[0, -0.4, 0]}>
      {/* Cluster of Dodacahedrons creates the "Low Poly Rock" look */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[i * 0.8, i * 1.2, -i * 0.5]} rotation={[Math.random(), 0, 0]}>
          <dodecahedronGeometry args={[2.5 + Math.random(), 0]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.9} 
            flatShading={true} 
            envMapIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// --- 3. Cinematic Snow & Environment ---
function Atmosphere() {
  const points = useRef();
  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    points.current.position.y -= 0.01;
    if (points.current.position.y < -5) points.current.position.y = 5;
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(3000).map(() => (Math.random() - 0.5) * 20)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="white" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
}

// --- 4. Hero Section Component ---
export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0c] overflow-hidden">
      {/* 3D Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          
          {/* THE LIGHTING SETUP - Crucial for Realism */}
          <ambientLight intensity={0.2} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#444" />
          {/* Rim light (behind mountain) */}
          <spotLight position={[10, 10, 5]} angle={0.3} penumbra={1} intensity={5} color="#fff" castShadow />
          {/* Key light on climber */}
          <directionalLight position={[-5, 5, 5]} intensity={0.5} />

          <Suspense fallback={null}>
            <ChiseledMountain />
            <RealisticClimber />
            <Atmosphere />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-white text-7xl md:text-[9rem] font-serif font-black leading-[0.8] tracking-tighter mix-blend-difference">
            ELEVATE<br />
            <span className="italic font-light text-gray-400">FORWARD</span>
          </h1>
          <p className="mt-10 text-gray-500 tracking-[0.5em] uppercase text-xs md:text-sm max-w-lg">
            AI-Powered Software That Scales<br />With Your Ambition.
          </p>
          
          <div className="mt-16 flex items-center gap-8 pointer-events-auto">
            <button className="px-8 py-4 bg-white text-black text-[10px] font-bold tracking-widest hover:bg-[#d4af37] transition-colors">
              INITIALIZE PROJECT
            </button>
            <div className="h-[1px] w-24 bg-gray-800" />
          </div>
        </motion.div>
      </div>

      {/* Global Vignette for "Sober" look */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </section>
  );
}