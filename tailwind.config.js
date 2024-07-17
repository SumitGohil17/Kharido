/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx,css}"];
export const theme = {
  screens :{
      'xs': '425px',
      'xlg':'1440px',
      'lg':'1024px',
      'md':'768px',
      'sm':'640px',
  },
  fontFamily: {
    'Podkova': ['Podkova', 'sans-serif'],
  },
  extend: {
    zIndex: {
      '1': '1',
    },
  },
};
export const plugins = [];

