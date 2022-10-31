/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F8F8F8',
        pri: '#230A43',
        sec: '#83603F',
        ter: '#5470C7'
      },
      fontFamily: {
        body: ["Open Sans"],
        mont: ["Montserrat"],
        titi: ["Titillium"],
        lond: ["Londrina Outline"]
      },
    },
    screens: {
      xs: "750px",
      sm: "850px",
      md: "1060px",
      lg: "1250px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}