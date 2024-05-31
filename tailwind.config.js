/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#374c37",
        secondary: "#f6ac1c",
        accent: "#f66037",
        dark: "#1e1e1e",
        background: "#f0e9da",
      },
    },
  },
  plugins: [],
};
