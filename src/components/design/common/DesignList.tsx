import { Design, DesignList } from "../types";

import { Section } from "@/components/common/Section";
import { Button, Space } from "@/components/common/ui";
import { DesignCard } from "./DesignCard";
import { cn } from "@/lib/styles";

type DesignListProps = {
  designs: DesignList[];
  title: string;
};

const DesignList = ({ designs, title }: DesignListProps) => {
  return (
    <Section title={title}>
      <Space wrap className={cn("lg:flex-nowrap")}>
        {designs.map((design, i) => {
          return (
            <DesignCard
              key={`design-${i}`}
              data={design}
              image={<DesignCard.Image />}
            >
              <DesignCard.Prices />
              <Button variant="outline" className={cn("w-full")}>
                Lihat Detail
              </Button>
            </DesignCard>
          );
        })}
      </Space>
    </Section>
  );
};

export { DesignList };
