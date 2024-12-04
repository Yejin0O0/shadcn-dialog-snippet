import { File, Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { CodeSheet } from "./CodeSheet";
import { CopyButton } from "./CopyButton";

interface DialogToolBarProps {
  category: "information" | "interrupt" | "form";
  dialog: ReactNode;
  code: string;
  title: string;
  fullScreenButton: ReactNode;
}

function DialogToolBar(props: DialogToolBarProps) {
  const { category, code, dialog, title, fullScreenButton } = props;
  const renderCategoryIcon = (categoryType: string) => {
    if (categoryType === "interrupt") {
      return <TriangleAlert className="text-current" />;
    }
    if (categoryType === "information") {
      return <Info className="text-current" />;
    }

    if (categoryType === "form") {
      return <File className="text-current" />;
    }
  };

  return (
    <div className="flex items-center gap-2 relative z-20 justify-end border-b bg-card px-3 py-2.5 text-card-foreground">
      <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
        <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
          {renderCategoryIcon(category)}
          {title}
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2 [&>form]:flex">
        {fullScreenButton}
        <CopyButton code={code} />
        <div className="shrink-0 bg-border w-[1px] mx-0 hidden h-4 md:flex" />
        <CodeSheet dialog={dialog} code={code} />
      </div>
    </div>
  );
}

export default DialogToolBar;
