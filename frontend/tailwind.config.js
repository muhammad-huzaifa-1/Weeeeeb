/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        popup:"popup 0.5s ease-in-out forwards"
      },
      keyframes:{
        popup:{
          "0%":{
            transform:"translateX(200px)",
            opacity:0
          },
          "60%":{
            transform:"translateX(-40px)",
            opacity:1
          },
          "100%":{
            transform:"translateX(0px)",
            opacity:1
          }
        }
      }
    },
  },
  plugins: [],
}