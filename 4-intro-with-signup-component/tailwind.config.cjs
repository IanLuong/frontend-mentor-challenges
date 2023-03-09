/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        //Primary
        red: 'hsl(0, 100%, 74%) ',
        green: 'hsl(154, 59%, 51%)',

        //Accent
        blue: 'hsl(248, 32%, 49%)',

        //Neutral
        darkBlue: 'hsl(249, 10%, 26%)',
        grayBlue: 'hsl(246, 25%, 77%)',
      },
    },
  },
  plugins: [],
}
