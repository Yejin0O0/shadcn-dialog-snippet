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
import { DownloadCloudIcon, ExpandIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";

interface UpdateAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function UpdateAlert({ type }: UpdateAlertProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

  if (type === "fullScreen") {
    return (
      <AlertDialog onOpenChange={() => setIsTooltipAllowed(false)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              onMouseEnter={() => setIsTooltipAllowed(true)}
            >
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
            {isTooltipAllowed && (
              <TooltipContent className="bg-black text-white">
                full screen dialog
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
        <AlertDialogContent className="ltr">
          <AlertDialogHeader className="sm:text-center">
            <div className="flex justify-center mb-2">
              <DownloadCloudIcon className="text-primary h-8 w-8" />
            </div>
            <AlertDialogTitle className="text-xl font-bold text-gray-800">
              Update Required
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-gray-600">
              A new version of the app is available. <br />
              Update now to get the latest features and improvements.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex sm:justify-center items-center gap-3 mt-4">
            <AlertDialogAction
              className={buttonVariants({
                variant: "destructive",
                className: "text-sm font-semibold text-center",
              })}
            >
              Update Now
            </AlertDialogAction>
            <AlertDialogCancel
              className={buttonVariants({
                variant: "ghost",
                className:
                  "text-xs font-medium text-gray-600 text-center border-none",
              })}
            >
              Remind Me Later
            </AlertDialogCancel>
          </AlertDialogFooter>
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
        disabled={isOpen}
        variant="outline"
        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit"
        onClick={() => setIsOpen(true)}
      >
        Update Required
      </Button>

      {isOpen && (
        <div
          style={{
            transform: `translate(-50%, -50%) scale(${SCALE})`,
          }}
          className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-2">
                <DownloadCloudIcon className="text-primary h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Update Required
              </h2>
              <p className="text-sm text-gray-600 text-center">
                A new version of the app is available. <br />
                Update now to get the latest features and improvements.
              </p>
            </div>
            <div className="flex sm:justify-center items-center gap-3 mt-4">
              <Button
                variant="destructive"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-center"
              >
                Update Now
              </Button>
              <Button
                variant="ghost"
                className="text-xs font-medium text-gray-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Remind Me Later
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
