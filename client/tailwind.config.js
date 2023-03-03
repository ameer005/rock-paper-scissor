/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)"],
      },
      colors: {
        colorOrange: "hsl(39, 89%, 49%)",
        colorOrange2: "hsl(40, 84%, 53%)",
        colorBlue: "hsl(230, 89%, 62%)",
        colorBlue2: "hsl(230, 89%, 65%)",
        colorRed: "hsl(349, 71%, 52%)",
        colorRed2: "hsl(349, 70%, 56%)",
        colorPurple: "hsl(261, 73%, 60%)",
        colorPurple2: " hsl(261, 72%, 63%)",
        colorCyan: "hsl(189, 59%, 53%)",
        colorCyan2: "hsl(189, 58%, 57%)",

        colorText: "hsl(229, 25%, 31%)",
        colorText2: "hsl(229, 64%, 46%)",
        colorText3: "hsl(217, 16%, 45%)",

        colorBg: "hsl(214, 47%, 23%)",
        colorBg2: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
