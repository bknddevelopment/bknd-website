import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // APPLE-INSPIRED COLOR SYSTEM
      // ============================================
      colors: {
        // Apple Core Colors
        "apple-white": "#FFFFFF",
        "apple-gray": "#F5F5F7",
        "apple-black": "#1D1D1F",
        "apple-secondary": "#86868B",

        // Accent (Cyan from logo - use sparingly)
        accent: {
          DEFAULT: "#00D4FF",
          hover: "#00B8E0",
          light: "rgba(0, 212, 255, 0.1)",
          glow: "rgba(0, 212, 255, 0.3)",
        },

        // Background Colors
        bg: {
          primary: "#FFFFFF",
          secondary: "#F5F5F7",
          dark: "#1D1D1F",
        },

        // Text Colors
        text: {
          primary: "#1D1D1F",
          secondary: "#86868B",
          light: "#FFFFFF",
          muted: "#86868B",
        },

        // Border Colors
        border: {
          light: "#D2D2D7",
          DEFAULT: "#D2D2D7",
          dark: "rgba(0, 0, 0, 0.1)",
        },
      },

      // ============================================
      // TYPOGRAPHY
      // ============================================
      fontFamily: {
        // Using Inter as Sofia Pro substitute (similar proportions)
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        // Alternative options for Sofia Pro-like feel
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Heading sizes
        h1: ["46px", { lineHeight: "65px", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "52.8px", fontWeight: "300" }],
        h3: ["29px", { lineHeight: "51px", fontWeight: "300" }],
        // Body text sizes
        body: ["14px", { lineHeight: "15.4px" }],
        "body-lg": ["29px", { lineHeight: "51px", fontWeight: "300" }],
        "body-md": ["15px", { lineHeight: "28px" }],
        "body-sm": ["14px", { lineHeight: "14px" }],
        // Navigation
        nav: ["16px", { lineHeight: "1.5" }],
        "nav-dropdown": ["15px", { lineHeight: "1.5", fontWeight: "300" }],
        // Labels & Supporting
        label: ["22px", { lineHeight: "normal", fontWeight: "300" }],
        supporting: ["18px", { lineHeight: "normal", fontWeight: "300" }],
        tag: ["10px", { lineHeight: "1.2" }],
      },

      // ============================================
      // BORDER RADIUS - CRITICAL: Buttons are 2px, not rounded
      // ============================================
      borderRadius: {
        button: "2px",
        card: "4px",
        input: "4px",
        secondary: "5px",
        pill: "20px",
        tag: "30px",
      },

      // ============================================
      // SPACING & CONTAINER
      // ============================================
      maxWidth: {
        container: "1148px",
        wrapper: "1460px",
      },
      spacing: {
        // Section paddings
        "section-sm": "50px",
        "section-md": "80px",
        "section-lg": "120px",
        // Container margins
        "container-margin": "80px",
        "container-margin-lg": "95px",
        // Button padding
        "btn-y": "17px",
        "btn-x": "30px",
        "btn-y-sm": "6px",
        "btn-x-sm": "20px",
        // Input padding
        "input-y": "14px",
        "input-x": "18px",
        // Card padding
        card: "26px",
        "card-lg-y": "50px",
        "card-lg-x": "60px",
      },
      padding: {
        // Section padding presets
        "section-sm": "50px",
        "section-md": "80px",
        "section-lg": "120px",
      },
      margin: {
        container: "80px",
        "container-lg": "95px",
      },

      // ============================================
      // SHADOWS - Apple-style minimal
      // ============================================
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 4px 16px rgba(0, 0, 0, 0.12)",
        subtle: "0 1px 3px rgba(0, 0, 0, 0.06)",
        "accent-glow": "0 4px 15px rgba(0, 212, 255, 0.2)",
        "accent-glow-lg": "0 6px 25px rgba(0, 212, 255, 0.3)",
      },

      // ============================================
      // BACKGROUND - Minimal (no gradients)
      // ============================================
      backgroundImage: {
        none: "none",
      },

      // ============================================
      // TRANSITIONS
      // ============================================
      transitionDuration: {
        fast: "200ms",
        normal: "300ms",
        slow: "750ms",
      },
      transitionTimingFunction: {
        "ease-out-slow": "cubic-bezier(0, 0, 0.2, 1)",
      },

      // ============================================
      // ANIMATIONS - Apple-style subtle
      // ============================================
      keyframes: {
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.98)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
      },

      // ============================================
      // HEIGHT (for inputs)
      // ============================================
      height: {
        input: "55px",
        "input-dark": "54px",
      },
    },
  },
  plugins: [],
};

export default config;
