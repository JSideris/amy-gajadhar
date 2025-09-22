/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'navy': {
          800: '#1B365D',
        },
        'warm-ivory': '#F8F6F0',
        'rich-gold': '#D4A574',
      },
    },
  },
  plugins: [],
}