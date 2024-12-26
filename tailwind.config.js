/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'quicksand': ['Quicksand', 'serif'],
        'quicksandBold': ['QuicksandBold', 'serif'],
        'quicksandSemibold': ['QuicksandSemibold', 'serif'],
        'quicksandMedium': ['QuicksandMedium', 'serif'],
        'quicksandLight': ['QuicksandLight', 'serif'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-clip': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      });
    },
  ],
}