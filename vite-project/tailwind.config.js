/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        my_Popins:"Poppins"
      },
      backgroundImage:{
      bacground_Image:"./src/images/image (5).png"

      }
    },

  },
  plugins: [],
}

