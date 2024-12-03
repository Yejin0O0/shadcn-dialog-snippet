import path from "node:path";
import fs from "fs-extra";

const convertTsxToString = async () => {
  const inputDir = path.resolve("src/components/dialog");
  const outputDir = path.resolve("src/__generated__");

  try {
    const files = await fs.readdir(inputDir, {
      withFileTypes: true,
      recursive: true,
    });

    for (const file of files) {
      if (file.name.endsWith("Base.tsx")) {
        const code = await fs.readFile(
          `${file.parentPath}/${file.name}`,
          "utf-8",
        );
        const outputFileName = `${path.basename(file.name, ".tsx")}String.ts`;
        const outputFilePath = path.resolve(outputDir, outputFileName);

        const generatedCode = `
          export const ${path.basename(file.name, ".tsx")}String = ${JSON.stringify(code)};
        `;

        await fs.outputFile(outputFilePath, generatedCode);
        console.log(`Generated: ${outputFilePath}`);
      }
    }
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

convertTsxToString();
