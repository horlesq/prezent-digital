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
        <section className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto px-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
                                {/* Icon container with background */}
                                {/* <div className="flex-shrink-0">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300"
                                    >
                                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                    </motion.div>
                                </div> */}

                                {/* Content */}
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
                </div>
            </div>
        </section>
    );
}
