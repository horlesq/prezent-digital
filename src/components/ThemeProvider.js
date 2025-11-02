"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { THEME_CONFIG } from "@/lib/theme-config";

/**
 * ThemeProvider wrapper for next-themes
 * Optimized with centralized configuration
 */
export function ThemeProvider({ children, ...props }) {
    return (
        <NextThemesProvider
            attribute={THEME_CONFIG.attribute}
            defaultTheme={THEME_CONFIG.defaultTheme}
            enableSystem={THEME_CONFIG.enableSystem}
            storageKey={THEME_CONFIG.storageKey}
            disableTransitionOnChange={false}
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}
