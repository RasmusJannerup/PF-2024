/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#264653',
        second: '#649D99',
        third: '#e9c46a',
        fourth: '#EAD5BC',
        fifth: '#e76f51',
      }
    },
  },
  plugins: [],
}