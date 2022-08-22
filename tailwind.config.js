/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Jost"]
      },
      backgroundImage: {
        'yosemite': "url('/src/yosemite.png')"
      },
    },
  },
  plugins: [],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
}
