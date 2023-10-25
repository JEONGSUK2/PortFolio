/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,css}"],
  theme: {
    extend: {
      blur: {
        xs: '2px',    
      },   
    },
    keyframes: {
      spin: {
        '0%': { transform: 'scale(1) -skew(1) '},
        '25%': { transform: 'scale(1) -skew(0.5) '},
        '50%': { transform: 'scale(1.1)'}, 
        '75%': { transform: 'scale(1.2)'}, 
        '100%': { transform: 'scale(1)'},
      }
    },
    animation: {
      'spin-slow': 'spin 2s infinite ease-in-out'
    },
  }
}
