/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        baiJamjuree: ['Bai Jamjuree', 'sans-serif'],
      },
      backgroundImage: {
        mobile: "url('/images/bg-header-mobile.png')",
        desktop: "url('/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
}
