import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), svgr({ include: "**/*.svg" })],
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
  };
});
