/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kbo-blue': '#002561', // R0 G37 B97
        'kbo-light-blue': '#00AEEF', // R0 G174 B239
        'kbo-red': '#ED1C24', // R237 G28 B36
      },
    },
  },
  plugins: [],
};
