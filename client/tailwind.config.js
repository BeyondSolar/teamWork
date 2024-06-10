/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'saira' : ['Saira Extra Condensed', 'Roboto']
      },
      fontSize: {
        'header' : '1.4rem',
        'dynamic' : 'calc(1.5rem + 5vw)',
        'dynamic-100' : '1.5rem',
        'superheading' : '3.5rem',
        'heading' : '2rem',
        'subheading' : '1.5rem',
        'content' : '1rem',
      },
      colors: {
        'theme' : '#040046',
        'theme-100' : '#5f5bad',
        'custom-gray': '#e5e7eb',
        'light-gray' : '#6c757d',
      },
    },
  },
  plugins: [],
}
