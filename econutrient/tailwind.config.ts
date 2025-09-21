import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#70AD47",
        header: "#ffffff",
        footer: "#000000"
      },
      container: {
        center: true,
        padding: "1rem"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        rotateText: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(-200%)" },
          "75%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.3s ease-out",
        rotateText: "rotateText 4s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};

export default config;
