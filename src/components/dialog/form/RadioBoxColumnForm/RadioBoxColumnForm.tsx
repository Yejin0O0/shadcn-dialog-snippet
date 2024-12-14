import { Button } from "@/components/ui/button";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isOpen, setIsOpen] = useState(true);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert(data.type);
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
            <DialogTitle>Radiobox Column Form</DialogTitle>
          </DialogHeader>
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
          Radiobox Column Form
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
                Radiobox Column Form
              </h2>
              <XIcon
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
          </div>
        )}
      </div>
    );
  }
}
