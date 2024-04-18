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
        "logo": ['"Jersey 20"', "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },

        dark: {
          50: "#f1f1f0",
          100: "#e6e6e5",
          200: "#cac7c5",
          300: "#adaaa7",
          400: "#7c7874",
          500: "#544e4a",
          600: "#403c38",
          700: "#34302c",
          800: "#201b18",
          900: "#13100d",
          950: "#080604",
        },
      },
    },
  },
  plugins: [],
};
// ///* Color Theme Swatches in Hex */
// .CR---Shades-of-Teal-1-hex { color: #265C4B; }
// .CR---Shades-of-Teal-2-hex { color: #146551; }
// .CR---Shades-of-Teal-3-hex { color: #007566; }
// .CR---Shades-of-Teal-4-hex { color: #589A8D; }
// .CR---Shades-of-Teal-5-hex { color: #8FC1B5; }

// /* Color Theme Swatches in RGBA */
// .CR---Shades-of-Teal-1-rgba { color: rgba(37, 91, 74, 1); }
// .CR---Shades-of-Teal-2-rgba { color: rgba(19, 100, 80, 1); }
// .CR---Shades-of-Teal-3-rgba { color: rgba(0, 117, 102, 1); }
// .CR---Shades-of-Teal-4-rgba { color: rgba(88, 154, 140, 1); }
// .CR---Shades-of-Teal-5-rgba { color: rgba(142, 193, 180, 1); }

// /* Color Theme Swatches in HSLA */
// .CR---Shades-of-Teal-1-hsla { color: hsla(161, 41, 25, 1); }
// .CR---Shades-of-Teal-2-hsla { color: hsla(165, 67, 23, 1); }
// .CR---Shades-of-Teal-3-hsla { color: hsla(172, 100, 22, 1); }
// .CR---Shades-of-Teal-4-hsla { color: hsla(167, 27, 47, 1); }
// .CR---Shades-of-Teal-5-hsla { color: hsla(165, 28, 65, 1); }
