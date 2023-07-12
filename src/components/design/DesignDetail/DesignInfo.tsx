import { DesignCard } from "../common/DesignCard";
import { Design } from "../types";

import { Button } from "@/components/common/ui";
import { cn } from "@/lib/styles";

type DesignInfoProps = {
  data: Design;
};

const DesignInfo = ({ data }: DesignInfoProps) => {
  return (
    <DesignCard
      className={cn("border-0 p-0 mb-6", "sm:border sm:p-4 sm:max-w-sm")}
      data={data}
    >
      <DesignCard.Prices className={cn("text-3xl")} />
      <Button size="lg" className={cn("w-full")}>
        Konsultasi Sekarang
      </Button>
    </DesignCard>
  );
};

export { DesignInfo };
