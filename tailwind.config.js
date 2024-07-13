/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/preline/dist/*.js','./public/preline/preline.js',],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin')
  ],
}

