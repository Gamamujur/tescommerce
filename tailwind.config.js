/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mons: ["Montserrat"],
        cinzel: ["Cinzel"],
        slab:['"Josefin Slab"'],
        rale:["Raleway"]

      },
    },
    screens: {
      ss: "300px",
      ss2:"350px",
      ss3:"400px",
      semism:"450px",
      sm: "640px",
      md: "768px",
      semilg:"900px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("daisyui")
  ],
}
