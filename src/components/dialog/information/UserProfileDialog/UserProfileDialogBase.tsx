import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, MoreHorizontal, User } from "lucide-react";

export function UserProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          UserProfile
        </Button>
      </DialogTrigger>

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
