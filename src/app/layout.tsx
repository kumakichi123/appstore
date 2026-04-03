import type { Metadata } from "next";
import { cookies } from "next/headers";

import { ContactButton } from "@/components/contact-button";
import { LangToggle } from "@/components/lang-toggle";
import { resolveLang } from "@/lib/i18n";

import "./globals.css";

export const metadata: Metadata = {
  title: "AppLab Works Store",
  description: "A simple storefront for one-time Windows apps.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = resolveLang(cookieStore.get("lang")?.value);

  return (
    <html lang={lang}>
      <body>
        <LangToggle lang={lang} />
        {children}
        <ContactButton lang={lang} />
      </body>
    </html>
  );
}
