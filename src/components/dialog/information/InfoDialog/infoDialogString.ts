export const infoDialogString = ` {
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

export function InfoDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-fit border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-500"
        >
          Informative
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="ltr">
        <div className="border-s-4 border-blue-500 pl-6">
          <AlertDialogHeader>
            <AlertDialogTitle>Info</AlertDialogTitle>
            <AlertDialogDescription>
              This is an informative message to notify you of something
              important. Please review the information carefully.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Dismiss</AlertDialogCancel>
            <AlertDialogAction className="w-fit bg-blue-500 text-white hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-500">
              Action
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
`;