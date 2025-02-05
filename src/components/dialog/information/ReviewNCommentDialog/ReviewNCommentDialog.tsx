import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { CircleUserIcon, ExpandIcon, Heart, Star, XIcon } from "lucide-react";
import { useState } from "react";

const comments = [
  {
    id: "comment1",
    userName: "User Name Here",
    date: "18 APR 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, ipsum at tristique consequat, turpis tellus ullamcorper turpis, at ullamcorper justo neque sed quam.",
    rating: 4,
    likes: 298,
  },
];

interface ReviewNCommentDialogProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.5;

export function ReviewNCommentDialog({ type }: ReviewNCommentDialogProps) {
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
        <DialogContent className="max-w-md rounded-lg bg-white p-6 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center">
              Review & Comments
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-gray-500">
              Check out user reviews and comments about the product or service.
            </DialogDescription>
          </DialogHeader>

          <div className="text-center mt-4">
            <span className="text-4xl font-bold text-gray-800">4</span>
            <div className="flex justify-center items-center mt-2">
              {[1, 2, 3, 4, 5].map((key, index) => (
                <Star
                  key={`rating-star-${key}`}
                  className={
                    index < 4
                      ? "w-6 h-6 text-yellow-400"
                      : "w-6 h-6 text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">(1,297 Reviews)</span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Most liked comments</h3>
            {comments.map((comment) => (
              <Card
                key={comment.id}
                className="mb-4 border border-gray-200 shadow-sm"
              >
                <CardContent className="p-4 flex flex-col">
                  <div className="flex items-center mb-3">
                    <Avatar className="mr-3">
                      <CircleUserIcon size={40} />
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{comment.userName}</p>
                      <p className="text-xs text-gray-500">{comment.date}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">{comment.text}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star
                          key={`comment-${comment.id}-star-${i}`}
                          className={
                            i < comment.rating
                              ? "w-4 h-4 text-yellow-400"
                              : "w-4 h-4 text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <div className="text-gray-600 text-sm flex items-center gap-1">
                      <Heart className="w-4" /> {comment.likes} Liked
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
          Open Reviews
        </Button>
        {isOpen && (
          <div
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE})`,
            }}
            className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
          >
            <div>
              <h2 className="text-lg font-semibold text-center">
                Review & Comments
              </h2>
              <p className="text-center text-sm text-gray-500">
                Check out user reviews and comments about the product or
                service.
              </p>
            </div>

            <div className="absolute right-4 top-4 cursor-pointer z-10">
              <XIcon
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="text-center mt-4">
              <span className="text-4xl font-bold text-gray-800">4</span>
              <div className="flex justify-center items-center mt-2">
                {[1, 2, 3, 4, 5].map((key, index) => (
                  <Star
                    key={`rating-star-${key}`}
                    className={
                      index < 4
                        ? "w-6 h-6 text-yellow-400"
                        : "w-6 h-6 text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">(1,297 Reviews)</span>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">
                Most liked comments
              </h3>
              {comments.map((comment) => (
                <Card
                  key={comment.id}
                  className="mb-4 border border-gray-200 shadow-sm"
                >
                  <CardContent className="p-4 flex flex-col">
                    <div className="flex items-center mb-3">
                      <Avatar className="mr-3">
                        <CircleUserIcon size={35} />
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {comment.userName}
                        </p>
                        <p className="text-xs text-gray-500">{comment.date}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">{comment.text}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <Star
                            key={`comment-${comment.id}-star-${i}`}
                            className={
                              i < comment.rating
                                ? "w-4 h-4 text-yellow-400"
                                : "w-4 h-4 text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <div className="text-gray-600 text-sm flex items-center gap-1">
                        <Heart className="w-4" /> {comment.likes} Liked
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
