import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafbfc",
        foreground: "#0f172a",
        surface: "#ffffff",
        border: {
          DEFAULT: "#e2e8f0",
          subtle: "#f1f5f9"
        },
        primary: {
          DEFAULT: "#4f46e5",
          light: "#6366f1",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#0ea5e9",
          muted: "#e0f2fe"
        },
        muted: {
          DEFAULT: "#64748b",
          foreground: "#475569"
        }
      },
      fontFamily: {
        sans: [
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(15 23 42 / 0.04), 0 8px 24px -4px rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 4px 12px 0 rgb(15 23 42 / 0.06), 0 16px 40px -8px rgb(79 70 229 / 0.12)",
        soft: "0 2px 20px -2px rgb(15 23 42 / 0.08)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99, 102, 241, 0.08), transparent), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(14, 165, 233, 0.06), transparent), radial-gradient(ellipse 50% 40% at 0% 50%, rgba(99, 102, 241, 0.05), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
