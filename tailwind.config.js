/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wave: "url('./wave/blob-scene-haikei.svg')",
      },
      fontFamily: {
        "Josefin-Sans": ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
