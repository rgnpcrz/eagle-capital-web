/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#041e2b",
        secondary: "#042842",
        gold: "#bbaa96",
        dark: "#000000",
        silver: "#bbbbbc",
        light: "#ffffff",
      },
    },
  },
  plugins: [],

  // plugins: [require("daisyui")],
};
