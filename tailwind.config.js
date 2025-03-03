/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { smd: "400px" },

      colors: {
        // primary: "#041e2b",
        // secondary: "#042842",
        primary: "#042842",
        secondary: "#041e2b",
        gold: "#bbaa96",
        dark: "#000000",
        silver: "#bbbbbc",
        light: "#ffffff",
      },
      // fontFamily: {
      //   merriweather: ["Merriweather", "serif"], // Add Merriweather as a custom font
      //   serif: ["Merriweather", "serif"], // Add Merriweather as a custom font
      // },
    },
  },
  plugins: [],

  // plugins: [require("daisyui")],
};
