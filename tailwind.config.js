/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Lexend Deca",
        secondary: "Caveat",
      },
      boxShadow: {
        input: "6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5",
      },
      colors: {
        primary: "#352F44",
        secondary: "#5C5470",
        text: "#B9B4C7",
        highlight: "#FAF0E6",
        inputBg: "#e8e8e8",
        formBg: "#e8e8e8",
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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '792px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
