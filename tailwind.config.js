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
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1800px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}