/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/src/assets/dark-hero-1.jpg')"
      },

      animation:{
        slip:"0.5s linear 1s forwards"

      },

      keyframes: {
        slip: {
          '0%': {
            transform: "translateY(50)",
            opacity: '0',
            filter: 'blur(1)'
          },
          '100%':{
            transform: "translateY(0)",
            opacity: "1",
            filter: "blur(0)"


          }
        }
      }
    },
  },
  plugins: [],
}

