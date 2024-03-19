import milkColors from './src/utils/palletes/milkPallete.js'
import primeColors from './src/utils/palletes/primeVuePallete.js'

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: 'class',
  content: [
    './node_modules/flowbite/**/*.js',
    "./public/index.html",
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/presets/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...milkColors,
        ...primeColors
      }
    },
  },
  plugins: [],
}; 