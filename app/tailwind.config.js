/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': '28px',
        'xl': '24px',
        'lg': '20px',
        'md': '16px',
        'sm': '12px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans']
      },
      keyframes: {
        top: {
          '0%': {
            transform: 'translateY(50px)',
            opacity: 0
          }
        },
        rigth: {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0
          },
        },
        bottom: {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: 0
          }
        },
        left: {
          '0%': {
            transform: 'translateX(100px)',
            opacity: 0
          }
        }
      },
      animation: {
        top: 'top 450ms ease-in-out',
        rigth: 'rigth 750ms ease-in-out',
        bottom: 'bottom 450ms ease-in-out',
        left: 'left 750ms ease-in-out'
      }
    }
  },
  plugins: [
    require("daisyui"),
  ],
}

