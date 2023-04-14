/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./resume.html", "./src/yosemite.png"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Karla"]
      },
      backgroundImage: {
        'yosemite': "url('/src/yosemite.png')"
      },
    },
  },
  plugins: [],
}
