/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['"Cabin"', 'sans-serif'],
      },
      screens: {
        'ls': '1824px',
        'pc': '1536px',
        'tablet': '601px',
        // 'mobile': '360px',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
}

