/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFF7ED",
        white: "#FFFFFF",
        black: "#000000",
        primary: "#FB923C",
        secondary: "#FFEDD5",
        tertiary: "#FED7AA",
        dark: "#9A3412",
      },
    },
  },
  plugins: [],
};
