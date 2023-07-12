import { ViewDimension } from "../types";

import { VIEW_HOME_DISPLAY_NAMES } from "./constanst";

import { Card } from "@/components/common/ui";
import { cn } from "@/lib/styles";

type HomeViewCardProps = {
  src: string;
  alt: string;
  type: string;
  dimension: ViewDimension;
};

const HomeViewCard = ({ src, alt, type, dimension }: HomeViewCardProps) => {
  return (
    <div className={cn("w-1/2 p-1", "sm:w-1/3 sm:p-1")}>
      <Card>
        <Card.Image src={src} alt={alt} />
        <Card.Title
          className={cn("text-sm font-semibold", "sm:text-lg sm:font-bold")}
        >
          {VIEW_HOME_DISPLAY_NAMES[type]}
        </Card.Title>
        <p>{`${dimension.width.toFixed(2)} x ${dimension.length.toFixed(
          2
        )}`}</p>
      </Card>
    </div>
  );
};

export { HomeViewCard };
