/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        //primary colors
        'lime': "hsl(163, 72%, 41%)",
        'brightRed': "hsl(356, 69%, 56%)",
        //light theme
        'background': "hsl(0, 0%, 100%)",
        'backgroundPattern': "hsl(232, 19%, 15%)",
        'card': "hsl(227, 47%, 96%)",
        'textAccent': "hsl(228, 12%, 44%)",
        'text': " hsl(230, 17%, 14%)",
        //light mode
        'background-dark': "hsl(230, 17%, 14%)",
        'backgroundPattern-dark': "hsl(232, 19%, 15%)",
        'card-dark': "hsl(228, 28%, 20%)",
        'textAccent-dark': " hsl(228, 34%, 66%)",
        'text-dark': "hsl(0, 0%, 100%)",
        //socials
        'facebook': "hsl(208, 92%, 53%)",
        'instagramGradientStart': "hsl(37, 97%, 70%)",
        'instagramGradientEnd': "hsl(329, 70%, 58%)",
        'twitter': "hsl(203, 89%, 53%)",
        'youtube': "hsl(348, 97%, 39%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
