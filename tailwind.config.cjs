/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0B2447",
        secondery: "#19376D",
        "brand-light": "#A5D7E8",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        // "hero-pattern": "url('/hero.png')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
