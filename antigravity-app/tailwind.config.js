/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#22c55e",
        brandBlue: "#2563eb",
      },
    },
  },
  plugins: [],
};