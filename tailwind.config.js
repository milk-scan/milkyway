/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "./public/index.html",
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...colors,
    },
  },
  plugins: [],
};
