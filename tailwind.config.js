/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // that is actual animation
      animation: {
        fade: "fade 3s ease-in-out infinite",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1B4E6B",
        secondary: "#FFDE59",
        button: "#5EACDD",
        border: "rgba(255, 255, 255, 0.16)",
        gray: "#90A3BF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsm: "394px",
        xxsm: "200px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
