/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        ember: "#e44f2a",
        sun: "#f7a212",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)",
        glow: "0 22px 55px rgba(228, 79, 42, 0.22)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
