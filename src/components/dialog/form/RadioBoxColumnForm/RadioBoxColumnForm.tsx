import CommonDialog from "@/components/common/CommonDialog";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/custom-ui/InlineDialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["item1", "item2", "item3"], {
    required_error: "You need to select a notification type.",
  }),
});

const SCALE = 0.8;
interface RadioBoxColumnFormProps {
  type: "fullScreen" | "card";
}

export function RadioBoxColumnForm({ type }: RadioBoxColumnFormProps) {
  const DialogHeaderComponent =
    type === "fullScreen" ? DialogHeader : InlineDialogHeader;
  const DialogTitleComponent =
    type === "fullScreen" ? DialogTitle : InlineDialogTitle;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert(data.type);
  };

  return (
    <CommonDialog type={type} title="Radiobox Column Form" scale={SCALE}>
      <>
        <DialogHeaderComponent>
          <DialogTitleComponent>Radiobox Column Form</DialogTitleComponent>
        </DialogHeaderComponent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Items Title</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex justify-between"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="item1" />
                        </FormControl>
                        <FormLabel className="font-normal">item1</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="item2" />
                        </FormControl>
                        <FormLabel className="font-normal">item2</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="item3" />
                        </FormControl>
                        <FormLabel className="font-normal">item3</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="ml-auto">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </>
    </CommonDialog>
  );
}
