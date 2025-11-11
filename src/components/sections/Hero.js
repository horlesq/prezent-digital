"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import TechCarousel from "../TechCarousel";
import { CONTENT } from "@/lib/content";

const iconMap = {
    Zap,
    Globe,
    TrendingUp,
};

export default function HeroSection() {
    const { hero } = CONTENT;

    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-background min-h-[calc(100vh-80px)] md:min-h-0">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="text-center space-y-6 sm:space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/50 shadow-lg"
                    >
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                            {hero.badge}
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                {hero.heading.gradient}
                            </span>
                            <br />
                            <span className="text-foreground">
                                {hero.heading.normal}
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                            {hero.description}
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                    >
                        <a
                            href="/contact"
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-background rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {hero.cta.primary}
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/portfolio"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-background/80 hover:bg-background text-foreground rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-muted"
                        >
                            {hero.cta.secondary}
                        </a>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0"
                    >
                        {hero.features.map((feature, idx) => {
                            const IconComponent = iconMap[feature.icon];
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-background/60 backdrop-blur-sm rounded-full border border-muted"
                                >
                                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
                                        {feature.text}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>

                    <TechCarousel
                        speed={18}
                        iconSize={40}
                        headerText={CONTENT.techCarousel.header}
                        showNames={true}
                    />
                </div>
            </div>
        </div>
    );
}
