/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      ink: {
        lighter: "#72777A",
        light: "#6C7072",
        base: "#404446",
        dark: "#303437",
        darker: "#202325",
        darkest: "#090A0A",
      },
      sky: {
        lightest: "#F7F9FA",
        lighter: "#F2F4F5",
        light: "#E3E5E5",
        base: "#CDCFD0",
        dark: "#979C9E",
      },
      primary: {
        lightest: "#E7E7FF",
        lighter: "#C6C4FF",
        light: "#9990FF",
        base: "#6B4EFF",
        dark: "#5538EE",
      },
    },
    fontSize: {
      title1: "48",
      title2: "36",
      title3: "24",
      large: "18",
      regular: "16",
      small: "14",
      tiny: "12",
    },
    extend: {},
  },
  plugins: [],
};
