// tailwind.config.js

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'animate-float',
        'animate-float-apple',
        'animate-float-carrot',
        'animate-float-broccoli',
        'animate-float-grapes'
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'float': 'float 30s infinite ease-in-out',
        'float-apple': 'float 15s infinite ease-in-out 1s, bounce 2s infinite',
        'float-carrot': 'float 18s infinite ease-in-out 2s, bounce 2.5s infinite',
        'float-broccoli': 'float 22s infinite ease-in-out 3s, bounce 3s infinite',
        'float-grapes': 'float 25s infinite ease-in-out 4s, bounce 3.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(calc(100vw - 100px), 25vh)' },
          '50%': { transform: 'translate(calc(100vw - 100px), calc(100vh - 100px))' },
          '75%': { transform: 'translate(0, calc(100vh - 100px))' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
