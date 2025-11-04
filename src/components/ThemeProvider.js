"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { THEME_CONFIG } from "@/lib/theme-config";

/**
 * ThemeProvider wrapper for next-themes
 * Optimized with centralized configuration and smooth transitions
 */
export function ThemeProvider({ children, ...props }) {
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
