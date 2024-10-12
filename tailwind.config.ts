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
        "red50": "#fee2e2",
        "red100": "#fca5a5",
        "red200": "#f87171",
        "red300": "#FF2F2F",
        "red400": "#DC2626",
        "red500": "#B91C1C",
        "whiteDash": "#F7F7F7",
        "primBlack": "#121212",
        "gray50": "#F6F6F6",
        "gray100": "#E5E5E5",
        "gray200": "#CBCBCB",
        "gray300": "#B2B2B2",
        "gray400": "#989898",
        "gray500": "#7F7F7F",
        "gray600": "#656363",
        "gray700": "#1F1F1F",
      }
    },
  },
  plugins: [],
};
export default config;
