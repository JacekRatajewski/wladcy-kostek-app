const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        header: '135px auto',
        sidebar: 'repeat(auto-fill, 100px)',
      },
      gridTemplateColumns: {
        sidebar: '105px auto',
        quickbar: 'auto 600px',
      },
      width: {
        quickbar: 'calc(100% - 3rem)',
      },
      spacing: {
        'dialog-sm': '320px',
        'dialog-md': '540px',
        'dialog-lg': '780px',
      },
    },
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      tertiary: 'var(--tertiary)',
      quaternary: 'var(--quaternary)',
      quinary: 'var(--quinary)',
      background: 'var(--background)',
      error: 'var(--error)',
      placehodler: 'var(--placehodler)',
      border: 'var(--border)',
      text: 'var(--text)',
      overlay: 'var(--overlay)',
    },
    fontFamily: {
      header: ['Lexend'],
      text: ['Lato'],
    },
  },
  safelist: [
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'background',
    'error',
    'placehodler',
    'border',
    'text',
  ],
  plugins: [],
};
