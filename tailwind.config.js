/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans']
      },
      colors: {
        dBlue: '#1A73E8',
        bgBlue: '#1A73E81C'
      }
    },
  },
  plugins: [],
}