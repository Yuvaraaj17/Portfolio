/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    
    extend: {
      fontFamily: {
        mono : ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

