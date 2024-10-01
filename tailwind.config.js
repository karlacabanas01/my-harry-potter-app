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
    },
  },
  plugins: [],
  images: {
    domains: ['ik.imagekit.io'],
  },
};
