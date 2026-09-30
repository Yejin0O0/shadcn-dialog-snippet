import { exec } from "node:child_process";
import path from "node:path";
import fg from "fast-glob";
import fs from "fs-extra";
import type { Plugin } from "vite";

export function convertBaseToStringPlugin(): Plugin {
  const inputDir = path.resolve("src/components/dialog");
  const outputDir = path.resolve("src/__generated__");
  const cache = new Map<string, string>();

  return {
    name: "vite-plugin-convert-base-to-string",

    async buildStart() {
      const files = await fg(["**/*Base.tsx"], {
        cwd: inputDir,
        absolute: true,
      });
      await fs.ensureDir(outputDir);

      for (const filePath of files) {
        await generateFileIfChanged(filePath);
      }

      exec("npm run format", (error, stdout, stderr) => {
        if (error) {
          console.error("❌ Format error:", error.message);
        } else {
          console.log("✅ Format complete");
          if (stdout) console.log(stdout);
          if (stderr) console.error(stderr);
        }
      });
    },

    async handleHotUpdate({ file }) {
      if (file.endsWith("Base.tsx") && file.includes("/components/dialog/")) {
        await generateFileIfChanged(file);
      }
    },
  };

  async function generateFileIfChanged(filePath: string) {
    const code = await fs.readFile(filePath, "utf-8");

    if (cache.get(filePath) === code) return;

    cache.set(filePath, code);

    const fileName = path.basename(filePath, ".tsx");
    const outName = `${fileName}String.ts`;
    const outPath = path.join(outputDir, outName);
    const varName = `${fileName}String`;

    const generatedCode = `export const ${varName} = ${JSON.stringify(code)};`;

    await fs.outputFile(outPath, generatedCode);
    console.log(`✨ Generated: ${path.basename(outPath)}`);
  }
}
