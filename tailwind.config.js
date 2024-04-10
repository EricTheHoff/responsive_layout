/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arvo': ['"Arvo"', 'sans-serif'],
        'pacifico': ['"Pacifico"', 'sans-serif'],
      },
      fontSize: {
        '2xs': '10px',
      },
      screens: {
        '3xl': '1824px',
      },
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        'puce-100': 'rgba(187, 126, 140, 50%)',
        'light-brown-100': '#DDB677',
        'chocolate-100': '#561D25',
        'chocolate-50': 'rgba(86, 29, 37, 60%)',
        'light-pink-100': '#DDBCAC',
      }
    },
  },
  plugins: [],
}

