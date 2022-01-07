module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {},
    container: {
      screens: {
         'xs' : '100%',
         sm: "540px",
         md: "720px",
         lg: "960px",
         xl: "1140px",
         'xxl' : '1320px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
