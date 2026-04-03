import type { Lang } from "@/lib/i18n";

type ContactButtonProps = {
  lang: Lang;
};

const gmailBase = "https://mail.google.com/mail/?view=cm&fs=1&to=applabworks2026@gmail.com";

const copyByLang = {
  ja: {
    subject: "お問い合わせ",
    body:
      "ご利用ありがとうございます。\n\n" +
      "以下をご記入のうえご連絡ください。\n\n" +
      "・ご用件：\n" +
      "・商品名：\n" +
      "・発生している内容：\n" +
      "・利用環境（Windowsのバージョンなど）：\n",
    label: "お問い合わせをGmailで開く",
    text: "お問い合わせ",
  },
  en: {
    subject: "Support request",
    body:
      "Thanks for using AppLab Works.\n\n" +
      "Please fill in the details below.\n\n" +
      "Subject:\n" +
      "Product name:\n" +
      "Issue or request:\n" +
      "Environment (Windows version, etc.):\n",
    label: "Open Gmail support form",
    text: "Contact",
  },
} as const;

export function ContactButton({ lang }: ContactButtonProps) {
  const copy = copyByLang[lang];
  const gmailComposeUrl =
    gmailBase +
    `&su=${encodeURIComponent(copy.subject)}` +
    `&body=${encodeURIComponent(copy.body)}`;

  return (
    <a
      href={gmailComposeUrl}
      className="contact-button"
      target="_blank"
      rel="noreferrer"
      aria-label={copy.label}
    >
      {copy.text}
    </a>
  );
}
