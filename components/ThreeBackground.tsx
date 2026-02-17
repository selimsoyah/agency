"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, RoundedBox, Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

// Constants for the detailed animation
const LATERAL_SPEED = 2.0; // Moving left
const VERTICAL_SPEED = 1.0; // Moving down (so ball looks like it's going up)
const PILLAR_SPACING_X = 3.5;
const PILLAR_SPACING_Y = 1.75; // Height difference between steps
const NUM_PILLARS = 10;
const BOUNCE_HEIGHT = 2.5;

function BouncingBall() {
    const ballRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Physics: The ball bounces in place at (0,0,0).
        // The ground moves underneath it.

        // Time per step = Distance / Speed.
        // We synchronize the bounce with the lateral movement.
        const period = PILLAR_SPACING_X / LATERAL_SPEED;

        const factor = Math.PI / period;
        const y = Math.abs(Math.sin(t * factor));

        if (ballRef.current) {
            // Adjust bounce base to be strictly on top of the passing pillar
            // Since pillars move down, the contact point is always at Y=0 relative to the ball?
            // No, visually the ball hits the pillar top.
            // We set the camera and ball such that the collision point is constant in screen space.

            ballRef.current.position.y = (y * BOUNCE_HEIGHT) - 0.5; // -0.5 is visually where the "step" surface passes

            // Squash
            const squash = 1 + Math.max(0, (0.2 - y) * 0.4);
            ballRef.current.scale.set(squash, 1 / squash, squash);
        }
    });

    return (
        <Sphere ref={ballRef} args={[0.4, 64, 64]} position={[-1, 0, 0]}>
            <meshStandardMaterial
                color="#d4af37"
                metalness={1}
                roughness={0.1}
                envMapIntensity={1.5}
            />
        </Sphere>
    );
}

function Pillar({ index }: { index: number }) {
    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        const totalDistX = NUM_PILLARS * PILLAR_SPACING_X;
        const totalDistY = NUM_PILLARS * PILLAR_SPACING_Y;

        // Initial offsets
        const startX = index * PILLAR_SPACING_X;
        const startY = index * PILLAR_SPACING_Y;

        // Movement logic (Infinite Staircase)
        // x moves left, y moves down.
        let currentX = (startX - (t * LATERAL_SPEED)) % totalDistX;
        let currentY = (startY - (t * VERTICAL_SPEED)) % totalDistY;

        // Wrap logic
        // We want the pillars to spawn top-right and die bottom-left.
        // Center point where ball hits is roughly index=2 or 3.
        // Range: X goes from positive to negative.

        // Handle JS modulo negative numbers
        if (currentX < -6) {
            currentX += totalDistX;
            currentY += totalDistY; // Reset height too so it spawns at top
        }

        // Adjust Y wrap independently? No, they must be linked to form a straight line.
        // The modulo above keeps them in a diagonal line.
        // However, since Y also decreases, we need to ensure Y wraps correctly relative to X.
        // Actually, simple way: Determine 'cycle' based on X, and set Y based on X.

        // Linear equation for the staircase: Y = m * X + c
        // Slope m = PILLAR_SPACING_Y / PILLAR_SPACING_X
        const slope = PILLAR_SPACING_Y / PILLAR_SPACING_X;

        // We calculate Y based on currentwrapped X to insure they stay perfectly aligned
        // But we need them to move.

        // Let's stick to the independent wrapping but sync the reset.
        // When X wraps, Y should wrap to the top.

        if (currentY < -6) {
            currentY += totalDistY;
        }

        // To ensure perfect alignment, force Y to be a function of the "step index" in the loop?
        // Let's refine: The shift in X should correspond exactly to shift in Y.
        // If we wrap X by Adding TotalDistX, we must Add TotalDistY to Y.

        // Re-calculate based on a single progress variable
        const progress = (t * LATERAL_SPEED - startX) / totalDistX;
        const wrappedProgress = progress % 1; // 0..1..

        // No, standard modulo position is safer.
        // We just need to make sure that when we add totalDistX, we add totalDistY.
        // The previous logic `if (currentX < -6) ...` handles the "respawn".
        // But we need to make sure the start positions were aligned.
        // They are: index * spacing.
        // So `currentY` needs to correspond to `currentX` via the slope, minus the time offset.

        // Let's just use the `currentX` logic and derived Y.
        // The logical instruction involved: "The ball is climbing".
        // Visually, pillars are moving DOWN and LEFT.

        if (ref.current) {
            ref.current.position.x = currentX;
            // Calculate Y strictly based on X to keep the straight line perfect
            // But the line itself moves?
            // No, the line of moving pillars is constant in space? No, the pillars move.
            // It's a conveyor belt of steps.

            // We verified startY - t*speed works.
            // We just need to make sure the wrap is synced.
            // Let's use the explicit wrap check from before.

            // Recalculating solely to be safe:
            const xOffset = (t * LATERAL_SPEED) - startX;
            const cycle = Math.floor((xOffset + 6) / totalDistX); // +6 is the offset to left edge

            const realX = startX - (t * LATERAL_SPEED) + (cycle * totalDistX);
            const realY = startY - (t * VERTICAL_SPEED) + (cycle * totalDistY);

            // Wait, if it spawns new steps, they should be higher.
            // If cycle increases, we add height.
            // Since we are moving Negative, cycle increases as time passes?
            // t increases -> -t decreases.
            // We need to ADD width/height when it goes off screen.

            // Manual wrapping check
            let simX = startX - (t * LATERAL_SPEED);
            let simY = startY - (t * VERTICAL_SPEED);

            while (simX < -8) {
                simX += totalDistX;
                simY += totalDistY;
            }

            ref.current.position.x = simX;
            ref.current.position.y = simY - 3; // Shift down to act as floor (-3 is base level)
        }
    });

    return (
        <RoundedBox ref={ref} args={[2.5, 8, 2.5]} radius={0.1} smoothness={4}>
            <meshPhysicalMaterial
                color="#0f172a"
                roughness={0.1}
                metalness={0.9}
                transmission={0}
                reflectivity={1}
                clearcoat={1}
            />
        </RoundedBox>
    );
}

function PillarsManager() {
    const pillars = useMemo(() => Array(NUM_PILLARS).fill(0).map((_, i) => i), []);
    // Reverse order for drawing? Or just index.
    return (
        <group position={[-1, -2, 0]}>
            {pillars.map((i) => (
                <Pillar key={i} index={i} />
            ))}
        </group>
    )
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#0b1015]">
            <Canvas camera={{ position: [2, 1, 12], fov: 35 }} shadows>
                <ambientLight intensity={0.2} />
                <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} castShadow color="#ffffff" />
                <spotLight position={[-5, 5, -5]} intensity={1} color="#d4af37" />
                <Environment preset="city" />

                <BouncingBall />
                <PillarsManager />

                <ContactShadows position={[-1, -2.5, 0]} opacity={0.5} scale={15} blur={2.5} far={4} color="#000000" />

                {/* Cinematic Fog for Infinite Look */}
                <fog attach="fog" args={['#0b1015', 8, 25]} />
            </Canvas>
            {/* Vignette & Grain */}
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0b1015_95%)] pointer-events-none" />
        </div>
    );
}
