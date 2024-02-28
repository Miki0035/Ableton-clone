import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ab-yellow": "#fbffa7",
        "ab-lightSky": "#b1c5ff",
        "ab-lightGreen": "#b6ffc0",
        "ab-orange": "#ff764d",
        "ab-lightPurple": "#d5b3ff",
        "ab-blue": "#0000ff",
      },
    },
  },
  plugins: [],
};
export default config;
