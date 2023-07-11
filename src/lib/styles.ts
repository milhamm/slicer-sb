import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

function cn(...args: ClassArray) {
  return twMerge(clsx(...args));
}

export { cn, cva };
export type { VariantProps };
