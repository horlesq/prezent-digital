"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiSupabase,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
} from "react-icons/si";

/* small hook to detect tailwind dark class on <html> (updates live) */
function useIsDarkClass() {
    const [isDark, setIsDark] = useState(
        typeof document !== "undefined" &&
            document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (typeof document === "undefined") return;
        const el = document.documentElement;
        const update = () => setIsDark(el.classList.contains("dark"));

        const mo = new MutationObserver((mutations) => {
            for (const m of mutations) {
                if (m.type === "attributes" && m.attributeName === "class") {
                    update();
                    break;
                }
            }
        });
        mo.observe(el, { attributes: true });

        const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
        const mqlHandler = (e) => setIsDark(e.matches);
        if (mql?.addEventListener) mql.addEventListener("change", mqlHandler);
        else if (mql?.addListener) mql.addListener(mqlHandler);

        return () => {
            mo.disconnect();
            if (mql?.removeEventListener)
                mql.removeEventListener("change", mqlHandler);
            else if (mql?.removeListener) mql.removeListener(mqlHandler);
        };
    }, []);

    return isDark;
}

/* StackItem: fixed height, icon + name horizontally */
function StackItem({ Icon, name, iconSize = 40 }) {
    return (
        <div
            role="listitem"
            className="mx-4 flex items-center gap-3 rounded-lg transition-all duration-300 opacity-90 hover:scale-105 hover:opacity-100 h-16"
            style={{ boxSizing: "border-box" }}
        >
            <div className="flex items-center justify-center shrink-0 text-neutral-800 dark:text-neutral-100">
                <Icon style={{ width: iconSize, height: iconSize }} />
            </div>
            <span className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

/**
 * TechCarousel props:
 * - speed: marquee speed (lower = slower). default 18 for slower movement.
 * - iconSize: pixel size of each icon (default 40)
 * - headerText: string shown above the carousel
 * - showNames: whether to show technology names (default true)
 */
export default function TechCarousel({
    speed = 18,
    iconSize = 40,
    headerText = "Tehnologii moderne pentru soluții de calitate",
    showNames = true,
}) {
    const isDark = useIsDarkClass();
    const darkColor = "#030712"; // tailwind neutral-950
    const lightColor = "#ffffff";

    const gradientColor = isDark ? darkColor : lightColor;

    // Sorted: Development tools first, then Design tools
    const items = [
        { Icon: SiNextdotjs, name: "Next.js" },
        { Icon: SiReact, name: "React" },
        { Icon: SiTailwindcss, name: "Tailwind CSS" },
        { Icon: SiSupabase, name: "Supabase" },
        { Icon: SiAdobeillustrator, name: "Illustrator" },
        { Icon: SiAdobephotoshop, name: "Photoshop" },
        { Icon: SiAdobepremierepro, name: "Premiere Pro" },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-10"
            aria-label="Technology carousel section"
        >
            <div className="max-w-4xl mx-auto text-center px-4">
                <h3 className="text-lg md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {headerText}
                </h3>

                {/* Wrap the marquee in an overflow-hidden container to prevent scrollbars */}
                <div className="w-full overflow-hidden no-scrollbar">
                    <Marquee
                        pauseOnHover
                        autoFill
                        gradient
                        gradientColor={gradientColor}
                        direction="right"
                        speed={speed}
                        className="py-4"
                        style={{ overflow: "hidden" }}
                    >
                        <div role="list" className="flex items-center h-16">
                            {items.map((it, idx) => (
                                <StackItem
                                    key={idx}
                                    Icon={it.Icon}
                                    name={showNames ? it.name : ""}
                                    iconSize={iconSize}
                                />
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </motion.section>
    );
}
