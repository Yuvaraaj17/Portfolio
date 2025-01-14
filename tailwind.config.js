/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
    },
    animation: {
      typing: "typing 3s steps(50) infinite alternate, blink .7s infinite",
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
