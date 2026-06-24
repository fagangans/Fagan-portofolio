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
        primary: "#FF4FB3",
        secondary: "#58CC02",
        accent: "#1CB0F6",
        warning: "#FF9600",
        danger: "#FF4B4B",
        background: "#F7F7F7",
        textMain: "#3C3C3C",
        muted: "#AFAFAF",
        "primary-dark": "#CC0093",
        "secondary-dark": "#45A800",
        "accent-dark": "#0A95DB",
        "warning-dark": "#CC7800",
        "danger-dark": "#CC3C3C",
        "node-locked": "#E5E5E5",
        "node-locked-icon": "#AFAFAF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        mobile: "390px",
      },
    },
  },
  plugins: [],
};
export default config;
