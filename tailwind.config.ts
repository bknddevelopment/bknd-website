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
      // SINGLEGRAIN COLOR SYSTEM
      // ============================================
      colors: {
        // Brand Orange (Primary CTA)
        orange: {
          DEFAULT: "#F27038",
          hover: "#EA580C",
          accent: "#FF6B35",
          glow: "rgba(242, 112, 56, 0.4)",
        },
        // Amber/Gold Accents
        amber: {
          DEFAULT: "#EFB438",
          "gradient-start": "#F59E0B",
          "gradient-mid": "#F97316",
          "gradient-end": "#EA580C",
        },
        // Dark Backgrounds
        dark: {
          DEFAULT: "#2F333B",
          primary: "#2F333B",
          secondary: "#2F343A",
          "gradient-start": "#2F343A",
          "gradient-end": "#232020",
          footer: "#28282C",
          input: "#313033",
          card: "#34394D",
        },
        // Light/Neutral Backgrounds
        bg: {
          page: "#EEEEEE",
          white: "#FFFFFF",
          "off-white": "#F8F8F8",
          "light-gray": "#F1F1F1",
        },
        // Text Colors
        text: {
          dark: "#2F333B",
          gray: "#6B7280",
          muted: "#6B7280",
          light: "#E9EFF4",
          white: "#FFFFFF",
          "white-80": "rgba(255, 255, 255, 0.8)",
          "white-50": "rgba(255, 255, 255, 0.5)",
        },
        // Border Colors
        border: {
          light: "#DDDDDD",
          dark: "rgba(255, 255, 255, 0.07)",
          medium: "rgba(0, 0, 0, 0.5)",
        },
        // Accent Colors
        purple: {
          accent: "#BC68FF",
        },
        blue: {
          primary: "#0048FF",
          link: "#2175A3",
        },
        yellow: {
          highlight: "#FFF300",
        },
      },

      // ============================================
      // TYPOGRAPHY
      // ============================================
      fontFamily: {
        // Using Inter as Sofia Pro substitute (similar proportions)
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        // Alternative options for Sofia Pro-like feel
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Heading sizes from SingleGrain
        "h1": ["46px", { lineHeight: "65px", fontWeight: "700" }],
        "h2": ["48px", { lineHeight: "52.8px", fontWeight: "300" }],
        "h3": ["29px", { lineHeight: "51px", fontWeight: "300" }],
        // Body text sizes
        "body": ["14px", { lineHeight: "15.4px" }],
        "body-lg": ["29px", { lineHeight: "51px", fontWeight: "300" }],
        "body-md": ["15px", { lineHeight: "28px" }],
        "body-sm": ["14px", { lineHeight: "14px" }],
        // Navigation
        "nav": ["16px", { lineHeight: "1.5" }],
        "nav-dropdown": ["15px", { lineHeight: "1.5", fontWeight: "300" }],
        // Labels & Supporting
        "label": ["22px", { lineHeight: "normal", fontWeight: "300" }],
        "supporting": ["18px", { lineHeight: "normal", fontWeight: "300" }],
        "tag": ["10px", { lineHeight: "1.2" }],
      },

      // ============================================
      // BORDER RADIUS - CRITICAL: Buttons are 2px, not rounded
      // ============================================
      borderRadius: {
        "button": "2px",
        "card": "4px",
        "input": "4px",
        "secondary": "5px",
        "pill": "20px",
        "tag": "30px",
      },

      // ============================================
      // SPACING & CONTAINER
      // ============================================
      maxWidth: {
        "container": "1148px",
        "wrapper": "1460px",
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
        "card": "26px",
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
        "container": "80px",
        "container-lg": "95px",
      },

      // ============================================
      // SHADOWS
      // ============================================
      boxShadow: {
        "card": "rgba(0, 0, 0, 0.1) 0px 10px 15px 0px",
        "crisp": "6px 6px 0px rgb(0, 0, 0)",
        "deep": "12px 12px 50px rgba(0, 0, 0, 0.4)",
        "natural": "6px 6px 9px rgba(0, 0, 0, 0.2)",
        "outlined": "6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0)",
        "sharp": "6px 6px 0px rgba(0, 0, 0, 0.2)",
        "orange-glow": "0 4px 15px rgba(242, 112, 56, 0.3)",
        "orange-glow-lg": "0 6px 25px rgba(242, 112, 56, 0.5)",
      },

      // ============================================
      // BACKGROUND GRADIENTS
      // ============================================
      backgroundImage: {
        // Hero/Dark section gradient (257.07deg angle)
        "gradient-dark": "linear-gradient(257.07deg, #2F343A 0%, #232020 100%)",
        // Orange/Amber CTA gradient
        "gradient-orange": "linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EA580C 100%)",
        // Soft peach gradient
        "gradient-peach": "linear-gradient(135deg, #F8D7CB 0%, #F4E8E0 50%, #F8D7CB 100%)",
        // Text gradients
        "gradient-text-orange": "linear-gradient(to right, #F27038, #EFB438)",
        "gradient-text-white": "linear-gradient(to right, #FFFFFF, #E9EFF4)",
      },

      // ============================================
      // TRANSITIONS
      // ============================================
      transitionDuration: {
        "fast": "200ms",
        "normal": "300ms",
        "slow": "750ms",
      },
      transitionTimingFunction: {
        "ease-out-slow": "cubic-bezier(0, 0, 0.2, 1)",
      },

      // ============================================
      // ANIMATIONS
      // ============================================
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(242, 112, 56, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(242, 112, 56, 0.4), 0 0 60px rgba(242, 112, 56, 0.4)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        marquee: "marquee 30s linear infinite",
      },

      // ============================================
      // HEIGHT (for inputs)
      // ============================================
      height: {
        "input": "55px",
        "input-dark": "54px",
      },
    },
  },
  plugins: [],
};

export default config;
