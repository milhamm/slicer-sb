import { forwardRef } from "react";

import { VariantProps, cn, cva } from "@/lib/styles";

const containerVariants = cva("max-w-screen-2xl mx-auto px-4");

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants(), className)} {...props} />
  )
);

Container.displayName = "Container";

export { Container, containerVariants };
