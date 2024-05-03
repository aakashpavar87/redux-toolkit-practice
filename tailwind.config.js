/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aakash: "M PLUS Code Latin, fira code,monospace"
      }
    },
  },
  plugins: [],
}