/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        button: '2px 2px 4px rgba(255, 165, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
