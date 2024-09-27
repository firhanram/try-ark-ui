/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tertiary: {
          violet: {
            0: "#F4F2FF",
            5: "#DBD7F9",
            10: "#C4BDF3",
            20: "#9A8EEC",
            30: "#7767E4",
            40: "#761CEC",
            50: "#6913D8",
            60: "#6014C4",
            70: "#4B0A9E",
            80: "#460E8D",
            90: "#27125C",
          },
        },
        neutral: {
          0: "#FFFFFF",
          5: "#FBFAFA",
          10: "#F4F4F4",
          15: "#ECEDF0",
          20: "#D0D1D3",
          30: "#BABABA",
          40: "#A3A3A3",
          50: "#8D8D8D",
          60: "#767676",
          70: "#5F5F5F",
          80: "#484848",
          90: "#313131",
          100: "#1A1A1A",
        },
      },
      boxShadow: {
        modal:
          "0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)",
        "drawer-up":
          "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        "drawer-down":
          "0 -6px 16px 0 rgba(0, 0, 0, 0.08), 0 -3px 6px -4px rgba(0, 0, 0, 0.12), 0 -9px 28px 8px rgba(0, 0, 0, 0.05)",
        "drawer-left":
          "6px 0 16px 0 rgba(0, 0, 0, 0.08), 3px 0 6px -4px rgba(0, 0, 0, 0.12), 9px 0 28px 8px rgba(0, 0, 0, 0.05)",
        "drawer-right":
          "-6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12), -9px 0 28px 8px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
