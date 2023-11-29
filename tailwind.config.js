/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'Mobile': {max : '820px'},
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': {min : '1440px'},
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}