import { ComponentProps, forwardRef } from "react";
import Image from "next/image";

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
    <div className={cn("relative w-full h-52")}>
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

CardImage.displayName = "CardImage";

export const Card = Object.assign(CardContainer, {
  Image: CardImage,
});
