import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {},
  plugins: [
    nextui({
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#E4E4E7",
            foreground: "#000000",
          },
        },
        dark: {
          layout: {},
          colors: { background: "#27272A", foreground: "#FFFFFF" },
        },
      },
    }),
  ],
};
export default config;
