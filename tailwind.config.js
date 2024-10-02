module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesque: ['Grotesque', 'sans-serif'],
        'im-fell-english': ['IM Fell English SC', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '2', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out forwards',
      },
    },
  },
  plugins: [],
  images: {
    domains: ['ik.imagekit.io'],
  },
};
