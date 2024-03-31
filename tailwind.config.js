/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary colors
        'lime': "hsl(163, 72%, 41%)",
        'brightRed': "Bright Red: hsl(356, 69%, 56%)",
        //dark theme
        'background': "hsl(230, 17%, 14%)",
        'backgroundPattern': "hsl(232, 19%, 15%)",
        'card': "hsl(228, 28%, 20%)",
        'textAccent': " hsl(228, 34%, 66%)",
        'text': "hsl(0, 0%, 100%)",
        //socials
        'facebook': "hsl(208, 92%, 53%)",
        'instagramGradientStart': "hsl(37, 97%, 70%)",
        'instagramGradientEnd': "hsl(329, 70%, 58%)",
        'twitter': "sl(203, 89%, 53%)",
        'youtube': "hsl(348, 97%, 39%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
