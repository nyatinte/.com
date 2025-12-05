import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "aurora-float": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            opacity: "0.6",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: "0.4",
          },
          "100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
        },
      },
      animation: {
        "aurora-float": "aurora-float 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
