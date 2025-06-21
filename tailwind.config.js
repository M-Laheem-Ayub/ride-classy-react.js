// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        alegreya: ['Alegreya Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
