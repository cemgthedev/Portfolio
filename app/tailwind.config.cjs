/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontSize: {
        lg: '20px',
        md: '16px',
        sm: '12px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
