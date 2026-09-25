import { useEffect, useState } from "react";

const APP_LOGIN = "https://app.trakon.app/login";

const nav = [
  ["概要", "/#problem"],
  ["機能", "/#features"],
  ["料金", "/#pricing"],
] as const;

/** LP・下層ページ共通のグローバルヘッダー */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header-inner">
        <a className="site-logo" href="/" aria-label="TRAKON トップへ">TRAKON</a>
        <nav className="site-nav" aria-label="グローバルナビゲーション">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="site-actions">
          <a className="site-login" href={APP_LOGIN}>ログイン</a>
          <a className="site-cta" href={APP_LOGIN}>無料で始める <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </header>
  );
}
