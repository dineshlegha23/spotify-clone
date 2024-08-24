/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        showHide: "showHide 0.3s ease-in-out",
      },

      keyframes: {
        showHide: {
          "0%": {
            opacity: 0,
            marginTop: "1000px",
          },
          "100%": {
            opacity: 1,
            marginTop: "0",
            height: "100%",
          },
        },
      },
    },
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1250px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "480px" },
    },
  },
  plugins: [],
};
