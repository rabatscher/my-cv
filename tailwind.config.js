/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgPic:
          "url('https://cdn.pixabay.com/photo/2021/05/29/18/59/petra-6294051_960_720.jpg')",
      },
      fontFamily: {
        shadows: "Shadows Into Light",
      },
    },
  },
  plugins: [],
};
