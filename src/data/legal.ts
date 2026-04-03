import type { Lang } from "@/lib/i18n";

type LocalizedText = Record<Lang, string>;

type LegalItem = {
  term: string;
  description: string;
};

export const sellerName: LocalizedText = {
  ja: "朝部耀平",
  en: "Yohei Asabe",
};

export const contactEmail = "applabworks2026@gmail.com";

export const disclosureNotice: LocalizedText = {
  ja: "住所・電話番号は、特定商取引法に基づく請求があれば、遅滞なく開示します。",
  en: "Address and phone number will be disclosed promptly upon a valid request under the Act on Specified Commercial Transactions.",
};

export const supportHours: LocalizedText = {
  ja: "原則として平日 10:00-18:00 に順次対応します。",
  en: "Support inquiries are handled on weekdays between 10:00 and 18:00 JST.",
};

export const fulfillmentPolicy: LocalizedText = {
  ja: "決済確認後 24 時間以内を目安に、ダウンロード手順または提供案内をメールでご連絡します。",
  en: "Within 24 hours after payment is confirmed, you will receive an email with download instructions or delivery details.",
};

export const refundPolicy: LocalizedText = {
  ja: "デジタル商品の性質上、購入後の自己都合による返金・キャンセルはお受けしていません。ただし、重大な不具合により利用できず、修正または代替手段を提示できない場合は個別に対応します。",
  en: "Because these are digital products, refunds or cancellations for customer convenience are not accepted after purchase. If a serious defect prevents use and no fix or alternative can be provided, we will review the case individually.",
};

export const paymentMethods: LocalizedText = {
  ja: "クレジットカード決済、その他 Stripe Checkout が提供する決済手段",
  en: "Credit cards and other payment methods supported by Stripe Checkout.",
};

export const commercialTransactionNotes: Record<Lang, LegalItem[]> = {
  ja: [
    {
      term: "販売事業者",
      description: sellerName.ja,
    },
    {
      term: "連絡先メールアドレス",
      description: contactEmail,
    },
    {
      term: "住所・電話番号",
      description: disclosureNotice.ja,
    },
    {
      term: "販売価格",
      description: "各商品ページに表示した金額（税込）",
    },
    {
      term: "商品代金以外の必要料金",
      description: "インターネット接続に必要な通信料はお客様のご負担となります。",
    },
    {
      term: "支払時期・方法",
      description:
        "注文時に Stripe Checkout を通じてお支払いいただきます。 " +
        paymentMethods.ja,
    },
    {
      term: "引渡時期",
      description: fulfillmentPolicy.ja,
    },
    {
      term: "返金・キャンセル",
      description: refundPolicy.ja,
    },
    {
      term: "動作環境",
      description: "Windows 10 または Windows 11 を想定しています。商品ごとの詳細は販売ページでご確認ください。",
    },
  ],
  en: [
    {
      term: "Seller",
      description: sellerName.en,
    },
    {
      term: "Contact email",
      description: contactEmail,
    },
    {
      term: "Address / phone number",
      description: disclosureNotice.en,
    },
    {
      term: "Price",
      description: "The amount shown on each product page, including tax.",
    },
    {
      term: "Additional costs",
      description:
        "Internet connection or communication costs required to use the service are the customer's responsibility.",
    },
    {
      term: "Payment timing / method",
      description:
        "Payment is completed through Stripe Checkout at the time of order. " +
        paymentMethods.en,
    },
    {
      term: "Delivery timing",
      description: fulfillmentPolicy.en,
    },
    {
      term: "Refund / cancellation",
      description: refundPolicy.en,
    },
    {
      term: "System requirements",
      description: "Windows 10 or Windows 11. Check each product page for details.",
    },
  ],
};
