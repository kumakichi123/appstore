import { cookies } from "next/headers";
import Link from "next/link";

import { CloudProductCard } from "@/components/cloud-product-card";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { cloudProducts } from "@/data/cloud-products";
import { products } from "@/data/products";
import { resolveLang } from "@/lib/i18n";

type HomeProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const cookieStore = await cookies();
  const lang = resolveLang(cookieStore.get("lang")?.value);
  const params = (await searchParams) ?? {};
  const category = params.category === "local" ? "local" : "cloud";

  return (
    <main className="store-shell">
      <header className="store-header">
        <div>
          <p className="eyebrow">App Store</p>
          <h1>{lang === "ja" ? "アプリ販売所" : "AppLab Works Store"}</h1>
        </div>
        <p className="store-copy">
          {lang === "ja"
            ? "クラウドツールと買い切りツールを、用途ごとに切り替えて見られます。"
            : "Browse cloud tools and one-time purchase apps by switching between the two storefronts."}
        </p>
      </header>

      <nav className="category-tabs" aria-label={lang === "ja" ? "販売カテゴリ" : "Store categories"}>
        <Link
          href="/"
          className={`category-tab ${category === "cloud" ? "is-active" : ""}`}
        >
          {lang === "ja" ? "クラウドツール" : "Cloud Tools"}
        </Link>
        <Link
          href="/?category=local"
          className={`category-tab ${category === "local" ? "is-active" : ""}`}
        >
          {lang === "ja" ? "買い切りツール" : "One-Time Tools"}
        </Link>
      </nav>

      <section className="store-section">
        <div>
          <p className="section-kicker">
            {category === "cloud"
              ? lang === "ja"
                ? "Cloud Tools"
                : "Cloud Tools"
              : lang === "ja"
                ? "One-Time Tools"
                : "One-Time Tools"}
          </p>
          <h2 className="section-title">
            {category === "cloud"
              ? lang === "ja"
                ? "ブラウザですぐ使えるツール"
                : "Tools you can use instantly in the browser"
              : lang === "ja"
                ? "買い切りで使えるデスクトップツール"
                : "Desktop tools sold as one-time purchases"}
          </h2>
        </div>
        <p className="section-copy">
          {category === "cloud"
            ? lang === "ja"
              ? "ログイン後すぐに使えるWebアプリを並べています。各カードから個別サイトへ移動します。"
              : "These cards open hosted web apps directly once you choose one."
            : lang === "ja"
              ? "いま販売中の既存アプリはすべてこちらにまとめています。"
              : "All currently sold downloadable apps are grouped here."}
        </p>
      </section>

      <section
        className="product-grid"
        aria-label={
          category === "cloud"
            ? lang === "ja"
              ? "販売中のクラウドツール"
              : "Cloud tools"
            : lang === "ja"
              ? "販売中の買い切りツール"
              : "One-time purchase tools"
        }
      >
        {category === "cloud"
          ? cloudProducts.map((product) => (
              <CloudProductCard key={product.slug} product={product} lang={lang} />
            ))
          : products.map((product) => (
              <ProductCard key={product.slug} product={product} lang={lang} />
            ))}
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
