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
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["item1", "item2", "item3"], {
    required_error: "You need to select a notification type.",
  }),
});

export function RadioBoxColumnForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isOpen, setIsOpen] = useState(true);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert(data.type);
  };

  return (
    <div
      className={`h-[400px] ${
        isOpen
          ? "relative bg-black bg-opacity-50 p-4"
          : "flex flex-col justify-center items-center"
      }`}
    >
      {!isOpen && (
        <Button
          variant="outline"
          className="w-fit"
          onClick={() => setIsOpen(true)}
        >
          Radio Box Column Form
        </Button>
      )}

      {isOpen && (
        <div className="overflow-y-auto max-h-[450px] flex flex-col gap-4 scale-[0.80] absolute w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              Radio Box Column Form
            </h2>
            <XIcon
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
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
        </div>
      )}
    </div>
  );
}
