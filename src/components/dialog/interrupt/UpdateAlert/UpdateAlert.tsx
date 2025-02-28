import CommonDialog from "@/components/common/CommonDialog";
import { buttonVariants } from "@/components/ui/button";
import useDialogComponent from "@/hooks/useDialogComponent";
import { DownloadCloudIcon } from "lucide-react";

interface UpdateAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function UpdateAlert({ type }: UpdateAlertProps) {
  const {
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent,
    DialogActionComponent,
    DialogCancelComponent,
  } = useDialogComponent({ dialogType: "alert", type });

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
