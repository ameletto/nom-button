module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg': "url('/img/bg.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}