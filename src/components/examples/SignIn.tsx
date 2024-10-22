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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "../ui/checkbox";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <div className="grid gap-4 py-4">
          {/* Email Input */}
          <div className="grid gap-4">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg"
              type="email"
            />
          </div>

          {/* Password Input */}
          <div className="grid gap-4">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg pr-10"
              />
              <Button
                variant="ghost"
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 hover:bg-transparent focus:outline-none"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
                ) : (
                  <FaRegEye className="w-5 h-5 text-gray-500" />
                )}
              </Button>
            </div>
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
          </div>
        </div>

        <div className="relative flex py-4 items-center">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="flex-grow border-t border-gray-300"></div>
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

        <DialogFooter>
          <Button type="submit" className="w-full p-3 rounded-lg">
            Sign in
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SignIn;
