import { DesignList } from "../common/DesignList";
import { DesignRating } from "../common/DesignRating";

import { DesignInfo } from "./DesignInfo";
import { HomeViewList } from "./HomeViewList";

import { Container, Space } from "@/components/common/ui";
import { DETAIL_DESIGN, MOCK_DESIGNS } from "@/mocks/designs";
import { cn } from "@/lib/styles";

const DesignDetail = () => {
  // Replace with your data here
  const designs = MOCK_DESIGNS;
  const data = DETAIL_DESIGN[designs[2].id];
  const { views, designer, reviews } = data;

  return (
    <>
      <div className="h-[32rem] bg-red-200 w-full mb-6"></div>
      <Container>
        <Space
          className={cn("flex-col-reverse mb-28", "sm:flex-row")}
          size="lg"
        >
          <HomeViewList data={views} />
          <Space direction="vertical">
            <DesignInfo data={data} />
            <DesignRating reviews={reviews} />
          </Space>
        </Space>
        <DesignList
          title={`Desain Lainnya oleh ${designer.name}`}
          designs={designs}
        />
      </Container>
    </>
  );
};

export { DesignDetail };
