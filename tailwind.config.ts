const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    //NextUI
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|divider|card|skeleton|tabs|listbox|accordion|modal|input|checkbox|badge|avatar|dropdown).js",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1536px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        title: ["var(--font-title)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
