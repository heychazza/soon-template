/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      red: '#FF5146',
      yellow: '#FFE400',
      blurple: '#5865F2',
    },
    extend: {
      fontFamily: {
        mono: ['system-ui', 'monospace'],
      },
    },
  },
  plugins: [],
};
