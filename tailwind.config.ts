import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "ink-new": "var(--ink)",
        tone: "var(--tone)",
        line: "var(--line)",
        muted: "var(--muted)",
        nav: "var(--nav)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
      boxShadow: {
        manga: "7px 7px 0 var(--ink)",
        "manga-lg": "12px 12px 0 var(--ink)",
      },
    },
  },
  plugins: [],
};
export default config;
