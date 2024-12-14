import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpandIcon, Eye, EyeClosed, XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const SCALE = 0.5;
interface SignInFormProps {
  type: "fullScreen" | "card";
}

export function SignInForm({ type }: SignInFormProps) {
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

  const [isOpen, setIsOpen] = useState(true);
  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

  const onSubmit = () => {
    alert("Login Success");
  };
  if (type === "fullScreen") {
    return (
      <Dialog onOpenChange={() => setIsTooltipAllowed(false)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              onMouseEnter={() => setIsTooltipAllowed(true)}
            >
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
            {isTooltipAllowed && (
              <TooltipContent className="bg-black text-white">
                full screen dialog
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
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
                        {showPassword ? <Eye /> : <EyeClosed />}
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
                <span className="flex-shrink mx-4 text-gray-400 text-sm">
                  OR
                </span>
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
          Sign In Form
        </Button>

        {isOpen && (
          <div
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE})`,
            }}
            className="sm:max-w-[425px] flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
          >
            <div>
              <div className="flex justify-between">
                <h2 className="text-center text-2xl font-semibold">Sign In</h2>
                <XIcon
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="text-center text-gray-500">
                Welcome back! Please enter your details
              </div>
            </div>

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
                          {showPassword ? <Eye /> : <EyeClosed />}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm cursor-pointer"
                    >
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
                  <span className="flex-shrink mx-4 text-gray-400 text-sm">
                    OR
                  </span>
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
          </div>
        )}
      </div>
    );
  }
}
