import CommonDialog from "@/components/common/CommonDialog";
import useDialogComponent from "@/hooks/useDialogComponent";

interface WarningAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export default function WarningAlert({ type }: WarningAlertProps) {
  const {
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent,
    DialogActionComponent,
    DialogCancelComponent,
  } = useDialogComponent({ dialogType: "alert", type });

  return (
    <CommonDialog dialogType="alert" type={type} title="Warning" scale={SCALE}>
      <div className="border-s-4 border-amber-500 pl-6">
        <DialogHeaderComponent className="mb-1.5">
          <DialogTitleComponent>Warning</DialogTitleComponent>
          <DialogDescriptionComponent>
            This is a warning message. Please take caution before proceeding
            further.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>
        <DialogFooterComponent>
          <DialogCancelComponent>Dismiss</DialogCancelComponent>
          <DialogActionComponent className="bg-amber-500 text-white hover:bg-amber-700 hover:text-white focus:ring-2 focus:ring-amber-500">
            Action
          </DialogActionComponent>
        </DialogFooterComponent>
      </div>
    </CommonDialog>
  );
}
