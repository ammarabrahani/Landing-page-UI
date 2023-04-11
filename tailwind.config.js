/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Poppins"', "sans-serif"],
    },
    colors: {
      secondaryColor: "#C576D1",
      white: "#fff",
      links: "#bdc3c7",
      headColor: "#0B0D39",
    },
    extend: {},
  },
  plugins: [],
};
