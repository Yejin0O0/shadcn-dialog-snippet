"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { type ReactNode, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CodeEditor from "./CodeEditor";

export function CodeSheet({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState("code");
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
        <div className="flex-1">{children}</div>
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
            <CodeEditor code="<div>code content</div>" />
          </TabsContent>
          <TabsContent
            value="theme"
            className="h-full flex-1 flex-col overflow-hidden data-[state=active]:flex"
          >
            <CodeEditor code="<div>theme content</div>" />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
