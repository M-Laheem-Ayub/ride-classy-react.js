// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Playfair
        alegreya: ['Alegreya Sans', 'sans-serif'], // Alegreya
      },
    },
  },
  plugins: [],
};
