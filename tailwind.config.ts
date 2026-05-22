import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        tv4k: "2560px",
        totem: "768px",
      },
      colors: {
        background: {
          DEFAULT: "#050608",
          soft: "#0B0D10",
          elevated: "#11141A",
        },
        accent: {
          DEFAULT: "#39FF14",
          hover: "#58FF4A",
          muted: "#1B3F1F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "neon-accent": "0 0 10px rgba(57,255,20,0.9), 0 0 40px rgba(57,255,20,0.5)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top left, rgba(57,255,20,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(57,255,20,0.12), transparent 60%)",
      },
      borderRadius: {
        pill: "999px",
      },
      fontSize: {
        "display-hero": ["clamp(2.6rem, 4vw + 1rem, 4.5rem)", { lineHeight: "1.05" }],
        "display-sub": ["clamp(1.05rem, 1.2vw + 0.8rem, 1.4rem)", { lineHeight: "1.4" }],
        "body-fluid": ["clamp(0.95rem, 0.35vw + 0.9rem, 1.05rem)", { lineHeight: "1.6" }],
      },
      transitionTimingFunction: {
        "soft-spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
