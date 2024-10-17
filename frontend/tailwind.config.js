/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-smooth': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'pulse-smooth': 'pulse-smooth 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}