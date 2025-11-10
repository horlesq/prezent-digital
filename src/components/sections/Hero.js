"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import Marquee from "react-fast-marquee";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiFramer,
    SiTypescript,
    SiSass,
    SiEslint,
    SiPostcss,
    SiNextra,
} from "react-icons/si";
import TechCarousel from "../TechCarousel";

function StackItem({ children }) {
    return (
        <div
            className={
                "mx-4 w-12 h-12 flex items-center justify-center text-neutral-800 dark:text-neutral-100 transition-all duration-300 opacity-75 hover:scale-125 hover:opacity-100"
            }
        >
            {children}
        </div>
    );
}

export default function HeroSection() {
    return (
        <div className="relative  flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Transformare Digitală Completă
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                            <span className="bg-gradient-to-r from-neutral-900 via-rose-600 to-neutral-900 dark:from-neutral-100 dark:via-rose-400 dark:to-neutral-100 bg-clip-text text-transparent">
                                Creștem Afaceri
                            </span>
                            <br />
                            <span className="text-neutral-900 dark:text-neutral-100">
                                Prin Soluții Digitale
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            Platformă pentru a ajuta la digitalizarea
                            businessurilor. Transformăm viziuni în realitate
                            digitală cu soluții web moderne și personalizate.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="/contact"
                            className="group relative px-8 py-4 bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            Începe Transformarea
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/portfolio"
                            className="px-8 py-4 bg-white/80 hover:bg-white dark:bg-neutral-900/80 dark:hover:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800"
                        >
                            Vezi Portofoliu
                        </a>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4 pt-8"
                    >
                        {[
                            { icon: Zap, text: "Dezvoltare Rapidă" },
                            { icon: Globe, text: "Prezență Online" },
                            { icon: TrendingUp, text: "Creștere Garantată" },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-full border border-neutral-200/50 dark:border-neutral-800/50"
                            >
                                <feature.icon className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    <TechCarousel
                        speed={18} 
                        iconSize={40} 
                        headerText="Technologies powering our solutions"
                        showNames={true}
                    />
                </div>
            </div>
        </div>
    );
}
