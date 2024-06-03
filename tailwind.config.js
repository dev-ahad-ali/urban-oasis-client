// /** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
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
});
