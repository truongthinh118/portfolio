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
            foreground: "#DBD8E3",
            background: "#352F44",
            default: {
              DEFAULT: "#2A2438",
              50: "#f2effc",
              100: "#d7d2e1",
              200: "#bbb6c9",
              300: "#a099b3",
              400: "#857c9c",
              500: "#6c6282",
              600: "#5c5470",
              700: "#352f44",
              800: "#2a2438",
              900: "#0d0a16",
              foreground: "#DBD8E3",
            },
            content1: {
              foreground: "#DBD8E3",
            },
            content2: {
              foreground: "#5F5B59",
            },
          },
        },
      },
    }),
  ],
};
export default config;
