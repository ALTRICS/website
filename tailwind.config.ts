import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e5e7eb",
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#f9fafb"
        },
        accent: {
          DEFAULT: "#22d3ee",
          foreground: "#020617"
        },
        muted: "#020617"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(94, 234, 212, 0.25), transparent 55%), radial-gradient(circle at top right, rgba(129, 140, 248, 0.3), transparent 55%), radial-gradient(circle at bottom, rgba(59, 130, 246, 0.35), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;

