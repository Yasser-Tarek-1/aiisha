/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      green: "#256f65",
      "green-hover": "#164c45",
      white: "#fff",
      black: "#000",
      "gray-bold": "#111827",
      "gray-normal": "#374151",
      "gray-300": "#d1d5db",
      "gray-200": "#e5e7eb",
      error: "#dc2626",
    },
    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1180px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
