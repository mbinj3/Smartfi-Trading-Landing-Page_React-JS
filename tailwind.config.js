/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monster: ['Montserrat', "sans-serif"],
        roboto: ['Roboto', "sans-serif"]
      },
    },
  },
  plugins: [],
}
