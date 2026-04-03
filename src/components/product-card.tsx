import Image from "next/image";

import { PurchaseButton } from "@/components/purchase-button";
import type { Product } from "@/data/products";
import type { Lang } from "@/lib/i18n";

type ProductCardProps = {
  product: Product;
  lang: Lang;
};

export function ProductCard({ product, lang }: ProductCardProps) {
  const priceLabel = new Intl.NumberFormat(lang === "ja" ? "ja-JP" : "en-US", {
    style: "currency",
    currency: product.currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image
          className="product-image"
          src={product.image}
          alt={product.name[lang]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="product-copy">
        <h2 className="product-name">{product.name[lang]}</h2>
        <p className="product-description">{product.description[lang]}</p>
        <p className="product-note">
          {lang === "ja"
            ? "決済確認後24時間以内を目安に、ダウンロード案内をメールで送ります。"
            : "Download instructions are sent within 24 hours after payment is confirmed."}
        </p>
      </div>

      <div className="product-footer">
        <p className="product-price">
          {lang === "ja" ? "買い切り / Windows 10・11" : "One-time purchase / Windows 10-11"}
        </p>
        <PurchaseButton productSlug={product.slug} priceLabel={priceLabel} lang={lang} />
      </div>
    </article>
  );
}
