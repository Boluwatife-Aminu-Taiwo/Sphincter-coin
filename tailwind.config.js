/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#141414",
        gold: "#FEFE03",
        wit: "#D4D4D4",
      },
    },
    fontSize: {
      xs: "5px",
      sm: "1.2rem",
      sms: "0.9rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      "mono-space": ['"mono space"'],
    },
  },
  plugins: [],
}
