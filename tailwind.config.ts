import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'primary': '#1BF7EF',
        'primary-light': '#D4FDFF',
        'primary-dark': '#010848',
      
        'secondary': '#FE008A',
        'secondary-light': '#022235',
        'secondary-dark': '#022235',

        'gray-special': '#e3e3e3'

      },
      backgroundImage: {
        main: "url('/img/patrones/2.webp')",
        patron: 'url(/img/patrones/blanco.png)',
        patron2: 'url(/img/patrones/patron.webp)',


        papel: 'url(/img/patrones/papel.png)',

        radio1: 'url(/img/radio1.jpeg)',
        radio2: 'url(/img/radio2.jpeg)',
        radio3: 'url(/img/radio3.jpeg)',
        radio4: 'url(/img/radio4.jpeg)',
        maudcast: 'url(/img/programas/maud.jpeg)',

        manuel: 'url(/img/manuel-vera.jpeg)',
        kikis: 'url(/img/kikis.jpeg)',
        kikis2: 'url(/img/locutores/kikis.PNG)',
        mau: 'url(/img/locutores/mauricio.jpeg)'
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
} satisfies Config;

