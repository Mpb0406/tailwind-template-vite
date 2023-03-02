/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#4951eb",
      secondary: "#eae618",
      light: "#f5f5f5",
      mid: "#b7b7b7",
      dark: "#303030",
      success: "#009842",
      warning: "#ece400",
      danger: "#c22c2c",
    },
    extend: {},
  },
  plugins: [],
};
