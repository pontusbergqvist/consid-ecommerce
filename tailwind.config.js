/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        f3: "#f3f3f3",
      },
      screens: {
        tablet: "640px",
      },
    },
  },
  plugins: [],
};
