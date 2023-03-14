/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
