module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      body: ['Poppins']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
