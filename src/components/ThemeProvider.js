"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { THEME_CONFIG } from "@/lib/theme-config";
import { useEffect } from "react";

/**
 * Helper to get the current day's primary color variable name
 */
const getDayPrimaryVariable = () => {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const day = new Date().getDay();
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return `--primary-${days[day]}`;
};

/**
 * ThemeProvider wrapper for next-themes
 * Optimized with centralized configuration and smooth transitions
 */
export function ThemeProvider({ children, ...props }) {
    useEffect(() => {
        const root = document.documentElement;
        const dayPrimaryVariable = getDayPrimaryVariable();

        // 1. Read the correct day-specific variable value
        const primaryColorValue =
            getComputedStyle(root).getPropertyValue(dayPrimaryVariable);

        // 2. Set the generic --primary variable to the day's value
        // This is what Tailwind/your app reads for 'primary'
        if (primaryColorValue) {
            root.style.setProperty("--primary", primaryColorValue.trim());
        }
    }, []);

    const startViewTransition = () => {
        if (!document.startViewTransition) {
            return null;
        }

        return document.startViewTransition(() => {
            const root = document.documentElement;
            root.classList.add("theme-transition");

            // Remove the class after transition
            const cleanup = () => {
                root.classList.remove("theme-transition");
                document.removeEventListener("transitionend", cleanup);
            };
            document.addEventListener("transitionend", cleanup);
        });
    };

    return (
        <NextThemesProvider
            attribute={THEME_CONFIG.attribute}
            defaultTheme={THEME_CONFIG.defaultTheme}
            enableSystem={THEME_CONFIG.enableSystem}
            storageKey={THEME_CONFIG.storageKey}
            disableTransitionOnChange={true}
            onChangeStart={startViewTransition}
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}
