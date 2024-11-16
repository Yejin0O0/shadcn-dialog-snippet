import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, MoreHorizontal, User, XIcon } from "lucide-react";
import { useState } from "react";

const profileImageUrl = "https://avatar.iran.liara.run/public/15";
const backgroundImageUrl = "https://picsum.photos/500/200";

export function UserProfileDialog() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-[400px] ${
        isOpen
          ? "relative bg-black bg-opacity-50 p-4"
          : "flex flex-col justify-center items-center"
      }`}
    >
      {isOpen && (
        <div className="scale-[0.8] absolute w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        </div>
      )}
      {!isOpen && (
        <Button
          variant="outline"
          className="w-fit"
          onClick={() => setIsOpen(true)}
        >
          UserProfile
        </Button>
      )}
    </div>
  );
}
