// components/sections/WhyChooseUs.js
"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function WhyChooseUs() {
    const { whyChooseUs } = CONTENT;

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                        <span className="bg-foreground bg-clip-text text-transparent">
                            {whyChooseUs.title}
                        </span>
                    </h2>
                </motion.div>

                {/* Features List */}
                <div className="space-y-6 sm:space-y-8">
                    {whyChooseUs.features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="text-left"
                        >
                            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                                <span className="font-bold">
                                    {feature.title}
                                </span>
                                <span className="text-muted-foreground">
                                    {feature.description}
                                </span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
