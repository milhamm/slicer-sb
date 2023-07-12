import { ComponentProps, forwardRef } from "react";
import Image from "next/image";

import { Title, TitleProps } from "../Title";

import { cn } from "@/lib/styles";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const CardContainer = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full p-2 border border-stone-200 rounded-lg",
        "sm:p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

CardContainer.displayName = "Card";

export type CardImageProps = ComponentProps<typeof Image>;

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, alt, ...props }, ref) => (
    <div className={cn("relative w-full h-40 mb-3", "sm:mb-6 sm:h-52")}>
      <Image
        fill
        ref={ref}
        alt={alt}
        className={cn("rounded object-cover", className)}
        {...props}
      />
    </div>
  )
);

CardImage.displayName = "Card.Image";

const CardTitle = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...props }, ref) => (
    <Title ref={ref} className={cn("mb-1", "sm:mb-3", className)} {...props} />
  )
);

CardTitle.displayName = "Card.Title";

export const Card = Object.assign(CardContainer, {
  Image: CardImage,
  Title: CardTitle,
});
