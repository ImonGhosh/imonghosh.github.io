/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slateInk: "#101820",
        pine: "#1f4f46",
        copper: "#c47f4a",
        cloud: "#f6f7f2",
        mist: "#dfe7df",
        berry: "#7d4458",
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
