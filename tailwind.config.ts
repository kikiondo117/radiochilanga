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
        main: "url('/img/test3.jpeg')",
        patron: 'url(/img/patron.avif)',
      },
    },
  },
  plugins: [],
} satisfies Config;

