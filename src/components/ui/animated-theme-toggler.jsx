"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { getNextTheme, getThemeLabel } from "@/lib/theme-config";

/**
 * AnimatedThemeToggler - Magic UI component integrated with next-themes
 * - Smooth view transition animations
 * - Respects system preference on first visit
 * - Only toggles between light/dark (no system option)
 */
export const AnimatedThemeToggler = ({
    className,
    duration = 400,
    ...props
}) => {
    const [mounted, setMounted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const buttonRef = useRef(null);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get current theme state
    const isDark =
        theme === "dark" || (theme === "system" && resolvedTheme === "dark");
    const displayTheme = theme === "system" ? resolvedTheme : theme;

    const toggleTheme = useCallback(async () => {
        // Prevent double-clicks
        if (!mounted || !theme || !buttonRef.current || isTransitioning) return;

        // Get next theme using our theme config
        const nextTheme = getNextTheme(theme, resolvedTheme);

        // Check if we need a view transition (only for supported browsers)
        const supportsViewTransition = "startViewTransition" in document;

        setIsTransitioning(true);

        try {
            if (supportsViewTransition) {
                // Get button position before transition
                const { top, left, width, height } =
                    buttonRef.current.getBoundingClientRect();
                const x = left + width / 2;
                const y = top + height / 2;
                const maxRadius = Math.hypot(
                    Math.max(left, window.innerWidth - left),
                    Math.max(top, window.innerHeight - top)
                );

                const transition = document.startViewTransition(() => {
                    flushSync(() => {
                        setTheme(nextTheme);
                    });
                });

                await transition.ready;

                // Animate the transition with circular clip-path
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${maxRadius}px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration,
                        easing: "ease-in-out",
                        pseudoElement: "::view-transition-new(root)",
                    }
                );

                // Wait for animation to complete
                await new Promise((resolve) => setTimeout(resolve, duration));
            } else {
                // Fallback for browsers without view transitions
                setTheme(nextTheme);
            }
        } finally {
            setIsTransitioning(false);
        }
    }, [theme, resolvedTheme, setTheme, mounted, duration, isTransitioning]);

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

    const label = getThemeLabel(theme, resolvedTheme);

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className={cn(
                "relative flex items-center justify-center rounded-full",
                "transition-all duration-200",
                "hover:-translate-y-0.5 hover:scale-110",
                "active:scale-95",
                "focus:outline-none",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            disabled={isTransitioning}
            aria-label={label}
            type="button"
            role="switch"
            aria-checked={isDark}
            {...props}
        >
            {isDark ? (
                <Sun className="h-5 w-5 transition-all duration-200 group-hover:rotate-90" />
            ) : (
                <Moon className="h-5 w-5 transition-all duration-200 group-hover:rotate-12" />
            )}
            <span className="sr-only">{label}</span>
        </button>
    );
};
