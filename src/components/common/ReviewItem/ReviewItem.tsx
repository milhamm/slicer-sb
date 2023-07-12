import { Space } from "../ui";
import { Star } from "../icons";

import { cn } from "@/lib/styles";

export type ReviewItemProps = {
  name: string;
  rating: number;
  review: string;
};

const ReviewItem = ({ name, rating, review }: ReviewItemProps) => {
  return (
    <Space>
      <div className="bg-red-200 rounded-full h-12  aspect-square"></div>
      <div>
        <div className={cn("flex")}>
          <span className="font-medium pr-3 mr-3 border-r">{name}</span>
          <div className={cn("flex gap-2")}>
            <Star />
            <span className={cn("text-grey-600")}>{rating}</span>
          </div>
        </div>
        <p className={cn("mt-2 text-grey-700")}>{review}</p>
      </div>
    </Space>
  );
};

export { ReviewItem };
