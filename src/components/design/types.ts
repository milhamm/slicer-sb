export type Design = {
  id: string;
  name: string;
  designer: Designer;
  homeType: string;
  thumbnail: string;
  designType: string;
  specifications: Specifications;
  prices: Prices;
  reviews: Review[];
  views: View[];
};

export type DesignList = Omit<Design, "views" | "reviews">;

export type Designer = {
  name: string;
  logo: string;
};

export type Prices = {
  currency: string;
  design: number;
  construction: number;
};

export type Specifications = {
  dimension: SpecificationsDimension;
  area: Area;
  floors: number;
  bedRooms: number;
};

export type Area = {
  size: number;
  unit: string;
};

export type SpecificationsDimension = {
  width: number;
  length: number;
  unit: string;
};

export type View = {
  type: string;
  image: string;
  dimension: ViewDimension;
};

export type ViewDimension = {
  width: number;
  length: number;
};

export type Review = {
  name: string;
  rating: number;
  review: string;
};
