// eslint-disable-next-line no-undef


/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      fontFamily:{
        Dosis:["Dosis", "sans-serif"]
      }
    },
  },
  plugins: [],
}

