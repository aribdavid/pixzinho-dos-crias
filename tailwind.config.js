/* eslint-disable no-unused-vars */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      height: (theme) => ({
        112: '28rem',
        120: '30rem',
      }),
      minHeight: (theme) => ({
        80: '20rem',
      }),
      colors: {
        palette: {
          lighter: '#D9D9D9',
          light: '#D9D9D9',
          primary: '#294C3D',
          dark: '#294C3D',
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
