/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#C2F578",
          hover: "#a5d064",
          dark: "#373636",
          charcoal: "#3E3E3E",
          card: "#ECEDEF",
          canvas: "#F5F5F5",
          muted: "#686868",
          subtext: "#595959",
          border: "#EAEDEB",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
