import Image from "next/image";

import { PurchaseButton } from "@/components/purchase-button";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const priceLabel = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image
          className="product-image"
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="product-copy">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-note">
          {
            "\u6c7a\u6e08\u78ba\u8a8d\u5f8c 24 \u6642\u9593\u4ee5\u5185\u3092\u76ee\u5b89\u306b\u6848\u5185\u30e1\u30fc\u30eb\u3092\u304a\u9001\u308a\u3057\u307e\u3059\u3002"
          }
        </p>
      </div>

      <div className="product-footer">
        <p className="product-price">
          {"\u8cb7\u3044\u5207\u308a / Windows 10\u30fb11"}
        </p>
        <PurchaseButton productSlug={product.slug} priceLabel={priceLabel} />
      </div>
    </article>
  );
}
