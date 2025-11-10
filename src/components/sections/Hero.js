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
                "mx-4 w-12 h-12 flex items-center justify-center text-foreground transition-all duration-300 opacity-75 hover:scale-125 hover:opacity-100"
            }
        >
            {children}
        </div>
    );
}

export default function HeroSection() {
    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-background">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/50 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                            Soluții Web Personalizate
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
                            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                Creștem Afaceri
                            </span>
                            <br />
                            <span className="text-foreground">
                                Prin Soluții Digitale
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Construim website-uri moderne și platforme digitale
                            care transformă vizibilitatea online a businessului
                            tău. De la idee la lansare, suntem partenerul tău în
                            digitalizare.
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
                            className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            Pornește-ți proiectul acum
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/portfolio"
                            className="px-8 py-4 bg-background/80 hover:bg-background text-foreground rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-muted"
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
                                className="flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-sm rounded-full border border-muted/50"
                            >
                                <feature.icon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    <TechCarousel
                        speed={18}
                        iconSize={40}
                        headerText="Tehnologii moderne care garantează performanță"
                        showNames={true}
                    />
                </div>
            </div>
        </div>
    );
}
