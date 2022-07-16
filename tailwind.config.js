/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '650px',
      ml: '850px',
      lg: '1150px',
      xl: '2750px',
    },
    extend: {
      fontFamily: {
        base: ["DM Sans", "sans-serif"],
      },
      colors: {
        'primary': '#eff8ed',
        'secondary': '#31ac48',
        'black': '#030303',
        'lightGray': '#e4e4e4',
        'gray': '#6b7688',
        'brown': '#384a36',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}
