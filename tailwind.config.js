/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,tsx}",
    "./src/Components/*.{html,js,tsx}",
    "./src/Components/Pages/*.{html,js,tsx}",
    "./src/Assets/Img/*.{html,js,tsx}",
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
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
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
