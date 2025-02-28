import CommonDialog from "@/components/common/CommonDialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InlineDialogAction,
  InlineDialogCancel,
  InlineDialogDescription,
  InlineDialogFooter,
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/ui/inline-dialog";

interface WarningAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function WarningAlert({ type }: WarningAlertProps) {
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
