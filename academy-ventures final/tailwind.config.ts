import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020810",
          900: "#060f1e",
          800: "#0a1628",
          700: "#0d1f3a",
          600: "#132d52",
          500: "#1e3a5f",
          400: "#2a4d7a",
        },
        gold: {
          300: "#e8cc82",
          400: "#dabb6a",
          500: "#c9a84c",
          600: "#a8893c",
        },
        silver: {
          50: "#f8f9fa",
          100: "#e8eaed",
          200: "#d0d4da",
          300: "#b0b8c2",
          400: "#8899aa",
          500: "#667788",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
