import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors"; // To add default and hover effect to our "fade" effect for consistancy

const config: Config = {
  darkMode: "class", // Ensures dark mode is enabled
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 15px rgba(0, 100, 255, 0.7)",
        glowDark: "0 0 20px rgba(255, 215, 0, 0.7)",
      },
      colors: {
        fade: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800], // Dark background for active state
          ["dark-hover"]: colors.neutral[900], // Darker bg for hover
        },
        gray: {
          850: "#1a1a1a", // Custom gray
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
