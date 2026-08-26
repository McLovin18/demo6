import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          premium: '#071A2B',
          secondary: '#102A43',
          dark: '#05121F',
        },
        gold: {
          premium: '#C8A96B',
          dark: '#A88A55',
          light: '#D4BA85',
        },
        white: {
          warm: '#F8F7F4',
        },
        text: {
          primary: '#151515',
          secondary: '#667085',
        },
      },
    },
  },
};

export default config;
