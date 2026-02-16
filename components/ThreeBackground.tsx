"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function CentralArtifact() {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <TorusKnot ref={ref} args={[1, 0.3, 128, 32]} scale={1.5}>
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={1}
                    anisotropy={1}
                    distortion={0.5}
                    distortionScale={1}
                    temporalDistortion={0.2}
                    color="#f0f0f0"
                    background={new THREE.Color("#0b1015")}
                />
            </TorusKnot>
        </Float>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#0b1015]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#d4af37" />
                <Environment preset="city" />
                <CentralArtifact />
            </Canvas>
            {/* Vignette & Grain */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0b1015_90%)] pointer-events-none" />
        </div>
    );
}
