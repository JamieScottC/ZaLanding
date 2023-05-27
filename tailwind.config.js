/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        cursive: ["Smooch", "cursive"],
      },
      animation: {
        wavy: "wavy 30s ease-in-out infinite",
      },
      keyframes: {
        wavy: {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(100px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  safelist: [
    {
      pattern: /text-([^\s]+)-(100|300)/,
    },
  ],
  plugins: [],
};
