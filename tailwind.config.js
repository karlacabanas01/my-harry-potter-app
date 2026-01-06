/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        grotesque: ['Grotesque', 'sans-serif'],
        'im-fell-english': ['IM Fell English SC', 'serif'],
        serif: ['var(--font-im-fell)', 'serif'],
        display: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
