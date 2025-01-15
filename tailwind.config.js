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
    },
    animation: {
      "slide-in": "slideIn 2s ease-in-out forwards",
      "fade-in-out": "fadeInOut 8s ease-in-out infinite",
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
