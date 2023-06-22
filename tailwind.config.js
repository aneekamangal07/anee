/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        b: ["Chillax"],
        c: ["Satoshi"],
        e: ["Melodrama"],
        g: ["Climate Crisis"],
      },
      backgroundImage: {
        "bg-contact": "url('/images/bg-contact.svg')",
      },
    },
  },
  plugins: [],
};
