/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-color": "#8b90a5",
        "blue-color": "#0aa2f4",
        "dark-color": "#121f42",
        "brown-50": "#f4ede9",
        "brown-100": "#eee4de",
        "brown-200": "#dcc8ba",
        "brown-300": "#8d4e20",
        "brown-400": "#7f461d",
        "brown-500": "#713e1a",
        "brown-600": "#6a3b18",
        "brown-700": "#552f13",
        "brown-800": "#3f230e",
        "brown-900": "#311b0b",
      },
      backgroundImage: {
        "hero-background": "url('../src/assets/images/hero-bg-2.jpg')",
      },
    },
    fontFamily: {
      fredoka: ["Fredoka, sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "9rem",
      },
    },
  },
  plugins: [],
};
