/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { transform: "scale(0, 0)", opacity: 0 },
          "100%": { transform: "scale(1,1)", opacity: 1 },
        },
        move: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(45px)" },
        },
      },
      animation: {
        grow: "grow 500ms linear 0s infinite",
        growReverse: "grow 500ms linear 0s infinite reverse",
        move: "move 500ms linear 0s infinite",
      },
    },
  },
  plugins: [],
};
