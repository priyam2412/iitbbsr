/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#113d60',
          DEFAULT: '#0e192a',
          dark: '#0c1c3c',
        },
        accent: {
          light: '#71aec2',
          DEFAULT: '#6596b9',
          dark: '#0c5c8c',
        },
        ui: {
          light: '#bfd3d9',
          gray: '#658093',
          dark: '#57606e',
          teal: '#28637f',
        }
      }
    },
  },
  plugins: [],
};
