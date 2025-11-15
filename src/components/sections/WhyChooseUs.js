"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { Zap, Users, TrendingUp, Shield, Rocket, Target } from "lucide-react";

const iconMap = {
    zap: Zap,
    users: Users,
    trending: TrendingUp,
    shield: Shield,
    rocket: Rocket,
    target: Target,
};

export default function WhyChooseUs() {
    const { whyChooseUs } = CONTENT;

    return (
        <section className="py-12 lg:py-16 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
                        <span className="bg-foreground bg-clip-text text-transparent">
                            {whyChooseUs.title}
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        {whyChooseUs.description}
                    </p>
                </motion.div>

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

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {whyChooseUs.features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || Zap;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="group flex gap-4 sm:gap-5 text-left"
                            >
                    
                                <div className="flex-1 pt-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                            
                        );
                    })}
                </div> */}
            </div>
        </section>
    );
}
