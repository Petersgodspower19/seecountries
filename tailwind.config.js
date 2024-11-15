/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      DarkBlue : "hsl(209, 23%, 22%)",
    LightBlue :" hsl(209, 23%, 25%)",
    VeryDarkBlue : "hsl(200, 15%, 8%)",
   DarkGray : "hsl(0, 0%, 52%)",
 VeryLightGray : "hsl(0, 0%, 98%)",
  White : "hsl(0, 0%, 100%)",
  secondaryWhite: "hsl(0, 0%, 98%)"
    },
    extend: {},
  },
  plugins: [],
}