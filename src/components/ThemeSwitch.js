"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { getNextTheme, getThemeIcon, getThemeLabel } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

/**
 * Optimized ThemeSwitch component
 * - Toggles between light/dark themes only
 * - Respects system preference on first visit
 * - Prevents hydration mismatches
 * - Improved accessibility
 * - Better UX with visual feedback
 */
const ThemeSwitch = ({ className, size = "default" }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    // Prevent hydration mismatch by mounting on client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle theme toggle: light <-> dark (system converts to resolved theme on first toggle)
    const handleToggle = useCallback(() => {
        if (!mounted || !theme) return;
        const nextTheme = getNextTheme(theme, resolvedTheme);
        setTheme(nextTheme);
    }, [theme, resolvedTheme, setTheme, mounted]);

    // Keyboard accessibility
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle();
            }
        },
        [handleToggle]
    );

    // Show placeholder to prevent layout shift
    if (!mounted) {
        return (
            <div
                className={cn(
                    "h-5 w-5 flex items-center justify-center",
                    className
                )}
                aria-hidden="true"
            />
        );
    }

    const iconType = getThemeIcon(theme, resolvedTheme);
    const label = getThemeLabel(theme, resolvedTheme);

    // Size variants for scalability
    const sizeClasses = {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-6 w-6",
    };

    const iconSize = sizeClasses[size] || sizeClasses.default;

    return (
        <button
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            className={cn(
                "relative flex items-center justify-center rounded-full",
                "transition-all duration-200",
                "hover:-translate-y-0.5 hover:scale-110",

                "active:scale-95",
                "group",
                className
            )}
            aria-label={label}
            type="button"
            role="switch"
            aria-checked={
                theme === "dark" ||
                (theme === "system" && resolvedTheme === "dark")
            }
        >
            {/* Theme icons */}
            {iconType === "sun" ? (
                <Sun
                    className={cn(
                        iconSize,
                        "text-yellow-500 dark:text-yellow-400",
                        "transition-all duration-200",
                        "group-hover:rotate-90"
                    )}
                />
            ) : (
                <Moon
                    className={cn(
                        iconSize,
                        "text-neutral-700 dark:text-neutral-300",
                        "transition-all duration-200",
                        "group-hover:rotate-12"
                    )}
                />
            )}
        </button>
    );
};

export default ThemeSwitch;
