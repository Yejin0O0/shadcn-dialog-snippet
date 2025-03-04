import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  InlineDialogAction,
  InlineDialogCancel,
  InlineDialogDescription,
  InlineDialogFooter,
  InlineDialogHeader,
  type InlineDialogProps,
  InlineDialogTitle,
} from "@/components/custom-ui/InlineDialog";
import {
  AlertDialog,
  AlertDialogAction,
  type AlertDialogActionProps,
  AlertDialogCancel,
  type AlertDialogCancelProps,
  AlertDialogContent,
  type AlertDialogContentProps,
  AlertDialogDescription,
  type AlertDialogDescriptionProps,
  type AlertDialogProps,
  AlertDialogTitle,
  type AlertDialogTitleProps,
  AlertDialogTrigger,
  type AlertDialogTriggerProps,
} from "@radix-ui/react-alert-dialog";
import {
  Dialog,
  DialogContent,
  type DialogContentProps,
  DialogDescription,
  type DialogDescriptionProps,
  type DialogProps,
  DialogTitle,
  type DialogTitleProps,
  DialogTrigger,
} from "@radix-ui/react-dialog";

interface DialogComponentProps {
  dialogType: "dialog" | "alert";
  type: "fullScreen" | "card";
}
type DialogComponentType<T> =
  | React.FC<T>
  | React.ForwardRefExoticComponent<
      Omit<T & React.RefAttributes<unknown>, "ref">
    >;

type ComponentWithDisplayName = {
  ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
  displayName: string;
};

type DialogComponents = {
  DialogComponent: DialogComponentType<AlertDialogProps | DialogProps>;
  DialogTriggerComponent: DialogComponentType<AlertDialogTriggerProps>;
  DialogContentComponent: DialogComponentType<
    AlertDialogContentProps | DialogContentProps
  >;
  DialogHeaderComponent:
    | ComponentWithDisplayName
    | (({ children, className }: InlineDialogProps) => JSX.Element);
  DialogTitleComponent: DialogComponentType<
    AlertDialogTitleProps | DialogTitleProps
  >;
  DialogDescriptionComponent: DialogComponentType<
    AlertDialogDescriptionProps | DialogDescriptionProps
  >;
  DialogFooterComponent:
    | ComponentWithDisplayName
    | (({ children, className }: InlineDialogProps) => JSX.Element);
  DialogActionComponent: DialogComponentType<AlertDialogActionProps>;
  DialogCancelComponent: DialogComponentType<AlertDialogCancelProps>;
};

export default function useDialogComponent({
  dialogType,
  type,
}: DialogComponentProps): DialogComponents {
  const isFullScreen = type === "fullScreen";

  if (dialogType === "alert") {
    return {
      DialogComponent: AlertDialog,
      DialogTriggerComponent: AlertDialogTrigger,
      DialogContentComponent: AlertDialogContent,
      DialogHeaderComponent: isFullScreen
        ? AlertDialogHeader
        : InlineDialogHeader,
      DialogTitleComponent: isFullScreen ? AlertDialogTitle : InlineDialogTitle,
      DialogDescriptionComponent: isFullScreen
        ? AlertDialogDescription
        : InlineDialogDescription,
      DialogFooterComponent: isFullScreen
        ? AlertDialogFooter
        : InlineDialogFooter,
      DialogActionComponent: isFullScreen
        ? AlertDialogAction
        : InlineDialogAction,
      DialogCancelComponent: isFullScreen
        ? AlertDialogCancel
        : InlineDialogCancel,
    };
  }

  return {
    DialogComponent: Dialog,
    DialogTriggerComponent: DialogTrigger,
    DialogContentComponent: DialogContent,
    DialogHeaderComponent: isFullScreen ? DialogHeader : InlineDialogHeader,
    DialogTitleComponent: isFullScreen ? DialogTitle : InlineDialogTitle,
    DialogDescriptionComponent: isFullScreen
      ? DialogDescription
      : InlineDialogDescription,
    DialogFooterComponent: isFullScreen ? DialogFooter : InlineDialogFooter,
    DialogActionComponent: InlineDialogAction,
    DialogCancelComponent: InlineDialogCancel,
  };
}
