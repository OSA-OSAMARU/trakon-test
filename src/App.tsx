import LandingPage from "@/components/LandingPage";
import { CommercePage, CompanyPage, ContactPage, PrivacyPage, TermsPage } from "@/components/LowerPages";

export default function App() {
  const path = window.location.pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  const pages: Record<string, React.ReactNode> = {
    "/company": <CompanyPage />, "/terms": <TermsPage />, "/privacy": <PrivacyPage />,
    "/commerce": <CommercePage />, "/contact": <ContactPage />,
  };
  const titles: Record<string, string> = {
    "/company": "会社概要｜TRAKON", "/terms": "利用規約｜TRAKON",
    "/privacy": "プライバシーポリシー｜TRAKON", "/commerce": "特定商取引法に基づく表記｜TRAKON",
    "/contact": "お問い合わせ｜TRAKON",
  };
  document.title = titles[path] ?? "TRAKON｜プロジェクトのボールを止めない";
  return pages[path] ?? <LandingPage />;
}
