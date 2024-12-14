import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { ExpandIcon } from "lucide-react";
import { useState } from "react";

interface WarningAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function WarningAlert({ type }: WarningAlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (type === "fullScreen") {
    return (
      <AlertDialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
                >
                  <ExpandIcon />
                </Button>
              </AlertDialogTrigger>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white">
              full screen dialog
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <AlertDialogContent className="ltr">
          <div className="border-s-4 border-amber-500 pl-6">
            <AlertDialogHeader className="mb-1.5">
              <AlertDialogTitle>Warning</AlertDialogTitle>
              <AlertDialogDescription>
                This is a warning message. Please take caution before proceeding
                further.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Dismiss</AlertDialogCancel>
              <AlertDialogAction className="bg-amber-500 text-white hover:bg-amber-700 hover:text-white focus:ring-2 focus:ring-amber-500">
                Action
              </AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <div
      className={`flex-1 ${
        isOpen
          ? "bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          : ""
      }`}
    >
      <Button
        variant="outline"
        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit border-amber-500 text-amber-500 hover:bg-amber-100 hover:text-amber-500"
        onClick={() => setIsOpen(true)}
      >
        Warning
      </Button>

      {isOpen && (
        <div
          style={{
            transform: `translate(-50%, -50%) scale(${SCALE})`,
          }}
          className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
        >
          <div className="border-l-4 border-amber-500 pl-6">
            <h2 className="text-lg font-semibold">Warning Message</h2>
            <p className="text-sm text-muted-foreground">
              This is a warning message. Please take caution before proceeding
              further.
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Dismiss
              </Button>
              <Button
                variant="outline"
                className="w-fit bg-amber-500 text-white hover:bg-amber-700 hover:text-white focus:ring-2 focus:ring-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Action
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
