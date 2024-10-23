import { Button } from "@/components/ui/button";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormData = z.infer<typeof formSchema>;

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    alert("Login Success");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            Sign In
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Welcome back! Please enter your details
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            {/* Email Input */}
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
                  <FormMessage />
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
                        <FaRegEye className="w-5 h-5 text-gray-500" />
                      ) : (
                        <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember for 30 Days
                </label>
              </div>
              <a href="/" className="text-sm text-blue-500 hover:underline">
                Forgot password
              </a>
            </div>

            <Button type="submit" className="w-full p-3 rounded-lg">
              Sign in
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
                <FcGoogle className="w-5 h-5" />
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
              >
                <FaFacebook className="w-5 h-5 text-blue-600" />
                Sign up with Facebook
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default SignIn;
