import { ComponentProps, forwardRef } from "react";
import Image from "next/image";

import { Title, TitleProps } from "../Title";

import { cn } from "@/lib/styles";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const CardContainer = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full p-4 border border-stone-200 rounded", className)}
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
    <div className={cn("relative w-full h-52 mb-6")}>
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
    <Title ref={ref} className={cn("mb-3")} {...props} />
  )
);

CardTitle.displayName = "Card.Title";

export const Card = Object.assign(CardContainer, {
  Image: CardImage,
  Title: CardTitle,
});
