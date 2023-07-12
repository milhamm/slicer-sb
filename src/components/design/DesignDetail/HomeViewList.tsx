import { View } from "../types";
import { HomeViewCard } from "../common";

import { Space } from "@/components/common/ui";
import { Section } from "@/components/common/Section";
import { cn } from "@/lib/styles";

type HomeViewListProps = {
  data: View[];
};

const HomeViewList = ({ data }: HomeViewListProps) => (
  <Section title="Tampilan Rumah">
    <Space className={cn("-mx-2")} size="default" wrap>
      {data.map(({ dimension, image, type }, i) => {
        return (
          <HomeViewCard
            alt={type}
            dimension={dimension}
            type={type}
            src={image}
            key={`view-${i}`}
          />
        );
      })}
    </Space>
  </Section>
);

export { HomeViewList };
