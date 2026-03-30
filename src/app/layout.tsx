import type { Metadata } from "next";
import { ContactButton } from "@/components/contact-button";
import "./globals.css";

export const metadata: Metadata = {
  title: "\u30a2\u30d7\u30ea\u8ca9\u58f2\u6240",
  description:
    "Windows \u5411\u3051\u306e\u8cb7\u3044\u5207\u308a\u30a2\u30d7\u30ea\u3092\u8ca9\u58f2\u3059\u308b\u30b7\u30f3\u30d7\u30eb\u306a\u30b9\u30c8\u30a2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <ContactButton />
      </body>
    </html>
  );
}
