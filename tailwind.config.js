/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors:{
        'color' : "#fb8500",
        'bg-color':"#023047"
      },
      fontFamily:{
        'fnt' : '"Inter", serif'
      }
    },
  },
  plugins: [],
}

