/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
