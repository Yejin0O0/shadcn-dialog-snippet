import { codeToHtml } from "shiki";

export async function highlightCode(
  code: string,
  lang = "typescript",
): Promise<string> {
  return await codeToHtml(code, {
    lang,
    theme: "github-dark-default",
    transformers: [
      {
        code(node) {
          node.properties["data-line-numbers"] = "";
        },
      },
    ],
  });
}
