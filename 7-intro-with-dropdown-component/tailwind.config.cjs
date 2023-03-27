/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        almostWhite: '#fafafaff',
        mediumGray: '#696969ff',
        almostBlack: '#141414ff',
      },
    },
  },
  plugins: [],
}
