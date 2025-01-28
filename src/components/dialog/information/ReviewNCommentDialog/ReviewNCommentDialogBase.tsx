import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";

const comments = [
  {
    id: "comment1",
    userName: "User Name Here",
    date: "18 APR 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, ipsum at tristique consequat, turpis tellus ullamcorper turpis, at ullamcorper justo neque sed quam.",
    rating: 4,
    likes: 298,
  },
  {
    id: "comment2",
    userName: "User Name Here",
    date: "15 APR 2023",
    text: "Proin nibh augue, pellentesque sed lorem et, mattis facilisis lorem. Integer eu eros in justo porta luctus id in nulla. Morbi auctor magna sit amet elit tempor blandit.",
    rating: 3,
    likes: 178,
  },
];

export default function ReviewNCommentDialogBase() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          Open Reviews
        </Button>
      </DialogTrigger>
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
          <span className="text-4xl font-bold text-gray-800">3.75</span>
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
                    <AvatarImage
                      src="/user-placeholder.jpg"
                      alt={`${comment.userName}'s Avatar`}
                    />
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
