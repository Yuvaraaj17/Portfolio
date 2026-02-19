/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        ubuntu_mono: ["Ubuntu Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(5%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 10px rgba(139,0,255,0.7), 0 0 20px rgba(139,0,255,0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(139,0,255,0.9), 0 0 30px rgba(139,0,255,0.7)",
          },
        },
        blob: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "translate(0, 0) rotate(0deg)",
          },
          "33%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "translate(10px, -15px) rotate(120deg)",
          },
          "66%": {
            borderRadius: "50% 60% 30% 60% / 30% 40% 70% 60%",
            transform: "translate(-10px, 10px) rotate(240deg)",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "translate(0, 0) rotate(360deg)",
          },
        },
      },
      animation: {
        "slide-in": "slideIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 1.5s infinite ease-in-out",
        blob: "blob 8s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@xpd/tailwind-3dtransforms"),
    plugin(function ({ addUtilities, addVariant }) {
      addVariant("autofill", "&:-webkit-autofill");
      addVariant("autofill-focus", "&:-webkit-autofill:focus");
      addUtilities({
        ".animation-delay-2000": {
          "animation-delay": "2s",
        },
        ".animation-delay-4000": {
          "animation-delay": "4s",
        },
      });
    }),
  ],
};