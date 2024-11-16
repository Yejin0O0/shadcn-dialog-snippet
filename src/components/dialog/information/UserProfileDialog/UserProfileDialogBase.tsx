import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Earth,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Phone,
  User,
} from "lucide-react";

const profileImageUrl = "https://avatar.iran.liara.run/public/15";
const backgroundImageUrl = "https://picsum.photos/500/200";

export function UserProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          UserProfile
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px] rounded-lg shadow-lg p-8 bg-white">
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

        <DialogHeader className="flex flex-col items-center mt-10">
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
        </DialogHeader>

        <div className="mt-3 border-t border-gray-300 pt-4">
          <Label className="text-lg font-semibold text-gray-700">
            Information
          </Label>
          <div className="mt-4 space-y-3 text-gray-600">
            <div className="flex justify-between">
              <span className="flex gap-2 justify-center items-center text-sm">
                <Earth size={20} />
                Website
              </span>
              <a
                href="https://www.johndoe.dev"
                className="font-semibold underline hover:font-bold text-sm"
              >
                www.johndoe.dev
              </a>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-2 justify-center items-center text-sm">
                <Mail size={20} />
                Email
              </span>
              <span className="font-semibold text-sm">hello@johndoe.dev</span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-2 justify-center items-center text-sm">
                <Phone size={20} />
                Phone
              </span>
              <span className="font-semibold text-sm">+1 234 567 8900</span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-2 justify-center items-center text-sm">
                <Calendar size={20} />
                Joined
              </span>
              <span className="font-semibold text-sm">15 January, 2022</span>
            </div>
          </div>
        </div>

        <div className="mt-3 border-t border-gray-300 pt-4">
          <Label className="text-lg font-semibold text-gray-700">
            Skills & Interests
          </Label>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              JavaScript
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              TypeScript
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              React
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              Node.js
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              AI Enthusiast
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              Open Source
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
