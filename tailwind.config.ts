import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          default: '#3b82f6',
        },
        secondary: {
          default: '#06b6d4',
        },
        myLightGray: '#A3A3A3',
        myGray: '#27272A',
        myBlue: '#06B6D4',
      },
      boxShadow: {
        'custom-inner': 'inset 0px 0px 55px 10px  #27272A',
      },
    },
  },
  plugins: [],
};
export default config;
