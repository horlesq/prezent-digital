/**
 * Theme configuration
 * Centralized theme settings for maintainability and scalability
 */

export const THEME_CONFIG = {
    // Available theme options
    themes: {
        light: "light",
        dark: "dark",
        system: "system",
    },

    // Default theme
    defaultTheme: "system",

    // Theme attribute (CSS selector)
    attribute: "class",

    // Enable system theme detection
    enableSystem: true,

    // Storage key for persisting theme preference
    storageKey: "theme-preference",

    // Animation duration for theme transitions
    transitionDuration: "200ms",
};

/**
 * Get the next theme in sequence (light <-> dark only)
 * If current theme is "system", converts to the opposite of resolved theme
 */
export const getNextTheme = (currentTheme, resolvedTheme = "light") => {
    const { themes } = THEME_CONFIG;

    // If currently on system theme, convert to the opposite of what it resolved to
    if (currentTheme === themes.system) {
        return resolvedTheme === "dark" ? themes.light : themes.dark;
    }

    // Otherwise, toggle between light and dark
    return currentTheme === themes.light ? themes.dark : themes.light;
};

/**
 * Get theme icon based on current theme
 */
export const getThemeIcon = (theme, resolvedTheme) => {
    // Resolved theme is the actual theme (light/dark) after system detection
    const displayTheme = theme === "system" ? resolvedTheme : theme;
    return displayTheme === "dark" ? "sun" : "moon";
};

/**
 * Get accessible label for theme
 */
export const getThemeLabel = (theme, resolvedTheme) => {
    // Use resolved theme if currently on system
    const displayTheme = theme === "system" ? resolvedTheme : theme;
    return `Switch to ${displayTheme === "dark" ? "light" : "dark"} theme`;
};
