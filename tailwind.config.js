/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        'spin-slow': 'spin 4s linear infinite',
        'pill-open': 'pill-open 2s ease-in-out infinite',
        'shine': 'shine 1s ease-out infinite alternate-reverse',
        'shadow': 'shadow 1s ease infinite alternate-reverse',
        'medicine-dust': 'medicine-dust 1.75s ease infinite alternate',
        'medicine-dust-delay-200': 'medicine-dust 1.75s ease -0.2s infinite alternate',
        'medicine-dust-delay-330': 'medicine-dust 1.75s ease -0.33s infinite alternate',
        'medicine-dust-delay-400': 'medicine-dust 1.75s ease -0.4s infinite alternate',
        'medicine-dust-delay-500': 'medicine-dust 1.75s ease -0.5s infinite alternate',
        'medicine-dust-delay-660': 'medicine-dust 1.75s ease -0.66s infinite alternate',
        'medicine-dust-delay-700': 'medicine-dust 1.75s ease -0.7s infinite alternate',
        'medicine-dust-delay-800': 'medicine-dust 1.75s ease -0.8s infinite alternate',
        'medicine-dust-delay-990': 'medicine-dust 1.75s ease -0.99s infinite alternate',
        'medicine-dust-delay-1110': 'medicine-dust 1.75s ease -1.11s infinite alternate',
        'medicine-dust-delay-1125': 'medicine-dust 1.75s ease -1.125s infinite alternate',
        'medicine-dust-delay-1275': 'medicine-dust 1.75s ease -1.275s infinite alternate',
        'medicine-dust-delay-1330': 'medicine-dust 1.75s ease -1.33s infinite alternate',
        'medicine-dust-delay-1400': 'medicine-dust 1.75s ease -1.4s infinite alternate',
        'medicine-dust-delay-1550': 'medicine-dust 1.75s ease -1.55s infinite alternate',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        spin: {
          '100%': { transform: 'rotate(-540deg)' },
        },
        'pill-open': {
          '0%, 20%, 80%, 100%': { marginTop: '0' },
          '30%, 70%': { marginTop: '10vmin' },
        },
        shine: {
          '0%, 46%': { right: '1.5vmin' },
          '54%, 100%': { right: '7.5vmin' },
        },
        shadow: {
          '0%, 49.999%': { transform: 'rotateY(0deg)', left: '0' },
          '50%, 100%': { transform: 'rotateY(180deg)', left: '-3vmin' },
        },
        'medicine-dust': {
          '0%, 100%': { transform: 'translate3d(0vmin, 0vmin, -0.1vmin)' },
          '25%': { transform: 'translate3d(0.25vmin, 5vmin, 0vmin)' },
          '75%': { transform: 'translate3d(-0.1vmin, -4vmin, 0.25vmin)' },
        },
      },
      colors:{
        "primary": '#FE6B8B',
      },
      backgroundImage: {
        "main": 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}