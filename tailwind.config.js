/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // if you have /pages
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
};
export const plugins = [];
