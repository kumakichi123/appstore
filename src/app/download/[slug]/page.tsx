import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";
import { resolveLang } from "@/lib/i18n";

type DownloadPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const cursorChangeGuide = {
  ja: [
    {
      src: "/guides/cursor-change/step-2-folder.png",
      alt: "展開後の cursor-change フォルダを開く画面",
      title: "1. ZIPファイルを展開",
      body: "「すべて展開」を押して解凍します。",
    },
    {
      src: "/guides/cursor-change/step-1-zip.png",
      alt: "ダウンロードした zip ファイルを選択している画面",
      title: "2. ZIPファイルを選択",
      body: "ダウンロードした cursor-change.zip を選択します。",
    },
    {
      src: "/guides/cursor-change/step-3-exe.png",
      alt: "cursor-change.exe が表示されている画面",
      title: "3. cursor-change.exe を起動",
      body: "フォルダ内の cursor-change.exe をダブルクリックして起動します。",
    },
    {
      src: "/guides/cursor-change/step-4-details.png",
      alt: "Windows Defender SmartScreen の詳細情報を押す画面",
      title: "4. 警告が出たら詳細情報",
      body: "Windows の警告が表示された場合は「詳細情報」を押してください。",
    },
    {
      src: "/guides/cursor-change/step-5-run.png",
      alt: "Windows Defender SmartScreen で実行を押す画面",
      title: "5. 実行を押す",
      body: "続けて「実行」を押すと起動できます。",
    },
  ],
  en: [
    {
      src: "/guides/cursor-change/step-2-folder.png",
      alt: "Open the extracted cursor-change folder",
      title: "1. Extract the ZIP file",
      body: 'Click "Extract All" and unpack the archive.',
    },
    {
      src: "/guides/cursor-change/step-1-zip.png",
      alt: "Select the downloaded ZIP file",
      title: "2. Select the ZIP file",
      body: "Choose the downloaded cursor-change.zip file.",
    },
    {
      src: "/guides/cursor-change/step-3-exe.png",
      alt: "The cursor-change.exe file is visible",
      title: "3. Run cursor-change.exe",
      body: "Open the folder and double-click cursor-change.exe.",
    },
    {
      src: "/guides/cursor-change/step-4-details.png",
      alt: "Open the Windows Defender SmartScreen details view",
      title: "4. If Windows shows a warning, open Details",
      body: 'If Windows Defender SmartScreen appears, click "More info."',
    },
    {
      src: "/guides/cursor-change/step-5-run.png",
      alt: "Click Run in Windows Defender SmartScreen",
      title: "5. Click Run anyway",
      body: 'Click "Run anyway" to launch the app.',
    },
  ],
} as const;

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = resolveLang(cookieStore.get("lang")?.value);
  const product = products.find((item) => item.slug === slug);
  const hasPurchaseCookie = cookieStore.get(`purchase_${slug}`)?.value === "1";
  const showCursorGuide = slug === "cursor-change";

  if (!product) {
    return (
      <main className="download-shell">
        <section className="download-card">
          <p className="eyebrow">Download</p>
          <h1>{lang === "ja" ? "商品が見つかりません" : "Product not found"}</h1>
          <p className="download-copy">
            {lang === "ja"
              ? "URL が正しくないか、販売設定がまだ完了していません。"
              : "The URL is invalid or this product has not been configured for sale yet."}
          </p>
          <Link href="/" className="download-link secondary-link">
            {lang === "ja" ? "販売ページへ戻る" : "Back to store"}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="download-shell">
      <section className="download-card">
        <p className="eyebrow">
          {lang === "ja" ? "購入完了" : "Purchase Complete"}
        </p>
        <h1>{product.name[lang]}</h1>
        <p className="download-copy">
          {hasPurchaseCookie
            ? lang === "ja"
              ? "購入確認が完了しました。下のボタンからダウンロードし、案内に沿って起動してください。"
              : "Your purchase has been confirmed. Use the button below to download the app and follow the guide to launch it."
            : lang === "ja"
              ? "下のボタンからダウンロードし、案内に沿って起動してください。"
              : "Use the button below to download the app and follow the guide to launch it."}
        </p>

        {product.downloadUrl ? (
          <a
            href={product.downloadUrl}
            className="download-link"
            target="_blank"
            rel="noreferrer"
          >
            {lang === "ja" ? "ダウンロードページを開く" : "Open download page"}
          </a>
        ) : (
          <div className="download-note-box">
            <p>
              {lang === "ja"
                ? "まだダウンロード URL が設定されていません。"
                : "No download URL has been configured yet."}
            </p>
            <p>
              {lang === "ja"
                ? "`src/data/products.ts` の `downloadUrl` に配布 URL を入れてください。"
                : "Add the delivery URL to `downloadUrl` in `src/data/products.ts`."}
            </p>
          </div>
        )}

        {showCursorGuide ? (
          <>
            <div className="download-note-box">
              <p className="download-note-title">
                {lang === "ja" ? "Windows の警告について" : "About the Windows warning"}
              </p>
              <p>
                {lang === "ja"
                  ? "この表示は、アプリにコード署名がまだ付いていないため表示されます。本来は有料のコード署名を付けると警告が出にくくなりますが、現状は費用面の都合で未対応です。"
                  : "This warning appears because the app is not code signed yet. Paid code signing would reduce these warnings, but it has not been added yet due to cost."}
              </p>
              <p>
                {lang === "ja"
                  ? "ご不便をおかけしてすみません。`詳細情報` → `実行` で起動できます。"
                  : 'You can still launch the app with "More info" -> "Run anyway".'}
              </p>
            </div>

            <section className="download-guide">
              {cursorChangeGuide[lang].map((step) => (
                <article key={step.src} className="guide-card">
                  <div className="guide-image-wrap">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      width={732}
                      height={384}
                      className="guide-image"
                    />
                  </div>
                  <div className="guide-copy">
                    <h2>{step.title}</h2>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </section>
          </>
        ) : null}

        <div className="download-actions">
          <Link href="/" className="download-link secondary-link">
            {lang === "ja" ? "販売ページへ戻る" : "Back to store"}
          </Link>
        </div>
      </section>
    </main>
  );
}
