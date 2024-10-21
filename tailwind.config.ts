import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: '#e2e8f0',
          accent: '#404a2e',
          secondary: '#393e46',
          dark: '#222831'
        }
      },
    },
  },
  plugins: [],
};
export default config;
