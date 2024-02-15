/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#F4F4F4',
        second: '#6DECB9',
        third: '#11999E',
        fourth: '#EAD5BC',
        fifth: '#3C3C3C',
        sixth: '#999999', // Add the darker gray color here
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
      }
    },
  },
  plugins: [],
}