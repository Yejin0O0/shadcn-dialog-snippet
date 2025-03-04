import CommonDialog from "@/components/common/CommonDialog";
import {
  InlineDialogAction,
  InlineDialogCancel,
  InlineDialogDescription,
  InlineDialogFooter,
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/custom-ui/InlineDialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
interface InfoAlertProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

export default function InfoAlert({ type }: InfoAlertProps) {
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
    <CommonDialog dialogType="alert" type={type} scale={SCALE} title="Info">
      <div className="border-s-4 border-blue-500 pl-6">
        <DialogHeaderComponent className="mb-1.5">
          <DialogTitleComponent>Info</DialogTitleComponent>
          <DialogDescriptionComponent>
            This is an informative message to notify you of something important.
            Please review the information carefully.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>
        <DialogFooterComponent>
          <DialogCancelComponent>Dismiss</DialogCancelComponent>
          <DialogActionComponent className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-500">
            Action
          </DialogActionComponent>
        </DialogFooterComponent>
      </div>
    </CommonDialog>
  );
}
