/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      screens : {
        'mobile': '400px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
