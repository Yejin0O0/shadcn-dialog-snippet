import path from "node:path";
import fs from "fs-extra";

// const convertTsxToString = async () => {
//   const inputDir = path.resolve("src/components/dialog");
//   const outputDir = path.resolve("src/__generated__");

//   try {
//     const files = await fs.readdir(inputDir, {
//       withFileTypes: true,
//       recursive: true,
//     });

//     for (const file of files) {
//       if (file.name.endsWith("Base.tsx")) {
//         const code = await fs.readFile(
//           `${file.parentPath}/${file.name}`,
//           "utf-8",
//         );
//         const outputFileName = `${path.basename(file.name, ".tsx")}String.ts`;
//         const outputFilePath = path.resolve(outputDir, outputFileName);

//         const generatedCode = `
//           export const ${path.basename(file.name, ".tsx")}String = ${JSON.stringify(code)};
//         `;

//         await fs.outputFile(outputFilePath, generatedCode);
//         console.log(`Generated: ${outputFilePath}`);
//       }
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     process.exit(1);
//   }
// };

const findFilesRecursively = async (dir: string, ext = "Base.tsx") => {
  let files: string[] = [];

  // Read the contents of the current directory
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.resolve(dir, item.name);

    if (item.isDirectory()) {
      // If it's a directory, call recursively
      const subFiles = await findFilesRecursively(fullPath, ext);
      files = files.concat(subFiles);
    } else if (item.isFile() && item.name.endsWith(ext)) {
      // If it's a file, check if it matches the extension
      files.push(fullPath);
    }
  }

  return files;
};

const convertTsxToString = async () => {
  const inputDir = path.resolve("src/components/dialog");
  const outputDir = path.resolve("src/__generated__");

  try {
    // Remove files in the output directory
    await fs.remove(outputDir);
    // Recursively find the files
    const tsxFiles = await findFilesRecursively(inputDir);

    for (const filePath of tsxFiles) {
      const code = await fs.readFile(filePath, "utf-8");
      const outputFileName = `${path.basename(filePath, ".tsx")}String.ts`;
      const outputFilePath = path.resolve(outputDir, outputFileName);

      const generatedCode = `
        export const ${path.basename(filePath, ".tsx")}String = ${JSON.stringify(code)};
      `;

      await fs.outputFile(outputFilePath, generatedCode);
      console.log(`Generated: ${outputFilePath}`);
    }
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

convertTsxToString();
