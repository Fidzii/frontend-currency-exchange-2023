/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-light": "#EFF1F8",
        "bg-light": {
          100: "#FFFFFF",
          200: "#EBEBEB",
          300: "#DBDBDB",
          400: "#C7C7C7",
          500: "#B3B3B3",
          600: "#9E9E9E",
          700: "#8A8A8A",
          800: "#757575",
          900: "#616161",
        },
        "text-light": {
          100: "#5C5C5C",
          200: "#525252",
          300: "#474747",
          400: "#3D3D3D",
          500: "#333333",
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
        },
        primary: {
          100: "#0D85DD",
        },
      },
      boxShadow: {
        "card-light":
          "-6px -6px 16px rgba(251, 251, 251, 0.25), 6px 6px 16px rgba(219, 219, 219, 0.5)",
      },
    },
  },
  plugins: [],
};