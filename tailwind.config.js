/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground":
          "rgb(var(--color-primary-foreground) / <alpha-value>)",
        grey: {
          100: "rgba(241, 241, 241, 1)",
          200: "rgba(230, 230, 230, 1)",
          600: "rgba(128, 128, 128, 1)",
          700: "rgba(102, 102, 102, 1)",
        },
      },
    },
  },
  plugins: [],
};
