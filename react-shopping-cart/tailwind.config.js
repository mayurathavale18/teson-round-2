/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scaleHover : 'scaleHover 1s ease-in-out infinite'
      },
      keyframes: {
        scaleHover : {
          '0% 100%': { transform: 'scale(1.05)'},
          '50%' : { transform: 'scale(1)'}
        }
      }
    },
  },
  plugins: [],
}

