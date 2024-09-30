const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brandBrown: "#5E2C05",
        brandRed: "#BC3434",
      },
      backgroundImage: { // Corrected this line
        'low-resolution-hero-cover': "url(/src/assets/website cover blur 100.png)",
      },
      fontFamily: {
        futura: ['Futura'],
      },
    },
  },
  plugins: [],
});
