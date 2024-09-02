import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        myLightGray:'#3F3F46',
        myGray:'#27272A',
        myBlue:'#06B6D4'
      }
    },
  },
  plugins: [],
};
export default config;
