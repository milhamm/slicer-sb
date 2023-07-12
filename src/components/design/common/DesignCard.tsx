import { createContext, useContext } from "react";
import Image from "next/image";

import { DesignList, Prices } from "../types";
import { SpecificationList } from "./SpesificationList";

import { Badge, Card, Space } from "@/components/common/ui";
import { cn } from "@/lib/styles";

type DesignCardProps = {
  data: DesignList;
  children: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
};

const priceFormat = (currency: string) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currency,
  });

const DesignCardContext = createContext<{
  name?: string;
  thumbnail?: string;
  prices?: Prices;
}>({});

const DesignCard = ({
  data: {
    id,
    name,
    designType,
    designer,
    homeType,
    prices,
    specifications,
    thumbnail,
  },
  children,
  className,
  image,
}: DesignCardProps) => {
  return (
    <DesignCardContext.Provider
      value={{
        name,
        thumbnail,
        prices,
      }}
    >
      <Card className={cn(className)}>
        {image}
        <Card.Title>
          {name} <Badge className={cn("ml-3 text-sm")} label={homeType} />
        </Card.Title>
        <Space size="default" className={cn("items-center gap-2")}>
          <Image
            width={28}
            height={28}
            src={designer.logo}
            alt={`${designer.name} logo`}
          />
          <span>{designer.name}</span>
        </Space>
        <SpecificationList specification={specifications} />
        {children}
      </Card>
    </DesignCardContext.Provider>
  );
};

const DesignCardThumbnail = () => {
  const { thumbnail, name } = useContext(DesignCardContext);
  if (!thumbnail || !name) return null;

  return <Card.Image src={thumbnail} alt={name} />;
};

type DesignCardPricesProps = {
  className?: string;
};

const DesignCardPrices = ({ className }: DesignCardPricesProps) => {
  const { prices } = useContext(DesignCardContext);

  if (!prices) return null;

  return (
    <Space direction="vertical" className={cn("gap-2 mb-4")}>
      <span className={cn("text-sm")}>Harga Desain</span>
      <p className={cn("font-semibold text-lg", className)}>
        {priceFormat(prices.currency).format(prices.design)}
      </p>
      <span className={cn("text-sm text-grey-600")}>
        Harga konstruksi mulai dari{" "}
        {priceFormat(prices.currency).format(prices.construction)}
      </span>
    </Space>
  );
};

DesignCard.Prices = DesignCardPrices;
DesignCard.Image = DesignCardThumbnail;

export { DesignCard };
