module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('../public/Waimakariri.svg')"
      },
      colors: {
        'pl-blue': '#369FFF',
        'pl-yellow': '#FFBE00'
      }
    },
  },
  plugins: [],
}
