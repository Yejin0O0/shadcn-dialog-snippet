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
import { Button, buttonVariants } from "@/components/ui/button";
import { DownloadCloudIcon } from "lucide-react";

export function UpdateAlertBase() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          Update Required
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
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
