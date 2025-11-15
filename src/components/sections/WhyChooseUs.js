"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const illustrations = {
    design: "/assets/design.png",
    performance: "/assets/seo.png",
    warranty: "/assets/warranty.png",
};

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const { whyChooseUs } = CONTENT;
    const intervalRef = useRef(null);

    // Reset progress when active index changes
    useEffect(() => {
        setProgress(0);
    }, [activeIndex]);

    // Auto-rotate through features with progress bar
    useEffect(() => {
        const duration = 5000; // 5 seconds total per feature
        const intervalTime = 50; // Update every 50ms
        const increment = (intervalTime / duration) * 100;

        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + increment;

                if (newProgress >= 100) {
                    // Move to next feature when progress completes
                    const nextIndex =
                        (activeIndex + 1) % whyChooseUs.features.length;
                    console.log("Next index will be:", nextIndex);
                    setActiveIndex(nextIndex);
                    return 0;
                }
                return newProgress;
            });
        }, intervalTime);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [activeIndex, whyChooseUs.features.length]);

    const handleFeatureClick = (index) => {
        // Reset progress and set active index
        setProgress(0);
        setActiveIndex(index);

        // Clear and restart interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const activeImageSrc = illustrations[whyChooseUs.features[activeIndex].key];

    return (
        <section className="py-12 lg:py-16 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
                        <span className="bg-foreground bg-clip-text text-transparent">
                            {whyChooseUs.header}
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        {whyChooseUs.description}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Features list */}
                    <div className="space-y-6">
                        {whyChooseUs.features.map((feature, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={feature.title}
                                    onClick={() => handleFeatureClick(index)}
                                    className="relative pl-6 cursor-pointer transition-all duration-300"
                                >
                                    {/* Progress bar indicator */}
                                    <div className="absolute left-0 top-0 w-1 h-full rounded-r-full bg-muted overflow-hidden">
                                        {isActive && (
                                            <div
                                                className="w-full bg-primary rounded-r-full transition-all duration-100 ease-linear"
                                                style={{
                                                    height: `${progress}%`,
                                                    transformOrigin: "top",
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <h3
                                            className={`
                      text-lg sm:text-xl font-bold mb-1 transition-colors duration-300
                      ${
                          isActive
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                      }
                    `}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p
                                            className={`
                      text-sm sm:text-base leading-relaxed transition-all duration-300
                      ${isActive ? "text-foreground" : "text-muted-foreground"}
                    `}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right side - Image Illustration */}
                    <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                        <div
                            key={activeIndex}
                            className="w-full max-w-md animate-in fade-in zoom-in duration-500"
                            style={{
                                animation: "fadeInScale 0.5s ease-out",
                            }}
                        >
                            <Image
                                src={activeImageSrc}
                                alt={whyChooseUs.features[activeIndex].title}
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </section>
    );
}
