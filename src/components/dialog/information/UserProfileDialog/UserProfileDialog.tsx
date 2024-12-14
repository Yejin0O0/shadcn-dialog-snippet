import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExpandIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, MoreHorizontal, User, XIcon } from "lucide-react";
import { useState } from "react";

const profileImageUrl = "https://avatar.iran.liara.run/public/15";
const backgroundImageUrl = "https://picsum.photos/500/200";

interface UserProfileDialogProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.65;

export function UserProfileDialog({ type }: UserProfileDialogProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

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
        <DialogContent className="sm:max-w-[450px] rounded-lg shadow-lg p-8 bg-white">
          <DialogHeader>
            <div
              className="relative w-full h-32 bg-gray-200 rounded-t-lg flex justify-center items-center"
              style={{
                backgroundImage: 'url("https://picsum.photos/500/200")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Avatar className="absolute -bottom-12 w-24 h-24 rounded-full border-4 border-white shadow-lg">
                <AvatarImage
                  src="https://avatar.iran.liara.run/public/15"
                  alt="User profile image"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </DialogHeader>

          <div className="flex flex-col items-center mt-10">
            <DialogTitle className="text-center text-2xl font-semibold text-gray-800">
              John Doe
            </DialogTitle>
            <p className="text-center text-sm text-gray-500">
              @johndoe • San Francisco • Joined Jan 2022
            </p>

            <div className="flex justify-center space-x-4 mt-4">
              <Button variant="default" className="w-fit">
                <User />
                Follow
              </Button>
              <Button variant="outline" className="w-fit">
                <MessageCircle />
                Message
              </Button>
              <Button variant="outline" className="w-fit">
                <MoreHorizontal />
                More
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4 leading-relaxed px-4">
              Tech enthusiast and software developer. Passionate about AI and
              open-source technologies. Let's build something amazing!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

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
        User Profile
      </Button>
      {isOpen && (
        <div
          style={{
            transform: `translate(-50%, -50%) scale(${SCALE})`,
          }}
          className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
        >
          <div className="flex justify-end mb-2">
            <XIcon
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div
            className="relative w-full h-32 bg-gray-200 rounded-t-lg flex justify-center items-center"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Avatar className="absolute -bottom-12 w-24 h-24 rounded-full border-4 border-white shadow-lg">
              <AvatarImage src={profileImageUrl} alt="User profile image" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-center mt-10">
            <div className="text-center text-2xl font-semibold text-gray-800">
              John Doe
            </div>
            <p className="text-center text-sm text-gray-500">
              @johndoe • San Francisco • Joined Jan 2022
            </p>

            <div className="flex justify-center space-x-2 mt-4">
              <Button size="sm" variant="default" className="w-fit text-sm">
                <User />
                Follow
              </Button>
              <Button size="sm" variant="outline" className="w-fit text-sm">
                <MessageCircle />
                Message
              </Button>
              <Button size="sm" variant="outline" className="w-fit text-sm">
                <MoreHorizontal />
                More
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4 leading-relaxed px-4">
              Tech enthusiast and software developer. Passionate about AI and
              open-source technologies. Let's build something amazing!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
