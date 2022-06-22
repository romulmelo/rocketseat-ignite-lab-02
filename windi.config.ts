import defaultTheme from "windicss/defaultTheme"
import { defineConfig } from "windicss/helpers"

export default defineConfig({
  theme: {
    extend: {
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43"
        },
        blue: {
          500: "#81D8F7"
        },
        orange: {
          500: "#FBA94C"
        },
        red: {
          500: "#F75A68"
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A"
        }
      },
      fontFamily: {
        sans: ["Roboto", defaultTheme.fontFamily.sans]
      }
    }
  },
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"]
  },
  plugins: [
    require("windicss/plugin/filters"),
    require("windicss/plugin/forms"),
    require("windicss/plugin/aspect-ratio"),
    require("windicss/plugin/line-clamp"),
    require("windicss/plugin/typography")
  ]
})
