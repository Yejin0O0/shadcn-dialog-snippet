"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { highlightCode } from "@/lib/highlightCode";
import { type ReactNode, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import "@/styles/shikiStyles.css";

interface CodeSheetProps {
  dialog: ReactNode;
  code: string;
  themeCode: string;
}

export function CodeSheet({ dialog, code, themeCode }: CodeSheetProps) {
  const [tab, setTab] = useState("code");
  const [html, setHtml] = useState<string>("");
  const [themeHtml, setThemeHtml] = useState<string>("");

  useEffect(() => {
    async function loadHighlightedCode() {
      const highlightedCodeHtml = await highlightCode(code, "typescript");
      const highlightedThemeHtml = await highlightCode(themeCode, "css");

      setHtml(highlightedCodeHtml);
      setThemeHtml(highlightedThemeHtml);
    }

    loadHighlightedCode();
  }, [code, themeCode]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-6 rounded-[6px] border bg-transparent px-2 text-xs text-foreground shadow-none hover:bg-muted dark:text-foreground"
        >
          View Code
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col gap-0 border-l-0 p-0 dark:border-l sm:max-w-sm md:w-[700px] md:max-w-[700px]"
      >
        <div className="flex-1">{dialog}</div>
        <Tabs
          defaultValue="code"
          className="relative flex h-full flex-1 flex-col overflow-hidden p-4"
          value={tab}
          onValueChange={setTab}
        >
          <div className="flex w-full items-center">
            <TabsList className="h-7 w-auto rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
              <TabsTrigger
                value="code"
                className="h-[1.45rem] rounded-sm px-2 text-xs"
              >
                Code
              </TabsTrigger>
              <TabsTrigger
                value="theme"
                className="h-[1.45rem] rounded-sm px-2 text-xs"
              >
                Theme
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent
            value="code"
            className="h-full flex-1 flex-col overflow-hidden data-[state=active]:flex"
          >
            <div
              data-rehype-pretty-code-fragment
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: html }}
              className="w-full overflow-auto [&_pre]:overflow-auto [&_pre]:!bg-black [&_pre]:py-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed rounded-lg"
            />
          </TabsContent>
          <TabsContent
            value="theme"
            className="h-full flex-1 flex-col overflow-hidden data-[state=active]:flex"
          >
            <div
              data-rehype-pretty-code-fragment
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: themeHtml }}
              className="w-full overflow-auto [&_pre]:overflow-auto [&_pre]:!bg-black [&_pre]:py-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed rounded-lg"
            />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
