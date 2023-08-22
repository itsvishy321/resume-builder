/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Lexend Deca",
        secondary: "Caveat",
      },
      colors: {
        primary: "#352F44",
        secondary: "#5C5470",
        text: "#B9B4C7",
        highlight: "#FAF0E6",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        variants: {
          animation: ["motion-safe"],
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 ,  },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
