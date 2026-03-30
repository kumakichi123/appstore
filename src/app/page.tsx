import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="store-shell">
      <header className="store-header">
        <div>
          <p className="eyebrow">App Store</p>
          <h1>{"\u30a2\u30d7\u30ea\u8ca9\u58f2\u6240"}</h1>
        </div>
        <p className="store-copy">
          {
            "Windows \u5411\u3051\u306e\u8cb7\u3044\u5207\u308a\u30a2\u30d7\u30ea\u3092\u3001\u30ab\u30fc\u30c9\u3067\u307e\u3068\u3081\u3066\u8ca9\u58f2\u3057\u307e\u3059\u3002"
          }
        </p>
      </header>

      <section
        className="product-grid"
        aria-label={"\u8ca9\u58f2\u4e2d\u306e\u30a2\u30d7\u30ea"}
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
