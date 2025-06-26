/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
<<<<<<< feature/layout
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        white: '#fff',
        gray50: '#f7f8f9',
        gray100: '#e8ebed',
        gray200: '#c9cdd2',
        gray400: '#9ea4aa',
        gray500: '#72797f',
        gray600: '#454c53',
        gray800: '#26282b',
        gray900: '#1b1d1f',
        'kbo-blue': '#002561',
        'kbo-lightblue': '#00AEEf',
        'kbo-red': '#ed1c24',
=======
      colors: {
        'kbo-blue': '#002561', // R0 G37 B97
        'kbo-light-blue': '#00AEEF', // R0 G174 B239
        'kbo-red': '#ED1C24', // R237 G28 B36
>>>>>>> dev
      },
    },
  },
  plugins: [],
};
