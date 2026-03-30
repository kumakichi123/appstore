import Link from "next/link";

import {
  commercialTransactionNotes,
  contactEmail,
  disclosureNotice,
  refundPolicy,
  sellerName,
  supportHours,
} from "@/data/legal";

const usageNotes = [
  "\u8cfc\u5165\u8005\u672c\u4eba\u306e\u5229\u7528\u3092\u524d\u63d0\u3068\u3057\u3066\u63d0\u4f9b\u3057\u307e\u3059\u3002",
  "\u30a2\u30d7\u30ea\u672c\u4f53\u3084\u4ed8\u5c5e\u30c7\u30fc\u30bf\u306e\u518d\u914d\u5e03\u3001\u8ee2\u58f2\u3001\u7121\u65ad\u5171\u6709\u3092\u7981\u6b62\u3057\u307e\u3059\u3002",
  "\u4ed5\u69d8\u3084\u63d0\u4f9b\u65b9\u6cd5\u306f\u54c1\u8cea\u6539\u5584\u306e\u305f\u3081\u306b\u5909\u66f4\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",
];

const privacyNotes = [
  "\u6ce8\u6587\u5bfe\u5fdc\u3068\u554f\u3044\u5408\u308f\u305b\u5bfe\u5fdc\u306e\u305f\u3081\u3001\u6c0f\u540d\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u6c7a\u6e08\u95a2\u9023\u60c5\u5831\u3092\u53d6\u6271\u3044\u307e\u3059\u3002",
  "\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u60c5\u5831\u306f Stripe \u304c\u53d6\u6271\u3044\u3001\u5f53\u30b5\u30a4\u30c8\u304c\u751f\u306e\u30ab\u30fc\u30c9\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002",
  "\u53d6\u5f97\u3057\u305f\u60c5\u5831\u306f\u5546\u54c1\u63d0\u4f9b\u3001\u672c\u4eba\u78ba\u8a8d\u3001\u6c7a\u6e08\u78ba\u8a8d\u3001\u4e0d\u6b63\u5229\u7528\u9632\u6b62\u306e\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002",
];

export default function CommercialPage() {
  return (
    <main className="legal-shell">
      <div className="legal-header">
        <Link className="legal-back" href="/">
          {"\u2190 \u30c8\u30c3\u30d7\u306b\u623b\u308b"}
        </Link>
        <h1>{"\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u57fa\u3065\u304f\u8868\u8a18"}</h1>
        <p>
          {
            "\u8cfc\u5165\u524d\u306b\u5fc5\u8981\u306a\u53d6\u5f15\u6761\u4ef6\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"
          }
        </p>
      </div>

      <section className="legal-card">
        <dl className="legal-list">
          {commercialTransactionNotes.map((item) => (
            <div key={item.term} className="legal-row">
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="legal-card">
        <h2>{"\u8fd4\u91d1\u30fb\u5229\u7528\u6761\u4ef6"}</h2>
        <p>{refundPolicy}</p>
        <ul className="legal-bullet-list">
          {usageNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="legal-card">
        <h2>{"\u500b\u4eba\u60c5\u5831\u306e\u53d6\u6271\u3044"}</h2>
        <ul className="legal-bullet-list">
          {privacyNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="legal-card">
        <h2>{"\u958b\u793a\u8acb\u6c42\u3068\u554f\u3044\u5408\u308f\u305b"}</h2>
        <p>{disclosureNotice}</p>
        <p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
        <p>{supportHours}</p>
        <p>{sellerName}</p>
      </section>
    </main>
  );
}
