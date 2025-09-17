/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}", 
];
export const theme = {
  extend: {
    colors: {
      "custom-cyan": {
        300: "#58d7d3",
        400: "#20cac5",
        500: "#17b3ae",
        DEFAULT: "#20cac5",
      },
    },
  },
  screens: {
    xs: "375px", 
    sm: "640px", 
    md: "768px", 
    lg: "1024px", 
    xl: "1440px"
  },
};
export const plugins = [];
