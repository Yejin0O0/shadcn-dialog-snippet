import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  InlineDialog,
  InlineDialogContent,
  InlineDialogTrigger,
} from "@/components/ui/inline-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useDialogComponent from "@/hooks/useDialogComponent";
import { ExpandIcon } from "lucide-react";
import { useState } from "react";

interface CommonDialogProps {
  dialogType?: "alert" | "dialog";
  type: "fullScreen" | "card";
  title?: string;
  children: React.ReactNode;
  scale: number;
  contentStyleClass?: string;
}

export default function CommonDialog({
  children,
  dialogType = "dialog",
  type,
  title,
  scale,
  contentStyleClass,
}: CommonDialogProps) {
  const { DialogComponent, DialogTriggerComponent, DialogContentComponent } =
    useDialogComponent({ dialogType, type });

  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

  if (type === "fullScreen") {
    return (
      <DialogComponent onOpenChange={() => setIsTooltipAllowed(false)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              onMouseEnter={() => setIsTooltipAllowed(true)}
            >
              <DialogTriggerComponent asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
                >
                  <ExpandIcon />
                </Button>
              </DialogTriggerComponent>
            </TooltipTrigger>
            {isTooltipAllowed && (
              <TooltipContent className="bg-black text-white">
                full screen dialog
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
        <DialogContentComponent className={contentStyleClass}>
          {children}
        </DialogContentComponent>
      </DialogComponent>
    );
  }

  if (type === "card") {
    return (
      <InlineDialog>
        <InlineDialogTrigger>{title}</InlineDialogTrigger>
        <InlineDialogContent
          dialogType={dialogType}
          style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
          className={contentStyleClass}
        >
          {children}
        </InlineDialogContent>
      </InlineDialog>
    );
  }
}
