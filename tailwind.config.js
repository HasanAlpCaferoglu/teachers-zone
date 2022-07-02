/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        Anton: ["Anton", "sans-serif"]
      },
      scale: {
        '200': '2.0',
        '250': '2.5',
        '300': '3.0',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    
  ],
}
