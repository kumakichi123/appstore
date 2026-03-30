import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label="Legal">
        <Link href="/legal/commercial">
          {"\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u57fa\u3065\u304f\u8868\u8a18"}
        </Link>
      </nav>
    </footer>
  );
}
