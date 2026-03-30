export type Product = {
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: "jpy";
  image: string;
  downloadUrl?: string;
};

export const products: Product[] = [
  {
    slug: "cursor-change",
    name: "\u30ab\u30fc\u30bd\u30eb\u5909\u8eab",
    description:
      "Windows \u306e\u30ab\u30fc\u30bd\u30eb\u3092\u52d5\u7269\u30ab\u30fc\u30bd\u30eb\u306b\u5909\u3048\u3066\u3001\u666e\u6bb5\u306e\u64cd\u4f5c\u3092\u5c11\u3057\u697d\u3057\u304f\u3059\u308b\u8cb7\u3044\u5207\u308a\u30a2\u30d7\u30ea\u3067\u3059\u3002",
    price: 300,
    currency: "jpy",
    image: "/products/cursor-change.png",
    downloadUrl: "https://drive.google.com/file/d/1TcUteac4PjMfZiFAEH_liHnuMB63CWHG/view?usp=sharing",
  },
];
