import { Design, DesignList } from "@/components/design/types";

export const MOCK_DESIGNS: DesignList[] = [
  {
    id: "design-1",
    name: "Omah Apik 1",
    thumbnail: "/designs/design-1/thumbnail.png",
    designer: {
      name: "Studio SAe",
      logo: "/designs/design-3/icons.png",
    },
    homeType: "Scandinavian",
    designType: "modifiable",
    specifications: {
      dimension: {
        width: 15,
        length: 8,
        unit: "m",
      },
      area: {
        size: 112,
        unit: "m",
      },
      floors: 2,
      bedRooms: 2,
    },
    prices: {
      currency: "IDR",
      design: 32_500_000,
      construction: 560_000_000,
    },
  },
  {
    id: "design-2",
    name: "Omah Apik 2",
    thumbnail: "/designs/design-3/thumbnail.png",
    designer: {
      name: "Studio SAe",
      logo: "/designs/design-3/icons.png",
    },
    homeType: "Scandinavian",
    designType: "modifiable",
    specifications: {
      dimension: {
        width: 15,
        length: 8,
        unit: "m",
      },
      area: {
        size: 112,
        unit: "m",
      },
      floors: 2,
      bedRooms: 2,
    },
    prices: {
      currency: "IDR",
      design: 32_500_000,
      construction: 560_000_000,
    },
  },
  {
    id: "design-3",
    name: "Omah Apik 3",
    thumbnail: "/designs/design-3/thumbnail.png",
    designer: {
      name: "Studio SAe",
      logo: "/designs/design-3/icons.png",
    },
    homeType: "Scandinavian",
    designType: "modifiable",
    specifications: {
      dimension: {
        width: 15,
        length: 8,
        unit: "m",
      },
      area: {
        size: 112,
        unit: "m",
      },
      floors: 2,
      bedRooms: 2,
    },
    prices: {
      currency: "IDR",
      design: 32_500_000,
      construction: 560_000_000,
    },
  },
  {
    id: "design-4",
    name: "Omah Apik 4",
    thumbnail: "/designs/design-3/thumbnail.png",
    designer: {
      name: "Studio SAe",
      logo: "/designs/design-3/icons.png",
    },
    homeType: "Scandinavian",
    designType: "modifiable",
    specifications: {
      dimension: {
        width: 15,
        length: 8,
        unit: "m",
      },
      area: {
        size: 112,
        unit: "m",
      },
      floors: 2,
      bedRooms: 2,
    },
    prices: {
      currency: "IDR",
      design: 32_500_000,
      construction: 560_000_000,
    },
  },
];

export const DETAIL_DESIGN: Record<string, Design> = {
  "design-3": {
    id: "design-3",
    name: "Omah Apik 3",
    thumbnail: "/designs/design-1/thumbnail.png",
    designer: {
      name: "Studio SAe",
      logo: "/designs/design-3/icons.png",
    },
    homeType: "Scandinavian",
    designType: "modifiable",
    reviews: [
      {
        name: "Budi Setiadi",
        rating: 4.5,
        review:
          "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
      },
      {
        name: "Budi Setiadi",
        rating: 4.5,
        review:
          "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
      },
      {
        name: "Budi Setiadi",
        rating: 4.5,
        review:
          "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
      },
    ],
    specifications: {
      dimension: {
        width: 15,
        length: 8,
        unit: "m",
      },
      area: {
        size: 112,
        unit: "m",
      },
      floors: 2,
      bedRooms: 2,
    },
    prices: {
      currency: "IDR",
      design: 32_500_000,
      construction: 560_000_000,
    },
    views: [
      {
        type: "living_room",
        image: "/designs/design-3/views/living.png",
        dimension: {
          width: 2.0,
          length: 2.9,
        },
      },
      {
        type: "bedroom",
        image: "/designs/design-3/views/bedroom-1.png",
        dimension: {
          width: 4.0,
          length: 3.4,
        },
      },
      {
        type: "dining_and_kitchen",
        image: "/designs/design-3/views/dining.png",
        dimension: {
          width: 3.0,
          length: 2.9,
        },
      },
      {
        type: "work_office",
        image: "/designs/design-3/views/office.png",
        dimension: {
          width: 2.0,
          length: 2.9,
        },
      },
      {
        type: "bedroom",
        image: "/designs/design-3/views/bedroom-2.png",
        dimension: {
          width: 4.0,
          length: 3.4,
        },
      },
    ],
  },
};
