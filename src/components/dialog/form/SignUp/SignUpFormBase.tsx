import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
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
    path: ["confirmPassword"], // 오류 메시지를 표시할 경로
  });

type FormData = z.infer<typeof formSchema>;

export function SignUpFormBase() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            Sign Up
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Create your account by filling in the details below
          </DialogDescription>
        </DialogHeader>

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
                      id="email"
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
                      {showPassword ? (
                        <div>아이콘</div>
                        // <FaRegEye className="w-5 h-5 text-gray-500" />
                      ) : (
                        <div>아이콘</div>
                        // <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
                      )}
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
                구글아이콘
                {/* <FcGoㄴogle className="w-5 h-5" /> */}
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                페이스북아이콘
                {/* <FaFacebook className="w-5 h-5 text-blue-600" /> */}
                Sign up with Facebook
              </Button>
            </div>
          </form>
        </Form>
        <DialogFooter>
          <p className="text-sm font-semibold">Already Have an account?</p>
          <a
            href="/"
            className="text-sm font-semibold text-blue-500 hover:underline"
          >
            Sign In
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
