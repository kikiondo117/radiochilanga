import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#ffdbc4',
        'secondary': '#022235',
        'gray-special': '#e3e3e3'
      },
      backgroundImage: {
        main: "url('/img/patrones/2.webp')",
        patron: 'url(/img/patrones/blanco.png)',
        patron2: 'url(/img/patrones/patron.webp)',
        periodico: 'url(/img/patrones/periodico.webp)',
        muertos: 'url(/img/patrones/muertos.png)',
        papel: 'url(/img/patrones/papel.png)',

        radio1: 'url(/img/radio1.jpeg)',
        radio2: 'url(/img/radio2.jpeg)',
        radio3: 'url(/img/radio3.jpeg)',
        radio4: 'url(/img/radio4.jpeg)',

        manuel: 'url(/img/manuel-vera.jpeg)',
        kikis: 'url(/img/kikis.jpeg)',
        secret: 'url(/img/secrete.jpeg)'
      },
    },
  },
  plugins: [],
} satisfies Config;

