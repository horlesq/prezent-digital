"use client";

import { useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

/**
 * ParticlesBackground - Animated particle network background
 * Creates connected dots that respond to mouse hover
 * Adapts colors based on light/dark theme
 */
export default function ParticlesBackground() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        });
    }, []);

    const options = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.5,
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: resolvedTheme === "light" ? "#9f9cbf" : "#c1c7d1",
                },
                links: {
                    color: {
                        value:
                            resolvedTheme === "light" ? "#9f9cbf" : "#c1c7d1",
                    },
                    distance: 120,
                    enable: true,
                    opacity: resolvedTheme === "light" ? 0.2 : 0.1,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 60,
                },
                opacity: {
                    value: resolvedTheme === "light" ? 0.2 : 0.15,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [resolvedTheme]
    );

    return (
        <Particles
            className="absolute inset-0 pointer-events-none hidden sm:block"
            options={options}
        />
    );
}
