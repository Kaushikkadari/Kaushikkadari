import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070A",
        navy: "#080D16",
        blueink: "#0B1220",
        cyan: {
          DEFAULT: "#00E5FF",
          soft: "#38BDF8",
        },
        indigo: {
          DEFAULT: "#6366F1",
        },
        fog: "#B7C3D6",
        mist: "#7C8AA3",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,7,10,0.9) 85%), repeating-linear-gradient(0deg, rgba(56,189,248,0.06) 0, rgba(56,189,248,0.06) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(56,189,248,0.06) 0, rgba(56,189,248,0.06) 1px, transparent 1px, transparent 48px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,229,255,0.15)",
        "glow-lg": "0 0 80px rgba(0,229,255,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
