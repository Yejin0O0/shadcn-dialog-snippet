import CommonDialog from "@/components/common/CommonDialog";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import useDialogComponent from "@/hooks/useDialogComponent";
import { CircleUserIcon, Heart, Star } from "lucide-react";

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

interface ReviewNCommentProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.5;

export default function ReviewNComment({ type }: ReviewNCommentProps) {
  const {
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
  } = useDialogComponent({ dialogType: "dialog", type });

  return (
    <CommonDialog type={type} title="Review & Comments" scale={SCALE}>
      <>
        <DialogHeaderComponent>
          <DialogTitleComponent className="text-lg font-semibold text-center">
            Review & Comments
          </DialogTitleComponent>
          <DialogDescriptionComponent className="text-center text-sm text-gray-500">
            Check out user reviews and comments about the product or service.
          </DialogDescriptionComponent>
        </DialogHeaderComponent>

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
      </>
    </CommonDialog>
  );
}
