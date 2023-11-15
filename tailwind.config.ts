const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    //NextUI
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|divider|card|skeleton|tabs|listbox|accordion|modal|input|checkbox|badge|avatar).js",
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
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #12A0EB 0%, #F46BCC 100%)",
      },
      colors: {
        background: "#F6F7F9",
        accent: "#3D5278",
        primary: {
          0: "#FFFFFF",
          100: "#D6E4FD",
          200: "#AEC8FC",
          300: "#85A8F8",
          400: "#658DF1",
          500: "#3563E9",
          600: "#264BC8",
          700: "#1A37A7",
          800: "#102587",
          900: "#0A196F",
        },
        success: {
          100: "#F5FCD2",
          200: "#E8FAA6",
          300: "#D3F178",
          400: "#BCE455",
          500: "#9CD323",
          600: "#7FB519",
          700: "#659711",
          800: "#4C7A0B",
          900: "#3B6506",
        },
        error: {
          100: "#FFE7D3",
          200: "#FFC8A6",
          300: "#FFA37A",
          400: "#FF7F59",
          500: "#FF4423",
          600: "#DB2719",
          700: "#B71112",
          800: "#930B16",
          900: "#7A0619",
        },
        warning: {
          100: "#FFF8D7",
          200: "#FFEFB0",
          300: "#FFE488",
          400: "#FFD96B",
          500: "#FFC73A",
          600: "#DBA32A",
          700: "#B7821D",
          800: "#936312",
          900: "#7A4D0B",
        },
        information: {
          100: "#DCF3FF",
          200: "#BAE5FF",
          300: "#98D3FF",
          400: "#7EC2FF",
          500: "#54A6FF",
          600: "#3D81DB",
          700: "#2A60B7",
          800: "#1A4393",
          900: "#102E7A",
        },
        secondary: {
          DEFAULT: "#EFF3FD",
          100: "#E0E9F4",
          200: "#C3D4E9",
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
          600: "#131825",
          700: "#0D121F",
          800: "#080C19",
          900: "#040815",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
