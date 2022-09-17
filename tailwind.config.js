/** @type {import('tailwindcss').Config} */

const theme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['"Comfortaa"', ...theme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}