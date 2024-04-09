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
      }
    },
  },
  plugins: [],
}

