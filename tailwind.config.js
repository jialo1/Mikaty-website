/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        miikaty: {
          DEFAULT: '#7C3AED', // mauve principal
          dark: '#1a1a1a',   // noir profond
          light: '#ffffff',  // blanc
        },
        'fond-hover-dark': '#EBE2E2',
        'fond-dark-card': '#B618C1',
        'fond-hover-darker': '#010030',
      },
    },
  },
  plugins: [],
}

