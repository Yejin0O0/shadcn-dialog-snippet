import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpandIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CheckBoxColumnFormProps {
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

export function CheckBoxColumnForm({ type }: CheckBoxColumnFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["item1"],
    },
    mode: "onChange",
  });

  const [isOpen, setIsOpen] = useState(true);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert(data.items);
  };

  if (type === "fullScreen") {
    return (
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
                >
                  <ExpandIcon />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white">
              full screen dialog
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Checkbox Column Form</DialogTitle>
          </DialogHeader>
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
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
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
        </DialogContent>
      </Dialog>
    );
  }
  if (type === "card") {
    return (
      <div
        className={`flex-1 ${
          isOpen
            ? "bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            : ""
        }`}
      >
        <Button
          variant="outline"
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit"
          onClick={() => setIsOpen(true)}
        >
          Checkbox Column Form
        </Button>
        {isOpen && (
          <div
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE})`,
            }}
            className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold leading-none tracking-tight">
                Checkbox Column Form
              </h2>
              <XIcon
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
                size={16}
              />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Items Title</FormLabel>
                        <FormDescription>
                          Write your description
                        </FormDescription>
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
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
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
          </div>
        )}
      </div>
    );
  }
}
