export const errorAlertString = `
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

export function ErrorAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-fit border-red-500 text-red-500 hover:bg-red-100 hover:text-red-500"
        >
          Error
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="ltr">
        <div className="border-s-4 border-red-500 pl-6">
          <AlertDialogHeader>
            <AlertDialogTitle>Permission Denied</AlertDialogTitle>
            <AlertDialogDescription>
              You do not have permission to view this content. Please contact
              your administrator if you believe this is a mistake.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Dismiss</AlertDialogCancel>
            <AlertDialogAction className="w-fit bg-red-500 text-white hover:bg-red-700 hover:text-white focus:ring-2 focus:ring-red-500">
              Action
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ErrorAlert;

`;
