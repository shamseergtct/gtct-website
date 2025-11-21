/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        gtct: {
          blue: "#0B539E",
          lime: "#99AC3E",
          dark: "#0A0F1F"
        }
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
