/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
        nunitoSans: "'Nunito Sans', sans-serif",
        bebasNeue: "'Bebas Neue', cursive",
      },
    },
  },
  plugins: [],
}
