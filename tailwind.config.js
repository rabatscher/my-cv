/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: "#32312D",
      light: "#CFCEC9",
      primary: "#B63E96",
      primaryDark: "#58E6D9",
      yellow: "#DDC11D",
    },
  },
  plugins: [],
};
