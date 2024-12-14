export const UserProfileDialogBaseString =
  'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\nimport { Button } from "@/components/ui/button";\nimport {\n  Dialog,\n  DialogContent,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog";\nimport { MessageCircle, MoreHorizontal, User } from "lucide-react";\n\nexport function UserProfileDialogBase() {\n  return (\n    <Dialog>\n      <DialogTrigger asChild>\n        <Button variant="outline" className="w-fit">\n          User Profile\n        </Button>\n      </DialogTrigger>\n\n      <DialogContent className="sm:max-w-[450px] rounded-lg shadow-lg p-8 bg-white">\n        <DialogHeader>\n          <div\n            className="relative w-full h-32 bg-gray-200 rounded-t-lg flex justify-center items-center"\n            style={{\n              backgroundImage: \'url("https://picsum.photos/500/200")\',\n              backgroundSize: "cover",\n              backgroundPosition: "center",\n            }}\n          >\n            <Avatar className="absolute -bottom-12 w-24 h-24 rounded-full border-4 border-white shadow-lg">\n              <AvatarImage\n                src="https://avatar.iran.liara.run/public/15"\n                alt="User profile image"\n              />\n              <AvatarFallback>JD</AvatarFallback>\n            </Avatar>\n          </div>\n        </DialogHeader>\n\n        <div className="flex flex-col items-center mt-10">\n          <DialogTitle className="text-center text-2xl font-semibold text-gray-800">\n            John Doe\n          </DialogTitle>\n          <p className="text-center text-sm text-gray-500">\n            @johndoe • San Francisco • Joined Jan 2022\n          </p>\n\n          <div className="flex justify-center space-x-4 mt-4">\n            <Button variant="default" className="w-fit">\n              <User />\n              Follow\n            </Button>\n            <Button variant="outline" className="w-fit">\n              <MessageCircle />\n              Message\n            </Button>\n            <Button variant="outline" className="w-fit">\n              <MoreHorizontal />\n              More\n            </Button>\n          </div>\n\n          <p className="text-center text-sm text-gray-600 mt-4 leading-relaxed px-4">\n            Tech enthusiast and software developer. Passionate about AI and\n            open-source technologies. Let\'s build something amazing!\n          </p>\n        </div>\n      </DialogContent>\n    </Dialog>\n  );\n}\n';
