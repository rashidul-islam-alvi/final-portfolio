/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "1px 4px 9px 0px rgb(247,243,243) -webkit-box-shadow: 1px 4px 9px 0px rgba(62,66,64,0.33) -moz-box-shadow: 1px 4px 9px 0px rgba(62,66,64,0.33)",
      },
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        secondary: "#e7d184",
      },
    },
  },
  plugins: [],
};
