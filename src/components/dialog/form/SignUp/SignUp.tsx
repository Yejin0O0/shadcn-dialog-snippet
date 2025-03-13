import CommonDialog from "@/components/common/CommonDialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDialogComponent from "@/hooks/useDialogComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Please confirm your password" }),
    terms: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

const SCALE = 0.4;

interface SignUpProps {
  type: "fullScreen" | "card";
}

export default function SignUp({ type }: SignUpProps) {
  const {
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent,
  } = useDialogComponent({ dialogType: "dialog", type });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    alert("Sign Up Successful");
  };

  return (
    <CommonDialog
      type={type}
      title="Sign Up"
      scale={SCALE}
      contentStyleClass="sm:max-w-[425px] rounded-md shadow-lg p-6"
    >
      <>
        <DialogHeaderComponent>
          <DialogTitleComponent className="text-center text-2xl font-semibold">
            Sign Up
          </DialogTitleComponent>
          <DialogDescriptionComponent className="text-center text-gray-500">
            Create your account by filling in the details below
          </DialogDescriptionComponent>
        </DialogHeaderComponent>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label>Email</Label>
                  <FormControl>
                    <Input
                      id="sign-up-email"
                      placeholder="Enter your email"
                      className="w-full p-3 border rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label>Password</Label>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full p-3 border rounded-lg pr-10"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      variant="ghost"
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 hover:bg-transparent focus:outline-none"
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  </div>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <Label>Confirm Password</Label>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="w-full p-3 border rounded-lg pr-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.confirmPassword?.message}
                    </FormMessage>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              rules={{ required: "You must agree to the terms" }}
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <div className="flex justify-center items-center gap-1">
                    <Checkbox
                      id="agreeTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel
                      htmlFor="agreeTerms"
                      className="text-sm font-semibold"
                    >
                      I agree to the terms and conditions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full p-3 rounded-lg">
              Sign up
            </Button>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-gray-300" />
              <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <div className="grid gap-2">
              <Button
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                Sign up with Facebook
              </Button>
            </div>
          </form>
        </Form>
        <DialogFooterComponent>
          <p className="text-sm font-semibold">Already Have an account?</p>
          <a
            href="/"
            className="text-sm font-semibold text-blue-500 hover:underline"
          >
            Sign In
          </a>
        </DialogFooterComponent>
      </>
    </CommonDialog>
  );
}
