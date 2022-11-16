/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: '#230A43',
        sec: '#83603F',
        ter: '#5470C7',
        hov: '#4B64B3'
      },
      fontFamily: {
        body: ["Open Sans"],
        mont: ["Montserrat"],
        titi: ["Titillium"],
        lond: ["Londrina Outline"]
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1800px"
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}