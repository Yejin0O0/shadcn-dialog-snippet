import CommonDialog from "@/components/common/CommonDialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/custom-ui/InlineDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CheckBoxColumnProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

const items = [
  {
    id: "item1",
    label: "Item1",
  },
  {
    id: "item2",
    label: "Item2",
  },
  {
    id: "item3",
    label: "Item3",
  },
];

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default function CheckBoxColumn({ type }: CheckBoxColumnProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["item1"],
    },
    mode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert(data.items);
  };

  const DialogHeaderComponent =
    type === "fullScreen" ? DialogHeader : InlineDialogHeader;
  const DialogTitleComponent =
    type === "fullScreen" ? DialogTitle : InlineDialogTitle;

  return (
    <CommonDialog type={type} title="CheckBox Column" scale={SCALE}>
      <DialogHeaderComponent>
        <DialogTitleComponent>CheckBox Column</DialogTitleComponent>
      </DialogHeaderComponent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Items Title</FormLabel>
                  <FormDescription>Write your description</FormDescription>
                </div>
                <div className="flex justify-between">
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
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
    </CommonDialog>
  );
}
