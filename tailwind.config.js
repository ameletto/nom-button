module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'foods': "url('/public/bg.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}