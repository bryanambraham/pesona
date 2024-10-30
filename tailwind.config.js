/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#FFFFFF",
      secondary: "#EB1F28",
      tertiary: "#000000",
    },
    screens: {
      xs: "450px",
    },
  },
  plugins: [],
}