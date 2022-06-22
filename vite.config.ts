import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"
import WindiCSS from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
