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
        bgMain: "#f4f4f4",
        bgMain2: "#ffffff",
        bgMain3: "#8c7a66",
        bgMain4: "#8c7a66",
        bgMain5: "#ab6e53",
        textMain: "#b2aa9c",
        templatePrimary: "#2E496B",
      },
    },
  },
  plugins: [],
};
export default config;
