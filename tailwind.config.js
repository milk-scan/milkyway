/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: 'class',
  content: [
    './node_modules/flowbite/**/*.js',
    "./public/index.html",
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* pra colorir esse projeto igual você colore minha vida. Te amo! */
        cranberry: {
          50: "#fbf4f8",
          100: "#f9eaf3",
          200: "#f4d6e7",
          300: "#ecb5d2",
          400: "#df87b4",
          500: "#d26298",
          600: "#be4479",
          700: "#a43260",
          800: "#882c50",
          900: "#722945",
          950: "#441325"
        },
        tropical: {
          50: "#fdfce9",
          100: "#fcf7c5",
          200: "#fbeb8d",
          300: "#f8d94c",
          400: "#f4c31b",
          500: "#e4ab0e",
          600: "#c58409",
          700: "#9d5e0b",
          800: "#824a11",
          900: "#6e3d15",
          950: "#401f08"
        },
        macha: {
          50: "#f2f9ec",
          100: "#e2f1d6",
          200: "#c7e4b2",
          300: "#a3d284",
          400: "#82be5d",
          500: "#64a33f",
          600: "#4c812f",
          700: "#3c6328",
          800: "#335024",
          900: "#2d4522",
          950: "#15250e"
        },
        silver: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d6dae1",
          300: "#b2bac7",
          400: "#8794a9",
          500: "#647288",
          600: "#546075",
          700: "#444e60",
          800: "#3b4251",
          900: "#353a45",
          950: "#23272e"
        },
        blueberry: {
          50: "#f4f6fb",
          100: "#e8ecf6",
          200: "#cbd8ec",
          300: "#9db7dc",
          400: "#6992c7",
          500: "#4674b1",
          600: "#345b95",
          700: "#2b4979",
          800: "#273f65",
          900: "#253755",
          950: "#192438"
        },
        truffle: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#9e9e9e",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636"
        },
        papaya: {
          50: "#fdf6ef",
          100: "#faeada",
          "200": "#f4d2b4",
          "300": "#edb484",
          "400": "#e38244",
          "500": "#df6d30",
          "600": "#d15625",
          "700": "#ad4221",
          "800": "#8a3622",
          "900": "#702e1e",
          "950": "#3c150e"
        }
      }
    },
  },
  plugins: [],
};
