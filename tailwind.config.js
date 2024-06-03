/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'title': '"Titillium Web", sans-serif',
        'regular': '"Lato", sans-serif',
      },
      colors: {
        'offWhite': '#f7f6f1;',
        'customBlack': '#191919',
      },
    },
  },
  plugins: [],
};
