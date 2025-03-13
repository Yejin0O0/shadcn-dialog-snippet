import CommonDialog from "@/components/common/CommonDialog";
import useDialogComponent from "@/hooks/useDialogComponent";

interface ErrorAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function ErrorAlert({ type }: ErrorAlertProps) {
  const {
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent,
    DialogActionComponent,
    DialogCancelComponent,
  } = useDialogComponent({ dialogType: "alert", type });

  return (
    <CommonDialog dialogType="alert" type={type} scale={SCALE} title="Error">
      <div className="border-s-4 border-red-500 pl-6">
        <DialogHeaderComponent className="mb-1.5">
          <DialogTitleComponent>Permission Denied</DialogTitleComponent>
          <DialogDescriptionComponent>
            You do not have permission to view this content. Please contact your
            administrator if you believe this is a mistake.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>
        <DialogFooterComponent>
          <DialogCancelComponent>Dismiss</DialogCancelComponent>
          <DialogActionComponent className="bg-red-500 text-white hover:bg-red-700 hover:text-white focus:ring-2 focus:ring-red-500">
            Action
          </DialogActionComponent>
        </DialogFooterComponent>
      </div>
    </CommonDialog>
  );
}
