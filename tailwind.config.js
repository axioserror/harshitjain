/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      fontVariationSettings: {
        normal: '"wdth" 100',
        wide: '"wdth" 150',
        condensed: '"wdth" 75',
      },
    },
  },
  plugins: [ 
    function ({ addUtilities }) {
    addUtilities({
      '.font-inconsolata-wide': {
        fontFamily: '"Inconsolata", monospace',
        fontVariationSettings: '"wdth" 150',
      },
      '.font-inconsolata-condensed': {
        fontFamily: '"Inconsolata", monospace',
        fontVariationSettings: '"wdth" 75',
      },
      '.font-inconsolata-normal': {
        fontFamily: '"Inconsolata", monospace',
        fontVariationSettings: '"wdth" 100',
      },
    });
  },],
}

