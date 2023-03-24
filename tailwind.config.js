/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}