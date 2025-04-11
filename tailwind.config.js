/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Upright"', "serif"],
      },
      colors: {
        primary: "#d4af37", // Yellow-gold color
        secondary: "#c99a1d", // Darker yellow for hover
        txt: "#FACC15", // White text
        gray: "#ccc", // Gray text
        background: "#000", // Black background
      },
      fontFamily: {
        cormorant: ["Cormorant Upright", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
