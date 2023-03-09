/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      screens : {
        'mobile': '500px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
