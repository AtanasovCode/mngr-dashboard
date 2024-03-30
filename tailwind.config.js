/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-start": "hsl(37, 97%, 70%)",
        "instagram-end": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        // Dark Theme Colors
        "dark-toggle-start": "hsl(210, 78%, 56%)",
        "dark-toggle-end": "hsl(146, 68%, 55%)",
        // Light Theme Colors
        "light-toggle": "hsl(230, 22%, 74%)",
        // Neutral Colors - Dark Theme
        "background-dark": "hsl(230, 17%, 14%)",
        "very-dark-blue-top-bg": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue-card-bg": "hsl(228, 28%, 20%)",
        "desaturated-blue-text": "hsl(228, 34%, 66%)",
        "white-text": "hsl(0, 0%, 100%)",
        // Neutral Colors - Light Theme
        "white-bg": "hsl(0, 0%, 100%)",
        "very-pale-blue-top-bg": "hsl(225, 100%, 98%)",
        "light-grayish-blue-card-bg": "hsl(227, 47%, 96%)",
        "dark-grayish-blue-text": "hsl(228, 12%, 44%)",
        "very-dark-blue-text": "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
