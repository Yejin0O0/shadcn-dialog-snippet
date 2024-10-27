import path from "node:path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(), 
    svgr({ include: '**/*.svg' }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
