import Link from "next/link";

import type { Lang } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Lang;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label="Legal">
        <Link href="/legal/commercial">
          {lang === "ja" ? "特定商取引法に基づく表記" : "Legal / Seller Information"}
        </Link>
      </nav>
    </footer>
  );
}
