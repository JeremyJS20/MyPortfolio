/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,tsx}",
    "./src/Components/*.{html,js,tsx}",
    "./src/Components/Pages/*.{html,js,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    darkMode: 'class',
    screens: {
      mobile: '360px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      desktopW: '1536px',

    },
    extend: {
      fontSize: {
        base2: '15px',
        'heading-lg': '40px',
        'heading-base': '25px',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
    fontFamily: {
      RB: ["Roboto Mono", "cursive"],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
