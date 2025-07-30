/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'no-hamburger': '1043px',
      },
      colors: {
        'base-blue': '#37425B',
        'brighter-blue': '#213461',
      },
    },
  },
  plugins: [],
}
