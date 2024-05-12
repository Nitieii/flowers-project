/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "24px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },

    extend: {
      fontFamily: {
        //using popins font
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#314527",
        secondary: "#EDE8E3",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
  
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        quizz: "url('assets/Quizzes.png')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};