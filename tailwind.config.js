/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        'kbo-light-blue': '#00AEEf',
        'kbo-red': '#ed1c24',
      },
    },
  },
  plugins: [],
};
