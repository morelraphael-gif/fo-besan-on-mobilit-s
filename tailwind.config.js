/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./LandingPage.jsx",
  ],
  theme: {
    extend: {
      // vous pouvez définir vos propres couleurs FO ici
      colors: {
        foRed: "#e2001a",
        foBlue: "#14255f",
        foBlueLight: "#135e8d",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // plugin pour styliser les formulaires
  ],
};
