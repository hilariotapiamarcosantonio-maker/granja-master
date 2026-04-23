import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#d81b60",
          secondary: "#f48fb1",
          text: "#333333",
          background: "#ffffff",
          surface: "#f8f0e3",
          accent: "#ffb300",
        },
      },
    },
  },
  plugins: [typography],
};
export default config;