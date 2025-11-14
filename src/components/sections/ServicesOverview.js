"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Cloud, Wrench, Monitor, Bookmark } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CONTENT } from "@/lib/content";

const iconMap = {
    development: Code,
    design: PenTool,
    hosting: Cloud,
    maintenance: Wrench,
    fullstack: Monitor,
    other: Bookmark,
};

export default function ServicesOverview() {
    const servicesFromContent = (CONTENT && CONTENT.services) || null;

    const SERVICES = servicesFromContent || [
        {
            key: "development",
            title: "Web App development",
            description:
                "We'll build you a website that's so good, it'll make all the other websites jealous. Trust me, not kidding.",
        },
        {
            key: "design",
            title: "Web Design",
            description:
                "Your website will be so beautiful, you'll want to frame it and hang it on your wall (but please don't).",
        },
        {
            key: "hosting",
            title: "Deployments and Hosting",
            description:
                "Get your website out there in the world, where it belongs, with our lightning-fast deployment services.",
        },
        {
            key: "maintenance",
            title: "Maintenance",
            description:
                "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered.",
        },
        {
            key: "fullstack",
            title: "Full-Stack Development",
            description:
                "Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.",
        },
        {
            key: "other",
            title: "And everything else",
            description:
                "Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we've done it AND we'll do it for you.",
        },
    ];

    // inject icon ReactNodes
    const items = useMemo(
        () =>
            SERVICES.map((s) => {
                const Icon = iconMap[s.key] || Bookmark;
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
                            We handle just about everything!
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                        We handle everything from design to deployment to get
                        your website shipped and ready to go!
                    </p>
                </motion.div>

                <div className="flex justify-center w-full max-w-7xl">
                    <HoverEffect items={items} />
                </div>
            </div>
        </section>
    );
}
