import CommonDialog from "@/components/common/CommonDialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDialogComponent from "@/hooks/useDialogComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface InnerScrollFormProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.7;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\+?[1-9]\d{0,14}([-\s]?\d+)*$/, {
    message: "Invalid phone number",
  }),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function InnerScrollForm({ type }: InnerScrollFormProps) {
  const {
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent,
  } = useDialogComponent({ dialogType: "dialog", type });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Pedro Duarte",
      username: "@peduarte",
      email: "pedro@example.com",
      phone: "+1 555-123-4567",
      address: "123 Main Street",
      city: "New York",
      country: "USA",
    },
  });

  const onSubmit = (data: FormData) => {
    alert(`Submitted Data:
      name: ${data.name}
      username: ${data.username}
      email: ${data.email}
      phone: ${data.phone}
      address: ${data.address}
      city: ${data.city}
      country: ${data.country}
    `);
  };

  return (
    <CommonDialog
      type={type}
      title="Inner Scroll Form"
      scale={SCALE}
      contentStyleClass="sm:max-w-[425px] overflow-y-auto max-h-[400px]"
    >
      <>
        <DialogHeaderComponent>
          <DialogTitleComponent>Edit profile</DialogTitleComponent>
          <DialogDescriptionComponent>
            Make changes to your profile here. Click save when you're done.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">Name</Label>
                  <FormControl>
                    <Input id="name" className="col-span-3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="username">Username</Label>
                  <FormControl>
                    <Input id="username" className="col-span-3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input
                      id="inner-scroll-email"
                      type="email"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="phone">Phone</Label>
                  <FormControl>
                    <Input
                      id="phone"
                      type="tel"
                      className="col-span-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="address">Address</Label>
                  <FormControl>
                    <Input id="address" className="col-span-3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="city">City</Label>
                  <FormControl>
                    <Input id="city" className="col-span-3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="country">Country</Label>
                  <FormControl>
                    <Input id="country" className="col-span-3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooterComponent>
              <Button type="submit">Save changes</Button>
            </DialogFooterComponent>
          </form>
        </Form>
      </>
    </CommonDialog>
  );
}
