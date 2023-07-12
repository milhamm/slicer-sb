import { Section } from "@/components/common/Section";
import { ReviewItem } from "@/components/common/ReviewItem";

import { Review } from "../types";
import { cn } from "@/lib/styles";

type DesignRatingProps = {
  reviews: Review[];
};

const DesignRating = ({ reviews }: DesignRatingProps) => {
  return (
    <Section title="Testimoni">
      <ul className={cn("flex flex-col gap-5")}>
        {reviews.map(({ name, rating, review }, i) => (
          <li key={`review-${i}`}>
            <ReviewItem name={name} rating={rating} review={review} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export { DesignRating };
