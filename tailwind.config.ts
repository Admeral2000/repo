// @ts-ignore
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'noto-traditional-nushu': ['Noto Traditional Nushu', 'sans-serif'],
      },
      colors: {
        primary: "#14C99A",
        'navborderlategray': "#1e2c38",
        gray: "#182632",
        'textGray': "hsba(0, 0%, 100%, 1)",
        'mobile-app-list-bg': "hsla(0, 0%, 100%, .08)",
        'ultimate-card-color':'#172531',
        white: "#fff",
        'nav-dark-blue':"#0f1d29",
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-pattern.png')",
        "dark-gradient":
          "linear-gradient(180deg, #182632, #071521)",
        "ulltimate-card-gradient":
          "linear-gradient(#293641, hsla(0, 0%, 100%, 0))",
        "news-card-gradient":
          "linear-gradient(transparent, #071521 90%)",
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),],
};
export default config;
