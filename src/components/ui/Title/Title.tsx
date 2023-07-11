import { ElementType, forwardRef } from "react";

import { VariantProps, cn, cva } from "@/lib/styles";

const titleMap = {
  1: "h1",
  2: "h2",
};

const titleVariants = cva("font-bold", {
  variants: {
    order: {
      1: "text-xl",
      2: "text-md",
    },
  },
  defaultVariants: {
    order: 1,
  },
});

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants>;

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ order = 1, className, ...props }) => {
    const Comp = order ? titleMap[order] : ("h1" as ElementType);
    return (
      <Comp className={cn(titleVariants({ order, className }))} {...props} />
    );
  }
);

Title.displayName = "Title";

export { Title };
