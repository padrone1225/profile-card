/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "desaturated-blue": "hsl(229, 23%, 23%)",
        "grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
