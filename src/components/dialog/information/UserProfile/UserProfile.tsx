import CommonDialog from "@/components/common/CommonDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/custom-ui/InlineDialog";
import { MessageCircle, MoreHorizontal, User } from "lucide-react";

const profileImageUrl = "https://avatar.iran.liara.run/public/15";
const backgroundImageUrl = "https://picsum.photos/500/200";

interface UserProfileProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.65;

export default function UserProfile({ type }: UserProfileProps) {
  const DialogHeaderComponent =
    type === "fullScreen" ? DialogHeader : InlineDialogHeader;
  const DialogTitleComponent =
    type === "fullScreen" ? DialogTitle : InlineDialogTitle;

  return (
    <CommonDialog type={type} title="User Profile" scale={SCALE}>
      <>
        <DialogHeaderComponent>
          <div
            className="relative w-full h-32 bg-gray-200 rounded-t-lg flex justify-center items-center"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Avatar className="absolute -bottom-12 w-24 h-24 rounded-full border-4 border-white shadow-lg">
              <AvatarImage
                src={`${profileImageUrl}`}
                alt="User profile image"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </DialogHeaderComponent>

        <div className="flex flex-col items-center mt-10">
          <DialogTitleComponent className="text-center text-2xl font-semibold text-gray-800">
            John Doe
          </DialogTitleComponent>
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
      </>
    </CommonDialog>
  );
}
