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

export function WarningAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-fit border-amber-500 text-amber-500 hover:bg-amber-100 hover:text-amber-500"
        >
          Warning
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="ltr">
        <div className="border-s-4 border-amber-500 pl-6">
          <AlertDialogHeader>
            <AlertDialogTitle>Permission Denied</AlertDialogTitle>
            <AlertDialogDescription>
              You do not have permission to view this content. Please contact
              your administrator if you believe this is a mistake.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Dismiss</AlertDialogCancel>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default WarningAlert;
