import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import type React from "react";
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface InlineDialogProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dialogType?: "alert" | "dialog";
}

interface InlineDialogType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const InlineDialogContext = createContext<InlineDialogType>({
  isOpen: true,
  setIsOpen: () => {},
});

const InlineDialog = ({ children }: InlineDialogProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <InlineDialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className={`flex-1 ${
          isOpen
            ? "bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            : ""
        }`}
      >
        {children}
      </div>
    </InlineDialogContext.Provider>
  );
};

const InlineDialogTrigger = ({ children, className }: InlineDialogProps) => {
  const { setIsOpen } = useContext(InlineDialogContext);

  return (
    <Button
      variant="outline"
      className={cn(
        "absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit",
        className,
      )}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </Button>
  );
};

const InlineDialogContent = ({
  children,
  className,
  dialogType = "dialog",
  style,
}: InlineDialogProps) => {
  const { isOpen } = useContext(InlineDialogContext);

  if (!isOpen) return null;

  return (
    <div
      style={style}
      className={cn(
        "flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg absolute top-1/2 left-1/2",
        className,
      )}
    >
      {children}
      {dialogType === "dialog" && <InlineDialogClose />}
    </div>
  );
};

const InlineDialogHeader = ({ children, className }: InlineDialogProps) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className,
      )}
    >
      {children}
    </div>
  );
};

const InlineDialogTitle = ({ children, className }: InlineDialogProps) => {
  return (
    <h2
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
};

const InlineDialogDescription = ({
  children,
  className,
}: InlineDialogProps) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
};

const InlineDialogFooter = ({ children, className }: InlineDialogProps) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

const InlineDialogClose = ({ className }: InlineDialogProps) => {
  const { setIsOpen } = useContext(InlineDialogContext);

  return (
    <button
      type="button"
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
        className,
      )}
      onClick={() => setIsOpen(false)}
    >
      <XIcon className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  );
};

const InlineDialogCancel = ({ children, className }: InlineDialogProps) => {
  const { setIsOpen } = useContext(InlineDialogContext);
  return (
    <Button
      className={cn(
        buttonVariants({ variant: "outline" }),
        "mt-2 sm:mt-0 text-black dark:text-white",
        className,
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Button>
  );
};

const InlineDialogAction = ({ children, className }: InlineDialogProps) => {
  const { setIsOpen } = useContext(InlineDialogContext);
  return (
    <Button
      className={cn(buttonVariants(), className)}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Button>
  );
};

export {
  InlineDialog,
  InlineDialogTrigger,
  InlineDialogContent,
  InlineDialogHeader,
  InlineDialogTitle,
  InlineDialogDescription,
  InlineDialogFooter,
  InlineDialogClose,
  InlineDialogCancel,
  InlineDialogAction,
};
