/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryOrange: 'hsl(26, 100%, 55%)',
        primaryPaleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        backgroundBlack: 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        kumbhSans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
