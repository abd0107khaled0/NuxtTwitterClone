/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    screens: {
      main:"445px",
      xs: "614px",
      sm: "991px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },

    extend: {
      colors: {
        "main-color": "#f79f1A",
        "apple-green": "#046e1b",
        "dire-wolf": "#292727",
        
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },

    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

