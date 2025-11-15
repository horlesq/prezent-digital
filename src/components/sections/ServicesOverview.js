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
    hosting: RiCloudLine ,
    maintenance: RiSettings5Line,
    fullstack: RiStackLine,
    other: RiRocketLine,
};

export default function ServicesOverview() {
    // Destructure the new object name
    const { servicesOverview } = CONTENT; 
    
    // Get the items array from the servicesOverview object
    const SERVICES = servicesOverview.items || [];

    // inject icon ReactNodes
    const items = useMemo(
        () =>
            SERVICES.map((s) => {
                const Icon = iconMap[s.key] || RiRocketLine;
                return {
                    ...s,
                    icon: (
                        <span className="text-zinc-600 dark:text-zinc-200 size-[48px] mb-[20px] text-[24px] bg-[#e3e3e5] dark:bg-[#1e1e20] flex items-center justify-center rounded-[6px]">
                            <Icon className="w-5 h-5" />
                        </span>
                    ),
                };
            }),
        [SERVICES]
    );

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
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
                    <HoverEffect items={items} />
                </div>
            </div>
        </section>
    );
}