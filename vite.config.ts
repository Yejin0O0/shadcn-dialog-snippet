import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { convertBaseToStringPlugin } from "./plugins/viteConvertBaseToStringPlugin";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr({ include: "**/*.svg" }),
    convertBaseToStringPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  esbuild: {
    pure: mode === "production" ? ["console.log", "console.warn"] : [],
  },
}));
