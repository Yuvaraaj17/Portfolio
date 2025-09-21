/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        ubuntu_mono: ["Ubuntu Mono", "monospace"],
        poppins: ["Poppins", "sans"],
      },

      translate: {
        "z-100": "500px",
        "z--100": "-100px",
      },
    },
    keyframes: {
      slideIn: {
        "0%": {
          transform: "translateY(5%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0%)",
          opacity: 100,
        },
      },
      fadeInOut: {
        "0%": { opacity: "0", transform: "translateY(5%)" },
        "10%": { opacity: "1", transform: "translateY(0%)" },
        "30%": { opacity: "1" },
        "40%": { opacity: "0" },
        "100%": { opacity: "0" },
      },
      glow: {
        '0%, 100%': { boxShadow: '0 0 10px rgba(139,0,255,0.7), 0 0 20px rgba(139,0,255,0.5)' },
        '50%': { boxShadow: '0 0 20px rgba(139,0,255,0.9), 0 0 30px rgba(139,0,255,0.7)' },
      },
    },
    animation: {
      "slide-in": "slideIn 2s ease-in-out forwards",
      "fade-in-out": "fadeInOut 8s ease-in-out infinite",
      "glow": 'glow 1.5s infinite ease-in-out',
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    plugin(function ({ addVariant }) {
      addVariant("autofill", "&:-webkit-autofill");
      addVariant("autofill-focus", "&:-webkit-autofill:focus");
    }),
  ],
};