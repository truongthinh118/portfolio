import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#76726F",
            background: "#ECE8E5",
            default: {
              DEFAULT: "#F5F5F5",
              50: "#fafafa",
              100: "#f5f5f5",
              200: "#e5e5e5",
              300: "#d4d4d4",
              400: "#a3a3a3",
              500: "#737373",
              600: "#525252",
              700: "#404040",
              800: "#262626",
              900: "#171717",
              foreground: "#76726F",
            },
            content1: {
              foreground: "#92755f",
            },
            content2: {
              foreground: "#5F5B59",
            },
          },
        },
        dark: {
          colors: {
            // content1: "#FFFFFF",
            // foreground: "#76726F",
            background: "#76726F",
            // default: {
            //   DEFAULT: "#F5F5F5",
            //   50: "#fafafa",
            //   100: "#f5f5f5",
            //   200: "#e5e5e5",
            //   300: "#d4d4d4",
            //   400: "#a3a3a3",
            //   500: "#737373",
            //   600: "#525252",
            //   700: "#404040",
            //   800: "#262626",
            //   900: "#171717",
            // foreground: "#76726F",
            // },
          },
        },
      },
    }),
  ],
};
export default config;
