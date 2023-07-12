import { forwardRef } from "react";

import { VariantProps, cn, cva } from "@/lib/styles";

const spaceVariants = cva("flex", {
  variants: {
    size: {
      default: "gap-0",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-9",
    },
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    wrap: {
      true: "flex-wrap",
    },
  },
  defaultVariants: {
    size: "md",
    direction: "horizontal",
    wrap: false,
  },
});

type SpaceProps = VariantProps<typeof spaceVariants> &
  React.HTMLAttributes<HTMLDivElement>;

const Space = forwardRef<HTMLDivElement, SpaceProps>(
  ({ size, direction, wrap, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(spaceVariants({ size, direction, wrap }), className)}
      {...props}
    >
      {children}
    </div>
  )
);

Space.displayName = "Space";

export { Space, spaceVariants };
