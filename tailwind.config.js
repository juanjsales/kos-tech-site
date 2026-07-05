/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-space-grotesk)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}