/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat"],
        gratelos: ["Gratelos", "sans-serif"],
        fonseca: ["Fonseca Rounded", "sans-serif"],
        bugaki: ["Bugaki", "sans-serif"],
        gemosh: ["Gemosh Headline", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};