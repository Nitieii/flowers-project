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
    container: {
      screens: {
        sm: "375px",
        md: "576px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
    },

    extend: {
      fontFamily: {
        //using popins font
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        vivaldi: ["Vivaldi", "sans-serif"],
        tanMonCheri: ["Tan-Mon_cheri", "sans-serif"],
        tanWaltzingMathilde: ["Tan-Waltzing_mathilde", "sans-serif"],
        float: ["Float", "sans-serif"],
      },
      colors: {
        primary: "#657558",
        secondary: "#6B6966",
        "pale-gray": "#ECE4D9",
        "coral-red": "#FF6452",
        "slate-gray": "#D6D3C8",
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
        xs: "480px", // Custom breakpoint
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    logs: false,
  },
};
