/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  //by adding this extra plugins we can access its css classes to our project directly like its tailwind class in className property,,we dont need to import anything extra in that file in which we use it's css classes like ..scrollbar in index.js
};
