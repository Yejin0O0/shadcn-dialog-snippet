import type React  from 'react';
import { 
  createContext, 
  type Dispatch, 
  type SetStateAction, 
  useContext, 
  useState 
} from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { XIcon } from 'lucide-react';

interface TestProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dialogType?: 'alert' | 'dialog';
}

interface TestDialogType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogContext = createContext<TestDialogType>({ isOpen: true, setIsOpen: () => {} });

const TestDialog = ({ children }: TestProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className={`flex-1 ${
          isOpen
            ? "bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            : ""
        }`}
      >
        {children}
      </div>
    </DialogContext.Provider>
  );
};

const TestDialogTrigger = ({ children, className }: TestProps) => {
  const { setIsOpen } = useContext(DialogContext);

  return (
    <Button
      variant="outline"
      className={cn("absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit", className)}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </Button>
  );
}

const TestDialogContent = ({ children, className, dialogType = 'dialog', style }: TestProps) => {
  const { isOpen } = useContext(DialogContext);

  if(!isOpen) return null;

  return (
    <div
      style={style} 
      className={cn("flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg absolute top-1/2 left-1/2", className)}
    >
      {children}
      {dialogType === "dialog" && <TestDialogClose />}
    </div>
  )
};

const TestDialogHeader = ({ children, className }: TestProps) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}>
      {children}
    </div>
  )
}

const TestDialogTitle = ({ children, className }: TestProps) => {
  return (
    <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </h2>
  )
}

const TestDialogDescription = ({ children, className }: TestProps) => {
  return (
    <div className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </div>
  );
}

const TestDialogFooter = ({ children, className }: TestProps) => {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}>
      {children}
    </div>
  )
}

const TestDialogClose = ({ className }: TestProps) => {
  const { setIsOpen } = useContext(DialogContext);

  return (
    <button
      type="button"
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", 
        className
      )}
      onClick={() => setIsOpen(false)}
      >
      <XIcon className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  )
}

const TestDialogCancel = ({children, className}: TestProps) => {
  const { setIsOpen } = useContext(DialogContext);
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
  )
}

const TestDialogAction = ({children, className}: TestProps) => {
  const { setIsOpen } = useContext(DialogContext);
  return (
    <Button
      className={cn(buttonVariants(), className)}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Button>
  )
}

export {
  TestDialog,
  TestDialogTrigger,
  TestDialogContent,
  TestDialogHeader,
  TestDialogTitle,
  TestDialogDescription,
  TestDialogFooter,
  TestDialogClose,
  TestDialogCancel,
  TestDialogAction
}