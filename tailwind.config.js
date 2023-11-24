/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1fb6ff',
      'secondary': '#13ce66',
      'warning': '#ffc82c',
      'error': '#f94962',
      'white': '#fff',
      'black': "#000",
      gray: {
        'dark': '#273444',
        'main': '#8492a6',
        'light': '#d3dce6',
      }

    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    container: {
      padding: '4rem',
    },
  },
}

