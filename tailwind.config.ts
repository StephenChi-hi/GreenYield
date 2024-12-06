import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#68a52c",
        p_black: "#292929",
        bg_gray: "#f1efe8",
        secondary: "#471b00",
      },
      boxShadow: {
        even: "0 0 50px 10px rgba(0, 0, 0, 0.15)", // Custom shadow evenly spread
      },
    },
  },
  plugins: [],
} satisfies Config;
