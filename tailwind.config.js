/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
        'card-bg': 'hsl(216, 50%, 16%)',
        'main-bg': 'hsl(217, 54%, 11%)',
        'line': 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        outfit: 'Outfit'
      },
      boxShadow: {
        'card': '0px 25px 50px 0px rgba(0, 0, 0, 0.10);',
      }
    },
  },
  plugins: [],
}