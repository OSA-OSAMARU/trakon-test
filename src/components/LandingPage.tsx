import imgHero from "@/imports/LpDesktop1440/dd414436588d195907a288977aea58f593ea7dfc.png";
import imgSignal1 from "@/imports/LpDesktop1440/7192b6cbf8c89183b39c830444f618a6a64a6243.png";
import imgSignal2 from "@/imports/LpDesktop1440/9303b4d2a82795864b5ac22ee4b1b639da2d2b58.png";
import imgSignal3 from "@/imports/LpDesktop1440/a3184b4f793c95526c0515d69670914b93cfc853.png";
import imgSignal4 from "@/imports/LpDesktop1440/032ccdd4164dea5e78c1a75eff49238efe7fbaf6.png";
import imgDetailDrawer from "@/imports/LpDesktop1440/ff02f21f25fc0b9cea087f81b0e36652535a5436.png";
import imgHistoryDrawer from "@/imports/LpDesktop1440/d0b3d677553f150a2de0a276fedf9347948ace40.png";
import imgDashboard from "@/imports/LpDesktop1440/dd7e538ce51820e128f1c23798205397b6933cef.png";
import imgFeature1 from "@/imports/LpDesktop1440/77afe5528a21675aaed37bee146f3dd44fbd1b2b.png";
import imgFeature2 from "@/imports/LpDesktop1440/aae5d357b45d69a8a415ab77fc2b5618a1f8a37d.png";
import imgFeature3 from "@/imports/LpDesktop1440/79347c3e4303f7a63ecfe5a64919043a1e21f426.png";
import imgFeature4 from "@/imports/LpDesktop1440/a4254e52ec69c982e42e83decfb3b8102cd85e26.png";
import imgFeature5 from "@/imports/LpDesktop1440/931faea0242cfa5b0563de0d58fdab09a952753c.png";
import imgFeature6 from "@/imports/LpDesktop1440/6a78930b98cf66100492ff84ac336860f4d02693.png";
import imgFeature7 from "@/imports/LpDesktop1440/b67393a32206a7635e7de42e9b1e8485a126fb46.png";
import imgFeature8 from "@/imports/LpDesktop1440/8b28d232edcb5101cfd6f1ad231b07d0aa34bb69.png";

const sora = "font-['Sora',sans-serif] font-semibold";
const notoB = "font-['Noto_Sans_JP',sans-serif] font-bold";
const notoR = "font-['Noto_Sans_JP',sans-serif] font-normal";
const notoM = "font-['Noto_Sans_JP',sans-serif] font-medium";

const container = "w-full max-w-[1080px] mx-auto px-5 sm:px-8";

function Header() {
  return (
    <header className={`flex h-16 items-center justify-between ${container}`}>
      <p className={`${sora} text-[#1a1a18] text-3xl sm:text-4xl lg:text-[48px] tracking-[2.4px] leading-[1.1]`}>
        TRAKON
      </p>
      <a
        href="https://app.trakon.app/login" target="_blank" rel="noopener noreferrer"
        className={`${notoB} bg-[#e8642a] text-white text-base sm:text-lg lg:text-[20px] tracking-[0.8px] leading-[1] px-6 py-2.5 rounded-[7px] whitespace-nowrap hover:opacity-90 transition-opacity`}
      >
        ログイン　→
      </a>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#faf8f4] w-full">
      <div className={`flex flex-col gap-12 md:gap-16 lg:gap-[72px] items-center pb-12 md:pb-16 lg:pb-[110px] pt-10 ${container}`}>
        <Header />
        <div className="flex flex-col gap-8 items-center text-center w-full">
          <h1 className={`${notoB} text-[#20201e] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[-0.84px] leading-[1.18]`}>
            タスクが見えているだけでは、
            <br />
            プロジェクトは進まない。
          </h1>
          <p className={`${notoR} text-[#4f4e49] text-base sm:text-lg lg:text-[20px] leading-[1.8] max-w-[442px]`}>
            大切なのは、
            <br />
            いま、誰がボールを持っているのか。
          </p>
          <a
            href="https://app.trakon.app/login" target="_blank" rel="noopener noreferrer"
            className={`${notoB} bg-[#e8642a] text-white text-base sm:text-lg lg:text-[20px] tracking-[0.8px] px-8 py-3 rounded-[7px] hover:opacity-90 transition-opacity`}
          >
            無料で始める　→
          </a>
        </div>
        <div className="relative w-full max-w-[960px] mx-auto rounded-[20px] overflow-hidden border border-[#e5e0d8]">
          <img
            alt="TRAKONプロダクト画面"
            src={imgHero}
            className="w-full h-auto object-contain rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const signals = [
    { img: imgSignal1, num: "01", text: "ボールの所在が、わからない。" },
    { img: imgSignal2, num: "02", text: "大切な確認が、埋もれる。" },
    { img: imgSignal3, num: "03", text: "なぜ戻ったのか、後から追えない。" },
    { img: imgSignal4, num: "04", text: "気づいたときには、もう時間がない。" },
  ];

  return (
    <section className="bg-[#f3efe8] w-full">
      <div className={`flex flex-col gap-10 md:gap-14 lg:gap-[64px] ${container} py-16 md:py-20 lg:py-[110px]`}>
        <h2 className={`${notoB} text-[#20201e] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-0.44px] leading-[1.25] max-w-[580px]`}>
          受け渡しが止まれば、
          <br />
          プロジェクトは進みません。
        </h2>
        <p className={`${notoR} text-[#20201e] text-base sm:text-lg lg:text-[20px] leading-[1.8] max-w-[780px]`}>
          タスクとは別に進行の管理が必要です。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {signals.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-[16px] border border-[#ded8ce] overflow-hidden flex flex-col gap-5 p-7"
            >
              <div className="rounded-[7px] overflow-hidden border border-[#8d8988] border-opacity-50 aspect-[222/141]">
                <img alt="" src={s.img} className="w-full h-full object-cover" />
              </div>
              <div className={`${notoM} text-[#4f4e49] text-sm tracking-[0.56px] leading-[1.4]`}>
                <p>{s.num}</p>
                <p className="mt-1">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoHasBallSection() {
  return (
    <section className="bg-white w-full">
      <div className={`flex flex-col gap-10 md:gap-14 lg:gap-[64px] ${container} py-16 md:py-20 lg:py-[110px]`}>
        <h2 className={`${notoB} text-[#20201e] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-0.44px] leading-[1.25] max-w-[780px]`}>
          いま、誰が
          <br />
          ボールを持っている？
        </h2>
        <p className={`${notoR} text-[#4f4e49] text-base sm:text-lg lg:text-[20px] leading-[1.8] max-w-[580px]`}>
          実施者、承認者、進行責任者。
          <br />
          次に誰へ渡すのかまで、一つの画面でわかる。
        </p>
        <div className="relative w-full rounded-[20px] overflow-hidden border border-[#e5e0d8]">
          <img
            alt="詳細ドロワー画面"
            src={imgDetailDrawer}
            className="w-full h-auto object-contain rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}

function ModalCard({
  title,
  subtitle,
  targetFrom,
  targetTo,
  targetLabel,
  textareaPlaceholder,
  actionLabel,
  accentColor,
}: {
  title: string;
  subtitle: string;
  targetFrom: string;
  targetTo: string;
  targetLabel: string;
  textareaPlaceholder: string;
  actionLabel: string;
  accentColor: string;
}) {
  return (
    <div className="bg-[#fffefc] border border-[#e0dad2] rounded-[18px] shadow-[0px_14px_32px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 p-7 w-full max-w-[560px]">
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[18px]"
        style={{ backgroundColor: accentColor }}
      />
      <div className="pl-1">
        <p className={`${notoB} text-[#22211f] text-xl leading-normal`}>{title}</p>
        <p className={`${notoR} text-[#665f57] text-xs leading-normal mt-2`}>{subtitle}</p>
      </div>
      <div className="bg-[#f7f4ee] rounded-[12px] p-4 pl-5">
        <p className={`${notoB} text-[#22211f] text-base leading-normal`}>{targetLabel}</p>
        <p className={`${notoR} text-[#665f57] text-[11px] leading-normal mt-2`}>
          {targetFrom} → {targetTo}
        </p>
      </div>
      <div>
        <p className={`${notoM} text-[#22211f] text-xs leading-normal mb-2`}>
          {title === "確認TOSS" ? "確認してほしい内容（任意）" : "戻す内容 ＊"}
        </p>
        <div className="bg-white border border-[#cfc9c0] rounded-[10px] p-3 min-h-[120px] flex flex-col justify-between">
          <p className={`${notoR} text-[#9a948b] text-xs leading-normal`}>{textareaPlaceholder}</p>
          <p className={`${notoM} text-[#7a746c] text-[11px]`}>⌕　ファイルを添付（予定）</p>
        </div>
        <p className={`${notoR} text-[#7a746c] text-[11px] leading-normal mt-3`}>
          メッセージは通知され、進行履歴に保存されます。
        </p>
      </div>
      <div className="flex gap-3 justify-end mt-1">
        <button className={`${notoM} bg-white border border-[#cfc9c0] text-[#22211f] text-xs rounded-[10px] px-6 py-3 hover:bg-gray-50 transition-colors`}>
          キャンセル
        </button>
        <button className={`${notoM} bg-[#22211f] text-white text-xs rounded-[10px] px-6 py-3 hover:opacity-90 transition-opacity`}>
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

function TossReturnSection() {
  return (
    <section className="bg-[#faf8f4] w-full">
      <div className={`flex flex-col gap-10 md:gap-14 lg:gap-[64px] ${container} py-16 md:py-20 lg:py-[110px]`}>
        <h2 className={`${notoB} text-[#22211f] text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-[1.25]`}>
          要点を添えて渡す。
          <br />
          理由を添えて戻す。
        </h2>
        <p className={`${notoR} text-[#665f57] text-base sm:text-lg lg:text-[20px] leading-[1.8] w-full`}>
          確認してほしいことと、戻す理由。それだけ添えれば、ボールは次へ動きます。
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[77px] items-start lg:items-center w-full w-full">
          <ModalCard
            title="確認TOSS"
            subtitle="承認者へボールを渡します"
            targetLabel="Webデザイン"
            targetFrom="杉野 遥"
            targetTo="石原 美咲"
            textareaPlaceholder="例：ファーストビューのコピーと写真のバランスをご確認ください。"
            actionLabel="確認TOSSする"
            accentColor="#2589a6"
          />
          <ModalCard
            title="コメントRETURN"
            subtitle="実施者へボールを戻します"
            targetLabel="Webデザイン"
            targetFrom="石原 美咲"
            targetTo="杉野 遥"
            textareaPlaceholder="例：商品写真を大きくして、コピーとの優先順位を調整してください。"
            actionLabel="RETURNする"
            accentColor="#c88718"
          />
        </div>
        <p className={`${notoR} text-[#665f57] text-base sm:text-lg lg:text-[20px] leading-[1.8] w-full`}>
          確認のやり取りは、誰が・いつ・誰へ渡したかと共に、そのまま進行の履歴として残ります。
        </p>
        <div className="relative w-full rounded-[20px] overflow-hidden border border-[#e5e0d8] bg-[#f7f4ee] max-h-[720px]">
          <img
            alt="進行履歴ドロワー画面"
            src={imgHistoryDrawer}
            className="w-full h-full max-h-[720px] object-contain object-top rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="bg-white w-full">
      <div className={`flex flex-col gap-10 md:gap-14 lg:gap-[64px] ${container} py-16 md:py-20 lg:py-[110px]`}>
        <h2 className={`${notoB} text-[#20201e] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-0.44px] leading-[1.25] max-w-[780px]`}>
          全てのプロジェクトの、
          <br />
          いま動くべきボールを見る。
        </h2>
        <p className={`${notoR} text-[#4f4e49] text-base sm:text-lg lg:text-[20px] leading-[1.8] max-w-[580px]`}>
          作業中、返答待ち、RETURN対応、次の工程TOSS待ち。
          <br />
          いま動くべきものが、ひと目でわかる。
        </p>
        <div className="relative w-full rounded-[20px] overflow-hidden border border-[#e5e0d8]">
          <img
            alt="ダッシュボード画面"
            src={imgDashboard}
            className="w-full h-auto object-contain rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}

const features = [
  { img: imgFeature1, title: "縦スケジュール", desc: "時間を縦に表示し、工程の流れと日付を同時に確認。" },
  { img: imgFeature2, title: "ボールの保持者", desc: "いま誰が対応すべきかを、カードと詳細画面に表示。" },
  { img: imgFeature3, title: "確認依頼 / 差し戻し", desc: "要点を添えて渡し、戻す理由も履歴に残す。" },
  { img: imgFeature4, title: "進行履歴", desc: "「確認」「差し戻し」「承認」を時系列で記録。" },
  { img: imgFeature5, title: "横断ダッシュボード", desc: "複数案件の状態と要対応をひとつの場所で確認。" },
  { img: imgFeature6, title: "期限超過アラート", desc: "期限を過ぎたカードをリングと日数で表示。" },
  { img: imgFeature7, title: "役割と権限", desc: "実施者・承認者・進行責任者の操作を明確化。" },
  { img: imgFeature8, title: "アカウント不要の共有URL", desc: "URLを送るだけで、クライアントも確認・承認。" },
];

function FeaturesSection() {
  return (
    <section className="bg-[#faf8f4] w-full">
      <div className={`flex flex-col gap-8 md:gap-10 ${container} py-16 md:py-20 lg:py-[110px]`}>
        <h2 className={`${notoB} text-[#22211f] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-normal`}>
          TRAKONでできること
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#f7f4ee] border border-[#e5e0d8] rounded-[16px] p-6 flex flex-col gap-4"
            >
              <div className="rounded-[10px] overflow-hidden aspect-[230/177]">
                <img alt="" src={f.img} className="w-full h-full object-cover" />
              </div>
              <p className={`${notoB} text-[#22211f] text-base leading-normal`}>{f.title}</p>
              <p className={`${notoR} text-[#665f57] text-xs leading-normal`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Free",
      nameFont: sora,
      badge: "Beta",
      desc: "まず試してみたい方へ",
      price: "¥0",
      unit: "/月",
      limits: ["1アカウント", "2プロジェクトまで", "基本機能すべて"],
      ctaLabel: "無料で始める  →",
      ctaStyle: "bg-[#e8642a] text-white hover:opacity-90",
      highlight: true,
    },
    {
      name: "Personal",
      nameFont: sora,
      badge: null,
      desc: "個人で案件を動かす方へ",
      price: "¥980",
      unit: "/月",
      limits: ["1アカウント", "10プロジェクトまで", "基本機能すべて"],
      ctaLabel: "COMING SOON",
      ctaStyle: "bg-white text-[#20201e] border border-[#e7e1d8] cursor-not-allowed",
      highlight: false,
    },
    {
      name: "Team",
      nameFont: sora,
      badge: null,
      desc: "制作チームの進行管理へ",
      price: "¥9,800",
      unit: "/月",
      limits: ["5アカウント", "プロジェクト無制限", "基本機能すべて"],
      ctaLabel: "COMING SOON",
      ctaStyle: "bg-white text-[#20201e] border border-[#e7e1d8] cursor-not-allowed",
      highlight: false,
    },
    {
      name: "Enterprise",
      nameFont: sora,
      badge: null,
      desc: "組織に合わせて個別設計",
      price: "お問い合わせ",
      unit: null,
      limits: ["アカウント数は個別設計", "プロジェクト無制限", "権限に応じた作成・編集"],
      ctaLabel: "COMING SOON",
      ctaStyle: "bg-white text-[#20201e] border border-[#e7e1d8] cursor-not-allowed",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#f3efe8] w-full">
      <div className={`flex flex-col gap-10 md:gap-14 lg:gap-[64px] ${container} py-16 md:py-20 lg:py-[110px]`}>
        <h2 className={`${notoB} text-[#20201e] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[-0.84px] leading-[1.18]`}>
          さあ、始めよう。
        </h2>
        <p className={`${notoR} text-[#4f4e49] text-base sm:text-lg lg:text-[20px] leading-[1.8] max-w-[580px]`}>
          まずは無料から。チームの規模に合わせて選べます。
        </p>
        <div className="bg-[#fdf3ee] border border-[#e8642a] rounded-[12px] flex flex-wrap gap-4 items-center px-6 py-4">
          <p className={`${notoM} text-[#e8642a] text-[13px] leading-[20px]`}>全プラン共通</p>
          <p className={`${notoR} text-[#20201e] text-[13px] sm:text-[14px] leading-[22px]`}>
            プロジェクト作成・編集　／　非会員へのプロジェクト共有　／　非会員への確認依頼と差戻し
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-[16px] flex flex-col gap-5 p-7 relative ${plan.highlight ? "border-2 border-[#e8642a]" : "border border-[#e7e1d8]"}`}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <p className={`${plan.nameFont} text-[#20201e] text-[28px] leading-[36px]`}>{plan.name}</p>
                {plan.badge && (
                  <span className={`${notoM} bg-[#fdf3ee] text-[#e8642a] text-[11px] px-2.5 py-1 rounded-full`}>
                    {plan.badge}
                  </span>
                )}
              </div>
              {plan.desc && (
                <p className={`${notoR} text-[#4f4e49] text-sm leading-[23px]`}>{plan.desc}</p>
              )}
              <div className="flex items-end gap-1">
                <p className={`${notoB} text-[#20201e] ${plan.price === "お問い合わせ" ? "text-[24px]" : "text-[36px] sm:text-[40px]"} leading-[52px]`}>
                  {plan.price}
                </p>
                {plan.unit && (
                  <p className={`${notoR} text-[#4f4e49] text-sm leading-[24px]`}>{plan.unit}</p>
                )}
              </div>
              <div className="bg-[#e7e1d8] h-px w-full" />
              <div className="flex flex-col gap-3 flex-1">
                {plan.limits.map((l) => (
                  <p key={l} className={`${notoR} text-[#20201e] text-sm leading-[22px]`}>✓　{l}</p>
                ))}
              </div>
              <button className={`${notoM} w-full h-12 rounded-[8px] text-sm leading-[20px] transition-opacity ${plan.ctaStyle}`}>
                {plan.ctaLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-[#faf8f4] w-full">
      <div className={`flex flex-col items-center text-center ${container} py-20 md:py-28 lg:py-[128px]`}>
        <h2 className={`${notoB} text-[#20201e] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-0.44px] leading-[1.25] max-w-[780px]`}>
          ボールを止めない。
          <br />
          考える時間を、取り戻す。
        </h2>
        <a
          href="https://app.trakon.app/login" target="_blank" rel="noopener noreferrer"
          className={`${notoB} mt-10 bg-[#e8642a] text-white text-base sm:text-lg lg:text-[20px] tracking-[0.8px] px-10 py-3.5 rounded-[7px] hover:opacity-90 transition-opacity`}
        >
          無料で始める　→
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#faf8f4] w-full border-t border-[#e5e0d8]">
      <div className={`flex flex-col gap-6 ${container} py-14 md:py-16`}>
        <p className={`${sora} text-[#1a1a18] text-3xl sm:text-4xl lg:text-[48px] tracking-[2.4px] leading-[1.1]`}>
          TRAKON
        </p>
        <div className={`${notoR} text-[#4f4e49] text-sm sm:text-base leading-[28.8px] flex flex-wrap gap-x-6 gap-y-2`}>
          <a href="https://www.trakon.app/company" target="_blank" rel="noopener noreferrer" className="hover:text-[#20201e] transition-colors">会社概要</a>
          <a href="https://www.trakon.app/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#20201e] transition-colors">利用規約</a>
          <a href="https://www.trakon.app/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#20201e] transition-colors">プライバシーポリシー</a>
          <a href="https://www.trakon.app/commerce.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#20201e] transition-colors">特定商取引法に基づく表記</a>
          <a href="https://www.trakon.app/contact.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#20201e] transition-colors">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#faf8f4] flex flex-col items-center w-full">
      <HeroSection />
      <ProblemSection />
      <WhoHasBallSection />
      <TossReturnSection />
      <DashboardSection />
      <FeaturesSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
