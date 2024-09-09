/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      colors: {
        submarine: '#bfc9c9',
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
        battleshipGray: '#828282',
      },
      margin: {
        page: '68px',
      },
      padding: {
        page: '68px',
      },
      zIndex: {
        content: 53,
        feature: 52,
        logo: 51,
        brackets: 50,
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Camera Obscura', 'serif'],
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
  plugins: [require('@tailwindcss/container-queries')],
}
