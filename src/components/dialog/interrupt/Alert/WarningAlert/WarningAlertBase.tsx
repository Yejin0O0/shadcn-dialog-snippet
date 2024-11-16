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
import { Button } from "@/components/ui/button";

export function WarningAlertBase() {
  return (
    <AlertDialog>
      <AlertDialogContent>
        <div className="border-s-4 border-amber-500 pl-6">
          <AlertDialogHeader>
            <AlertDialogTitle>Warning Message</AlertDialogTitle>
            <AlertDialogDescription>
              This is a warning message. Please take caution before proceeding
              further.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Dismiss</AlertDialogCancel>
            <AlertDialogAction className="w-fit bg-amber-500 text-white hover:bg-amber-700 hover:text-white focus:ring-2 focus:ring-amber-500">
              Action
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
      <AlertDialogTrigger asChild>
        <div className="flex justify-center p-4">
          <Button
            variant="outline"
            className="w-fit border-amber-500 text-amber-500 hover:bg-amber-100 hover:text-amber-500"
          >
            Warning
          </Button>
        </div>
      </AlertDialogTrigger>
    </AlertDialog>
  );
}
