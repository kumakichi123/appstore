import type { Lang } from "@/lib/i18n";

export type LocalizedText = Record<Lang, string>;

export type Product = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  currency: "jpy";
  image: string;
  downloadUrl?: string;
};

export const products: Product[] = [
  {
    slug: "cursor-change",
    name: {
      ja: "カーソル変身",
      en: "Cursor Change",
    },
    description: {
      ja: "Windowsのカーソルを動物カーソルに変えて、普段の操作を少し楽しくする買い切りアプリです。",
      en: "Swap the standard Windows cursor for playful animal cursor packs and make routine clicks feel less dull.",
    },
    price: 300,
    currency: "jpy",
    image: "/products/cursor-change.png",
    downloadUrl:
      "https://drive.google.com/file/d/1TcUteac4PjMfZiFAEH_liHnuMB63CWHG/view?usp=sharing",
  },
];
