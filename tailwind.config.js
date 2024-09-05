/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        pureblack: "#111315",
        lightblack: "#1B1D1F",
        lightGrey: "#6F757C",
        lightGreen: "#BEE3CC",
        whitish: "#FEF7EE",
        GoldenCrest: "#F6C768",
        softred: "#ED735D",
      },
    },
  },
  plugins: [],
};
