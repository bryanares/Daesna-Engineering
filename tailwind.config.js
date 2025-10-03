/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3B82F6",   // Light blue (sky)
          DEFAULT: "#1E3A8A", // Main navy blue
          dark: "#172554",    // Deep navy
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
