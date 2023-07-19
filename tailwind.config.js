/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        a: ["Melodrama"],
        b: ["Chillax"],
        c: ["Poppins"],
        d: ["Climate Crisis"],
        e: ["Yanone Kaffeesatz"],
      },
      backgroundImage: {
        "bg-contact": "url('/images/bg-contact.svg')",
      },
    },
  },
  plugins: [],
};
