import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FFFDF5",
          white: "#FFFFFF",
          card: "#FFFDF7",
          dark: "#0F0F0F",
        },
        ink: {
          DEFAULT: "#0F0F0F",
          muted: "#4A4A4A",
          light: "#717171",
        },
        neo: {
          yellow: "#FFE600",
          cyan: "#00F0FF",
          pink: "#FF007A",
          lime: "#A3E635",
          purple: "#A855F7",
          orange: "#FF6B00",
          blue: "#3B82F6",
        },
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #0F0F0F",
        "brutal-lg": "6px 6px 0px 0px #0F0F0F",
        "brutal-xl": "8px 8px 0px 0px #0F0F0F",
        "brutal-sm": "2px 2px 0px 0px #0F0F0F",
        "brutal-white": "4px 4px 0px 0px #FFFFFF",
        "brutal-yellow": "4px 4px 0px 0px #FFE600",
        "brutal-pink": "4px 4px 0px 0px #FF007A",
        "brutal-cyan": "4px 4px 0px 0px #00F0FF",
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        marqee: "marquee 25s linear infinite",
        pulseFast: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
