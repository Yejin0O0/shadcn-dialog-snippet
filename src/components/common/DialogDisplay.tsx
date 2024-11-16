import type { ReactNode } from "react";
import DialogToolBar from "./DialogToolBar";

interface DialogDisplayProps {
  category: "information" | "interrupt" | "form";
  code: string;
  children: ReactNode;
}

function DialogDisplay(props: DialogDisplayProps) {
  const { category, code, children } = props;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
      <DialogToolBar category={category} code={code} />
      <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
        {children}
      </div>
    </div>
  );
}

export default DialogDisplay;
