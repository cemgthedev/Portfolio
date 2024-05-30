import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '3xl': '32px',
        '2xl': '28px',
        xl: '24px',
        lg: '20px',
        md: '16px',
        sm: '12px',
      },
    },
    boxShadow: {
      default: '0px 5px 15px -5px #000',
    },
    keyframes: {
      bottom: {
        '0%': {
          transform: 'translateY(-96px)',
          opacity: '0',
        },
      },
      top: {
        '0%': { transform: 'translateY(96px)', opacity: '0' },
        '100%': { transform: 'translateY(0px)', opacity: '1' },
      },
      left: {
        '0%': { transform: 'translateX(96px)', opacity: '0' },
        '100%': { transform: 'translateX(0px)', opacity: '1' },
      },
      right: {
        '0%': { transform: 'translateX(-96px)', opacity: '0' },
        '100%': { transform: 'translateX(0px)', opacity: '1' },
      },
      surgir: {
        '0%': { transform: 'scale(0)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      pulse: {
        '0%': { transform: 'scale(0.8)', opacity: '0.6' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      rotation: {
        to: {
          transform: 'rotateZ(360deg)',
        },
      },
    },
    animation: {
      bottom: 'bottom 200ms linear',
      top: 'top 250ms linear forwards',
      left: 'left 750ms linear 1750ms forwards',
      right: 'right 750ms linear 1750ms forwards',
      surgir: 'surgir 300ms forwards 200ms',
      surgirtwo: 'surgir 300ms forwards 500ms',
      surgirthree: 'surgir 300ms forwards 800ms',
      surgirfour: 'surgir 300ms forwards 1200ms',
      rotation: 'rotation 5s linear infinite',
      pulse: 'pulse 750ms linear alternate infinite',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
