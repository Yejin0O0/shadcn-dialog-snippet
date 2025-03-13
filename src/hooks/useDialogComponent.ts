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
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from "@radix-ui/react-alert-dialog";
import type {
  DialogContentProps,
  DialogDescriptionProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";

interface DialogComponentProps {
  dialogType: "dialog" | "alert";
  type: "fullScreen" | "card";
}

type DialogComponentType<
  T,
  K extends HTMLElement = HTMLDivElement,
  withOmit extends boolean = true,
> = React.ForwardRefExoticComponent<
  withOmit extends false
    ? T
    : Omit<T & React.RefAttributes<K>, "ref"> & React.RefAttributes<K>
>;

type ComponentWithDisplayName = {
  ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
  displayName: string;
};

type InlineComponentType = ({
  children,
  className,
}: InlineDialogProps) => JSX.Element;

type DialogComponents = {
  DialogComponent: React.FC<AlertDialogProps> | React.FC<DialogProps>;
  DialogTriggerComponent:
    | DialogComponentType<AlertDialogTriggerProps, HTMLButtonElement, false>
    | DialogComponentType<DialogTriggerProps, HTMLButtonElement, false>;
  DialogContentComponent:
    | DialogComponentType<AlertDialogContentProps>
    | DialogComponentType<DialogContentProps>;
  DialogHeaderComponent: ComponentWithDisplayName | InlineComponentType;
  DialogTitleComponent:
    | DialogComponentType<AlertDialogTitleProps, HTMLHeadingElement>
    | DialogComponentType<DialogTitleProps, HTMLHeadingElement>
    | InlineComponentType;
  DialogDescriptionComponent:
    | DialogComponentType<AlertDialogDescriptionProps, HTMLParagraphElement>
    | DialogComponentType<DialogDescriptionProps, HTMLParagraphElement>
    | InlineComponentType;
  DialogFooterComponent: ComponentWithDisplayName | InlineComponentType;
  DialogActionComponent:
    | DialogComponentType<AlertDialogActionProps, HTMLButtonElement>
    | InlineComponentType;
  DialogCancelComponent:
    | DialogComponentType<AlertDialogCancelProps, HTMLButtonElement>
    | InlineComponentType;
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
