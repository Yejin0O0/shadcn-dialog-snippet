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

interface SuccessAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export function SuccessAlert({ type }: SuccessAlertProps) {
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
    <CommonDialog dialogType="alert" type={type} title="Success" scale={SCALE}>
      <div className="border-s-4 border-green-500 pl-6">
        <DialogHeaderComponent className="mb-1.5">
          <DialogTitleComponent>Success</DialogTitleComponent>
          <DialogDescriptionComponent>
            Operation completed successfully! Everything went according to plan.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>
        <DialogFooterComponent>
          <DialogCancelComponent>Dismiss</DialogCancelComponent>
          <DialogActionComponent className="bg-green-500 text-white hover:bg-green-700 hover:text-white focus:ring-2 focus:ring-green-500">
            Action
          </DialogActionComponent>
        </DialogFooterComponent>
      </div>
    </CommonDialog>
  );
}
