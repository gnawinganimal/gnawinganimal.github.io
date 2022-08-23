/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Karla"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
