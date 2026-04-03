import { cookies } from "next/headers";
import Link from "next/link";

import {
  commercialTransactionNotes,
  contactEmail,
  disclosureNotice,
  refundPolicy,
  sellerName,
  supportHours,
} from "@/data/legal";
import { resolveLang } from "@/lib/i18n";

const usageNotes = {
  ja: [
    "購入者本人の利用を前提として提供します。",
    "アプリ本体や付属データの再配布、転売、無断共有を禁止します。",
    "仕様や提供方法は品質改善のために変更する場合があります。",
  ],
  en: [
    "Products are provided for use by the purchaser.",
    "Redistribution, resale, or unauthorized sharing of the app or bundled assets is prohibited.",
    "Specifications and delivery methods may change to improve quality.",
  ],
} as const;

const privacyNotes = {
  ja: [
    "注文対応と問い合わせ対応のため、氏名、メールアドレス、決済関連情報を取り扱います。",
    "クレジットカード情報は Stripe が取り扱い、当サイトが生のカード情報を保持することはありません。",
    "取得した情報は商品提供、本人確認、決済確認、不正利用防止のために使用します。",
  ],
  en: [
    "We handle your name, email address, and payment-related information to process orders and support requests.",
    "Credit card details are handled by Stripe. This site does not store raw card data.",
    "Collected information is used for delivery, identity checks, payment verification, and fraud prevention.",
  ],
} as const;

export default async function CommercialPage() {
  const cookieStore = await cookies();
  const lang = resolveLang(cookieStore.get("lang")?.value);

  return (
    <main className="legal-shell">
      <div className="legal-header">
        <Link className="legal-back" href="/">
          {lang === "ja" ? "← トップに戻る" : "← Back to store"}
        </Link>
        <h1>
          {lang === "ja"
            ? "特定商取引法に基づく表記"
            : "Legal / Seller Information"}
        </h1>
        <p>
          {lang === "ja"
            ? "購入前に必要な取引条件をまとめています。"
            : "Important transaction terms to review before purchase."}
        </p>
      </div>

      <section className="legal-card">
        <dl className="legal-list">
          {commercialTransactionNotes[lang].map((item) => (
            <div key={item.term} className="legal-row">
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="legal-card">
        <h2>{lang === "ja" ? "返金・利用条件" : "Refunds and Terms of Use"}</h2>
        <p>{refundPolicy[lang]}</p>
        <ul className="legal-bullet-list">
          {usageNotes[lang].map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="legal-card">
        <h2>{lang === "ja" ? "個人情報の取扱い" : "Privacy"}</h2>
        <ul className="legal-bullet-list">
          {privacyNotes[lang].map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="legal-card">
        <h2>
          {lang === "ja" ? "開示請求と問い合わせ" : "Disclosure Requests and Contact"}
        </h2>
        <p>{disclosureNotice[lang]}</p>
        <p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
        <p>{supportHours[lang]}</p>
        <p>{sellerName[lang]}</p>
      </section>
    </main>
  );
}
