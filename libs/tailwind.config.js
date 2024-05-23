const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#FF7A00',
      'secondary': '#5D5FEF',
      'tertiary': '#2A2D38',
      'quaternary': '#777F9E',
      'quinary': '#101115',
      'background': '#060609',
      'error': '#FF5454',
      'placehodler': '#666666',
      'border': '#2A2D38',
      'text':'#ffffff'
    },
  },
  plugins: [],
};
