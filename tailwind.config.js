/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./public/index.html",
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
