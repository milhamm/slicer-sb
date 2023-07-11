import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function clsm(...args: ClassArray) {
  return twMerge(clsx(...args));
}
