/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-color': 'fadeInColor 3s ease-in-out', // New custom animation
      },
      keyframes: {
        fadeInColor: {
          '0%': { opacity: 0, color: 'rgb(255, 255, 255)' }, // White color
          '100%': { opacity: 1, color: 'rgb(255, 215, 0)' }, // Yellow color (change this as needed)
        },
      },
    },
  },
  plugins: [],
}
