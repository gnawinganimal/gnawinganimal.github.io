/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Karla"]
      },
      backgroundImage: {
        'yosemite': "url('/src/clearnight.jpg')"
      },
    },
  },
  plugins: [],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
}
