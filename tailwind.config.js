/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    fontSize: {
      xs: "0.75rem", // Extra small size
      sm: "0.875rem", // Small size
      base: "1rem", // Base size
      lg: "1.125rem", // Large size
      xl: "1.25rem", // Extra large size
      "2xl": "1.5rem", // 2x large size
      "3xl": "1.875rem", // 3x large size
      "4xl": "2.6rem", // 4x large size
      "5xl": "3rem", // 5x large size
      "6xl": "4rem", // 6x large size
      "7xl": "5rem", // 7x large size
      // Add more custom sizes as needed
    },
    colors: {
      background: `#0D0D0D`,
      player: `#4D4B4B`,
      accent: `#dfcc89`,
    },
    margin: {
      "1/12": "18%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
    },
    height: {
      96: "15rem",
      100: "54rem",
    },
    width: {
      96: "15rem",
    },
    ml: {
      96: "10px",
      97: "40px",
    },
  },
};
export const plugins = [];
