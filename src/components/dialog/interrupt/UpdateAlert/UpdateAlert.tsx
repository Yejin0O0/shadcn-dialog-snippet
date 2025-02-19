import CommonDialog from "@/components/common/CommonDialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import {
  InlineDialogAction,
  InlineDialogCancel,
  InlineDialogDescription,
  InlineDialogFooter,
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/ui/inline-dialog";
import { DownloadCloudIcon } from "lucide-react";

interface UpdateAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function UpdateAlert({ type }: UpdateAlertProps) {
  const DialogHeaderComponent =
    type === "fullScreen" ? AlertDialogHeader : InlineDialogHeader;
  const DialogTitleComponent =
    type === "fullScreen" ? AlertDialogTitle : InlineDialogTitle;
  const DialogDescriptionComponent =
    type === "fullScreen" ? AlertDialogDescription : InlineDialogDescription;
  const DialogFooterComponent =
    type === "fullScreen" ? AlertDialogFooter : InlineDialogFooter;
  const DialogActionComponent =
    type === "fullScreen" ? AlertDialogAction : InlineDialogAction;
  const DialogCancelComponent =
    type === "fullScreen" ? AlertDialogCancel : InlineDialogCancel;

  return (
    <CommonDialog
      dialogType="alert"
      type={type}
      scale={SCALE}
      title="Update Required"
    >
      <>
        <DialogHeaderComponent className="sm:text-center">
          <div className="flex justify-center mb-2">
            <DownloadCloudIcon className="text-primary h-8 w-8" />
          </div>
          <DialogTitleComponent className="text-xl font-bold text-gray-800">
            Update Required
          </DialogTitleComponent>
          <DialogDescriptionComponent className="text-sm text-gray-600">
            A new version of the app is available. <br />
            Update now to get the latest features and improvements.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>
        <DialogFooterComponent className="flex sm:justify-center items-center gap-3 mt-4">
          <DialogActionComponent
            className={buttonVariants({
              variant: "destructive",
              className: "text-sm font-semibold text-center",
            })}
          >
            Update Now
          </DialogActionComponent>
          <DialogCancelComponent
            className={buttonVariants({
              variant: "ghost",
              className:
                "text-xs font-medium text-gray-600 text-center border-none",
            })}
          >
            Remind Me Later
          </DialogCancelComponent>
        </DialogFooterComponent>
      </>
    </CommonDialog>
  );
}
