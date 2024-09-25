module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#e67e22',
        'big-stone': '#152536',
        'smalt-blue': '#4e958b',
        'maroon-flush': '#C32361',
        'lite-grey': 'rgba(0, 0, 0, 0.2)',
        'lite-big-stone': 'rgba(21, 37, 54, 0.7)',
      },
      fontFamily: {
        grotesque: ['Grotesque', 'sans-serif'],
        'grotesque-black': ['Grotesque Black', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      spacing: {
        'card-width': '350px',
        'card-height': '350px',
        'thumb-height': '260px',
      },
      boxShadow: {
        custom: '0 1px 4px rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
    },
  },
  plugins: [],
  images: {
    domains: ['ik.imagekit.io'],
  },
};
