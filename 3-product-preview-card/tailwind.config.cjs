/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        darkerCyan: 'hsl(159, 36%, 18%)',
        cream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrot: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
