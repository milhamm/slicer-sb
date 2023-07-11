import { Ref, forwardRef } from "react";

import { cn, cva, VariantProps } from "@/lib/styles";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground  ",
        outline: "border border-primary text-primary",
      },
      size: {
        lg: "h-10 px-4 py-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const ButtonBase = (
  { children, variant, size, className, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => (
  <button
    type="button"
    ref={ref}
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  >
    {children}
  </button>
);

export const Button = forwardRef(ButtonBase);
