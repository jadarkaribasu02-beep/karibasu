/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          darker: '#020617',
          accent: '#0ea5e9',
          cyan: '#22d3ee',
        }
      }
    },
  },
  plugins: [],
}
