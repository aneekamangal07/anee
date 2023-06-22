/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        a: ["Sharpie"],
        b: ["Chillax"],
        c: ["Satoshi"],
        d: ["Neco"],
        e: ["Melodrama"],
        f: ["Nunito"],
        g: ["Climate Crisis"],
      },
      backgroundImage: {
        "bg-contact": "url('/images/bg-contact.svg')",
      },
    },
  },
  plugins: [],
};
