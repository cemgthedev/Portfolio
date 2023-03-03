/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      screens : {
        'mobile': '300px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
