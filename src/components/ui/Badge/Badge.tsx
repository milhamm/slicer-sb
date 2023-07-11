import { forwardRef } from "react";

import { cn } from "@/lib/styles";

export type BadgeProps = {
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ label, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "px-3 py-1 bg-grey-100 rounded-full text-center font-normal",
        className
      )}
      {...props}
    >
      {label}
    </span>
  )
);

Badge.displayName = "Badge";

export { Badge };
