/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Jost"]
      },
      backgroundImage: {
        'yosemite': "url('/dist/yosemite.png')"
      },
    },
  },
  plugins: [],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
}
