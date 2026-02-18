"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment, ContactShadows, Torus, Box, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function VisualContent({ type }: { type: string }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    const materialProps = {
        color: "#d4af37",
        metalness: 1,
        roughness: 0.1,
        emissive: "#d4af37",
        emissiveIntensity: 0.1,
    };

    if (type === "service-1") {
        return (
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <Torus ref={meshRef} args={[0.8, 0.3, 16, 100]}>
                    <meshStandardMaterial {...materialProps} />
                </Torus>
            </Float>
        );
    }

    if (type === "service-2") {
        return (
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <Box ref={meshRef} args={[1.2, 1.2, 1.2]}>
                    <meshStandardMaterial {...materialProps} wireframe />
                </Box>
            </Float>
        );
    }

    if (type === "service-3") {
        return (
            <Float speed={3} rotationIntensity={1} floatIntensity={3}>
                <Icosahedron ref={meshRef} args={[1, 0]}>
                    <meshStandardMaterial {...materialProps} flatShading />
                </Icosahedron>
            </Float>
        );
    }

    if (type === "service-4") {
        return (
            <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere ref={meshRef} args={[1, 64, 64]}>
                    <meshStandardMaterial {...materialProps} metalness={1} roughness={0} />
                </Sphere>
            </Float>
        );
    }

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 64, 64]}>
                <MeshDistortMaterial
                    {...materialProps}
                    speed={3}
                    distort={0.4}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
}

export default function SectionVisual({ type }: { type: "project" | "service-1" | "service-2" | "service-3" | "service-4" }) {
    return (
        <div className="w-full h-full min-h-[400px] relative">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#d4af37" />
                <VisualContent type={type} />
                <Environment preset="city" />
                <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
            </Canvas>
        </div>
    );
}
