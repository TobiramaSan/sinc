import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_color: "#F9F9F9",
        sinc_black: "#212121",
        sinc_btn: "#20888F",
        apply_btn: "#303030",
        small_text: "#4E4E4E",
        black_card: "#303030",
        orange_card: "#F47733",
        pink_carrd: "#FF78BF",
        blue_card: "#20888F",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
