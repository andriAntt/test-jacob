/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
 content: ["./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  letterSpacing: {
   thigh: "0.2px",
   normal: "0",
  },
  screens: {
   sm: "576px",
   md: "768px",
   lg: "992px",
   xl: "1200px",
   "2xl": "1400px",
  },
  extend: {
   boxShadow: {
    header: "0px 4px 20px rgba(0, 0, 0, 0.15)",
   },
   fontSize: {
    sm: ["14px", "normal"],
    base: ["16px", "normal"],
    lg: ["18px", "normal"],
   },
   colors: {
    white: "#FFF",
    dark: "#1E1E1E",
    black: "#000",
    modalBackground: "#D9D9D9",
    gray: "#9BA0A4",
    activeDark: "#2F3235",
   },
  },
 },
};
