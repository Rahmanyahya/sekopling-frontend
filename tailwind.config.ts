import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primPurple": "#6636F5",
        "primGreen": "#6DC489",
        "primRed": "#F63F3F",
        "primOrange": "#EB8541",
        "primBlack": "#1f1f1f",
        "secPurple": "#D3C7FB",
        "secWhite": "#F7F8FA",
        "darkGray": "#727272",
        "darkPurple": "#4A1D95",
      }
    },
  },
  plugins: [],
};
export default config;
