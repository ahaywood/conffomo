/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        casper: '#a8b8b9',
        gabbleGreen: '#2c4041',
        punch: {
          DEFAULT: '#d94830',
          darker: '#b53d28',
        },
        veryLightBlue: {
          DEFAULT: '#5465ff',
          darker: '#4351cc',
        },
        destructive: '#f14337',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Camera Obscura', 'serif'],
      },
    },
  },
  safelist: [
    'tooltip--top',
    'tooltip--bottom',
    'tooltip--left',
    'tooltip--right',
    'popup-menu--topCenter',
    'popup-menu--topLeft',
    'popup-menu--topRight',
    'popup-menu--bottomCenter',
    'popup-menu--bottomLeft',
    'popup-menu--bottomRight',
  ],
  plugins: [],
}