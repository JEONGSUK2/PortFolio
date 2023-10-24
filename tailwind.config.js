/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,css}"],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      }
    }
  }
}