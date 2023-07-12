import { cn } from "@/lib/styles";
import { Specifications } from "../types";

import { Space } from "@/components/common/ui";
import {
  SPECIFICATION_TYPES_DISPLAY_NAMES,
  SPECIFICATION_TYPES_ICONS,
} from "./constanst";
import Image from "next/image";
import { useId } from "react";

type SpecificationListProps = {
  specification: Specifications;
};

const mapSpecificationToValues = (V: Specifications, K: string) => {
  switch (K) {
    case "dimension":
      return `${V[K].width} x ${V[K].length}${V[K].unit}`;
    case "area":
      return (
        <span>
          {`${V[K].size}${V[K].unit}`}
          <sup>2</sup>
        </span>
      );
  }
  // @ts-ignore
  return `${V[K]}`;
};

const SpecificationList = ({ specification }: SpecificationListProps) => {
  const uniqueId = useId();
  return (
    <Space className={cn("items-center py-4 mb-4 border-b border-b-grey-200")}>
      {Object.keys(specification).map((specsKey) => {
        return (
          <Space
            className={cn("items-center justify-between w-full")}
            size="default"
            direction="vertical"
            key={`${uniqueId}-${specsKey}`}
          >
            <div className="relative h-6 w-full">
              <Image
                fill
                src={SPECIFICATION_TYPES_ICONS[specsKey]}
                alt={specsKey}
              />
            </div>
            <span
              className={cn(
                "text-xs text-grey-600 text-center whitespace-nowrap"
              )}
            >
              {SPECIFICATION_TYPES_DISPLAY_NAMES[specsKey]}
            </span>
            <span className={cn("text-xs text-center")}>
              {mapSpecificationToValues(specification, specsKey)}
            </span>
          </Space>
        );
      })}
    </Space>
  );
};

export { SpecificationList };
