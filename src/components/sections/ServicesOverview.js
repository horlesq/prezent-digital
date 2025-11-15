"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
    RiCodeSSlashLine,
    RiBrushLine,
    RiCloudLine,
    RiSettings5Line,
    RiStackLine,
    RiRocketLine,
} from "react-icons/ri";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CONTENT } from "@/lib/content";

const iconMap = {
    development: RiCodeSSlashLine,
    design: RiBrushLine,
    hosting: RiCloudLine,
    maintenance: RiSettings5Line,
    fullstack: RiStackLine,
    other: RiRocketLine,
};

export default function ServicesOverview() {
    // Destructure the new object name
    const { servicesOverview } = CONTENT;

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
                            {servicesOverview.header}
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        {servicesOverview.description}
                    </p>
                </motion.div>

                <div className="flex justify-center w-full max-w-7xl">
                    <HoverEffect
                        items={servicesOverview.items.map((service) => {
                            const Icon = iconMap[service.key] || RiRocketLine;
                            return {
                                ...service,
                                icon: (
                                    <span className="size-12 mb-5 text-2xl bg-muted flex items-center justify-center rounded-md">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                ),
                            };
                        })}
                    />
                </div>
            </div>
        </section>
    );
}
