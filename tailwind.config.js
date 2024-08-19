/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu:["ubuntu"]
      },
      colors:{
        cPrimary: "black",
        cSecondary: "#FAC1D9",
        tPrimary: "white",
        bgPrimary: "#292C2D",
        cardBg : "#3D4142"
      }
    },
  },
  plugins: [],
}