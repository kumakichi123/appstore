import { cookies } from "next/headers";
import Link from "next/link";

import { products } from "@/data/products";

type DownloadPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  const cookieStore = await cookies();
  const hasPurchaseCookie = cookieStore.get(`purchase_${slug}`)?.value === "1";

  if (!product) {
    return (
      <main className="download-shell">
        <section className="download-card">
          <p className="eyebrow">Download</p>
          <h1>商品が見つかりません</h1>
          <p className="download-copy">
            URL が正しくないか、商品設定がまだ反映されていません。
          </p>
          <Link href="/" className="download-link secondary-link">
            販売ページへ戻る
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="download-shell">
      <section className="download-card">
        <p className="eyebrow">Purchase Complete</p>
        <h1>{product.name}</h1>
        <p className="download-copy">
          {hasPurchaseCookie
            ? "このブラウザでは購入確認済みです。下のボタンからダウンロードページへ進んでください。"
            : "下のボタンからダウンロードページへ進んでください。購入直後に遷移していれば、このブラウザでは購入状態を保持します。"}
        </p>

        {product.downloadUrl ? (
          <a
            href={product.downloadUrl}
            className="download-link"
            target="_blank"
            rel="noreferrer"
          >
            ダウンロードページを開く
          </a>
        ) : (
          <div className="download-note-box">
            <p>まだダウンロードURLが設定されていません。</p>
            <p>
              `src/data/products.ts` の `downloadUrl` に配布URLを入れると、
              ここから直接配れるようになります。
            </p>
          </div>
        )}

        <div className="download-actions">
          <Link href="/" className="download-link secondary-link">
            販売ページへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
