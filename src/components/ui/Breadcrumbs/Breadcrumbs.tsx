import React, {
  ComponentProps,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
} from "react";
import Link from "next/link";

import { Space } from "../Space";

import { ChevronRight } from "@/components/icons";
import { cn } from "@/lib/styles";

const BreadcrumbsContext = createContext<ReactNode>(null);

export type BreadcrumbsProps = {
  separator?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BreadcrumbsContainer = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ separator = <ChevronRight />, children, className, ...props }) => {
    return (
      <BreadcrumbsContext.Provider value={separator}>
        <Space size="sm" className={cn(className)} {...props}>
          {children}
        </Space>
      </BreadcrumbsContext.Provider>
    );
  }
);

BreadcrumbsContainer.displayName = "Breadcrumbs";

export type BreadcrumbsItemProps = ComponentProps<typeof Link>;

const BreadcrumbsItem = forwardRef<HTMLAnchorElement, BreadcrumbsItemProps>(
  ({ children, className, ...props }, ref) => {
    const separator = useContext(BreadcrumbsContext);
    return (
      <>
        <Link
          ref={ref}
          className={cn(
            "font-medium text-primary",
            "hover:underline last-of-type:pointer-events-none last-of-type:text-grey-600",
            className
          )}
          {...props}
        >
          {children}
        </Link>
        <div className={cn("last-of-type:hidden")}>{separator}</div>
      </>
    );
  }
);

BreadcrumbsItem.displayName = "Breadcrumbs.Item";

const Breadcrumbs = Object.assign(BreadcrumbsContainer, {
  Item: BreadcrumbsItem,
});

export { Breadcrumbs };
