/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        e: ["Melodrama"],
        b: ["Chillax"],
        c: ["Poppins"],
        g: ["Climate Crisis"],
      },
      backgroundImage: {
        "bg-contact": "url('/images/bg-contact.svg')",
      },
    },
  },
  plugins: [],
};
