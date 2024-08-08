/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      greyQo: ['"Grey Qo"', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },},
  },
  plugins: [require('daisyui'),],
}

