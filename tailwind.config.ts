import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/img/test3.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config

