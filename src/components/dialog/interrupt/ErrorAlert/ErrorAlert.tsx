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
} from "@/components/custom-ui/InlineDialog";

interface ErrorAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export default function ErrorAlert({ type }: ErrorAlertProps) {
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
