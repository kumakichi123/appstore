import Image from "next/image";

import type { CloudProduct } from "@/data/cloud-products";
import type { Lang } from "@/lib/i18n";

type CloudProductCardProps = {
  product: CloudProduct;
  lang: Lang;
};

export function CloudProductCard({ product, lang }: CloudProductCardProps) {
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
        <p className="product-badge">{product.badge[lang]}</p>
        <h2 className="product-name">{product.name[lang]}</h2>
        <p className="product-description">{product.description[lang]}</p>
        <p className="product-note">
          {lang === "ja"
            ? "購入処理ではなく、公開中のクラウド版へそのまま移動します。"
            : "This opens the live cloud app directly instead of starting a checkout flow."}
        </p>
      </div>

      <div className="product-footer">
        <p className="product-price">
          {lang === "ja" ? "ブラウザで利用" : "Use in browser"}
        </p>
        <a
          className="buy-button"
          href={product.href}
          target="_blank"
          rel="noreferrer"
        >
          {product.ctaLabel[lang]}
        </a>
      </div>
    </article>
  );
}
