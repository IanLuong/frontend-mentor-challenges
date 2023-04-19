/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accentBackground: '#1C2431',
        mainBackground: '#181F2A',
        footerBackground: '#0B1523',
        testimonialsBackground: '#202A3C',

        gradientCyan: '#65E2D9',
        gradientBlue: '#339ECC',
        errorRed: '#FF4242',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
