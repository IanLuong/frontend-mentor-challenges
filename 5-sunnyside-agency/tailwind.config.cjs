/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        customYellow: 'hsl(51, 100%, 49%)',
        customCyan: {
          700: 'hsl(168, 34%, 41%)',
          500: 'hsl(167, 40%, 24%)',
          300: '#90d4c5',
        },
        customBlue: {
          300: 'hsl(212, 27%, 19%)',
          400: 'hsl(210, 4%, 67%)',
          500: 'hsl(198, 62%, 26%)',
          600: 'hsl(232, 10%, 55%)',
          700: 'hsl(213, 9%, 39%)',
        },
      },
    },
  },
  plugins: [],
}
