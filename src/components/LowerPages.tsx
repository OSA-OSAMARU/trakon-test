import { FormEvent, useState } from "react";

type LegalSection = { title: string; body: string };

const navigation = [
  ["会社概要", "/company"],
  ["利用規約", "/terms"],
  ["特定商取引法に基づく表記", "/commerce"],
  ["プライバシーポリシー", "/privacy"],
  ["お問い合わせ", "/contact"],
] as const;

function SiteHeader() {
  return (
    <header className="lower-header">
      <div className="lower-shell lower-header-inner">
        <a className="lower-logo" href="/">TRAKON</a>
        <div className="lower-header-actions">
          <a className="lower-back" href="/">TRAKONへ戻る</a>
          <a className="lower-cta" href="https://app.trakon.app/login">無料で始める <span>→</span></a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="lower-footer">
      <div className="lower-shell lower-footer-inner">
        <a className="lower-logo lower-logo-small" href="/">TRAKON</a>
        <nav aria-label="フッターナビゲーション">
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <p>© OSAMARU COMPANY</p>
      </div>
    </footer>
  );
}

function PageHero({ label, title, lead }: { label: string; title: string; lead: string }) {
  return (
    <section className="lower-hero">
      <div className="lower-shell lower-hero-inner">
        <p className="lower-eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lower-lead">{lead}</p>
      </div>
    </section>
  );
}

function PageFrame({ children, label, title, lead }: { children: React.ReactNode; label: string; title: string; lead: string }) {
  return <div className="lower-page"><SiteHeader /><main><PageHero label={label} title={title} lead={lead} />{children}</main><SiteFooter /></div>;
}

export function CompanyPage() {
  const rows = [
    ["会社名", "株式会社おさまるカンパニー"],
    ["サービス名", "TRAKON（トラコン）"],
    ["代表者", "宮丸 長"],
    ["所在地", <>〒330-9501<br />埼玉県さいたま市大宮区桜木町2丁目3番地<br />大宮マルイ7階</>],
    ["電話番号", "03-6110-0597"],
    ["事業内容", <>サイトの企画・設計・制作・運用<br />サービス・業務支援ツールの企画・開発<br />デジタル領域におけるコンサルティング</>],
  ];
  const services = [
    ["01", "サイト制作", "企業サイトやサービスサイトの企画・情報設計から、デザイン、実装、公開後の運用まで。"],
    ["02", "サービス開発", "現場の課題を整理し、使い続けられる業務支援ツールやWebサービスを設計・開発します。"],
    ["03", "デジタルコンサルティング", "事業とユーザーの両方を見ながら、Web活用や業務改善の進め方を一緒に考えます。"],
  ];
  return <PageFrame label="COMPANY" title="会社概要" lead="TRAKONを企画・運営する、株式会社おさまるカンパニーについて。">
    <section className="lower-content lower-shell">
      <h2>会社情報</h2>
      <dl className="company-table">{rows.map(([label, value]) => <div key={String(label)}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div className="service-heading"><p className="lower-eyebrow">OUR BUSINESS</p><h2>私たちが行うこと</h2></div>
      <div className="service-grid">{services.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  </PageFrame>;
}

const terms: LegalSection[] = [
  { title: "第1条　適用", body: "本規約は、株式会社おさまるカンパニー（以下「当社」）が提供するTRAKON（以下「本サービス」）の利用条件を定めるものです。利用者は、本規約に同意のうえ本サービスを利用します。" },
  { title: "第2条　アカウント", body: "利用者は、登録情報を正確かつ最新の状態に保ち、自己の責任でアカウントを管理するものとします。アカウントを第三者へ譲渡・貸与することはできません。共有URLを発行した場合も、その管理は発行者の責任で行うものとします。" },
  { title: "第3条　利用料金", body: "有料プランの料金、支払時期および利用条件は、料金ページまたは申込画面に表示します。支払済みの料金は、法令上必要な場合を除き返金しません。" },
  { title: "第4条　禁止事項", body: "法令または公序良俗に反する行為、第三者の権利を侵害する行為、不正アクセス、本サービスの運営を妨げる行為、その他当社が不適切と判断する行為を禁止します。" },
  { title: "第5条　知的財産権", body: "本サービスに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。利用者が登録した情報の権利は、当該利用者または正当な権利者に留保されます。" },
  { title: "第6条　サービスの変更・停止", body: "当社は、保守、障害、災害その他やむを得ない事情がある場合、本サービスの全部または一部を変更・停止できるものとします。重要な変更は、合理的な方法で事前に案内します。" },
  { title: "第7条　免責・責任制限", body: "当社は、本サービスの完全性、正確性、継続性または特定目的への適合性を保証しません。当社の責任は、当社の故意または重過失がある場合を除き、利用者が直近12か月に支払った利用料金の総額を上限とします。" },
  { title: "第8条　利用停止", body: "利用者が本規約に違反した場合、当社は事前の通知なく利用停止または登録抹消を行うことがあります。" },
  { title: "第9条　規約の変更", body: "当社は、必要に応じて本規約を変更できます。変更内容と効力発生日は、本サービス上または当社ウェブサイトで案内します。" },
  { title: "第10条　個人情報", body: "当社は、利用者の個人情報をプライバシーポリシーに従って適切に取り扱います。" },
  { title: "第11条　準拠法・管轄", body: "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合、当社本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。" },
  { title: "第12条　お問い合わせ", body: "本規約に関するお問い合わせは、当社ウェブサイトのお問い合わせフォームよりご連絡ください。" },
];

const privacy: LegalSection[] = [
  { title: "1. 基本方針", body: "株式会社おさまるカンパニー（以下「当社」）は、TRAKON（以下「本サービス」）の提供にあたり取得する個人情報を、関係法令および本ポリシーに従って適切に取り扱います。" },
  { title: "2. 取得する情報", body: "当社は、氏名、会社名、メールアドレス、電話番号、アカウント情報、契約・決済に関する情報、お問い合わせ内容、本サービスへ登録されたデータ、端末情報、IPアドレス、Cookieおよび利用履歴等を取得することがあります。" },
  { title: "3. 利用目的", body: "取得した情報は、本サービスの提供・維持、本人確認、料金請求、TOSS・RETURN等の通知、サポート対応、品質改善、不正利用の防止、重要なお知らせの送付および法令上必要な対応のために利用します。" },
  { title: "4. Cookie・アクセスログ", body: "本サービスでは、ログイン状態の維持、利用状況の把握およびサービス改善のため、Cookieその他これに類する技術を使用することがあります。ブラウザの設定によりCookieを無効にできますが、一部機能が利用できなくなる場合があります。" },
  { title: "5. 第三者提供", body: "当社は、本人の同意がある場合、法令に基づく場合、人の生命・身体または財産の保護に必要な場合等を除き、個人情報を第三者へ提供しません。" },
  { title: "6. 取り扱いの委託", body: "当社は、決済、クラウド基盤、メール配信、分析その他本サービスの運営に必要な範囲で、個人情報の取り扱いを外部事業者へ委託することがあります。この場合、委託先を適切に選定・監督します。" },
  { title: "7. 安全管理", body: "当社は、不正アクセス、紛失、破壊、改ざん、漏えい等を防止するため、アクセス制御、権限管理、通信の保護その他必要かつ適切な安全管理措置を講じます。" },
  { title: "8. 保存期間・削除", body: "取得した情報は、利用目的の達成に必要な期間または法令で定められた期間保存し、その後、安全な方法で削除または匿名化します。" },
  { title: "9. 開示等の請求", body: "本人は、当社が保有する個人情報について、利用目的の通知、開示、訂正、追加、削除、利用停止または第三者提供の停止を求めることができます。本人確認のうえ、法令に従って対応します。" },
  { title: "10. 外部サービス", body: "本サービスから外部サービスへ移動した場合、移動先での情報の取り扱いには、当該サービスのプライバシーポリシーが適用されます。" },
  { title: "11. 内容の変更", body: "当社は、法令またはサービス内容の変更に応じて本ポリシーを改定することがあります。重要な変更は、当社ウェブサイトまたは本サービス上で案内します。" },
  { title: "12. お問い合わせ", body: "個人情報の取り扱いに関するお問い合わせは、当社ウェブサイトのお問い合わせフォームよりご連絡ください。\n\n株式会社おさまるカンパニー\n〒330-9501 埼玉県さいたま市大宮区桜木町2丁目3番地 大宮マルイ7階\n電話番号：03-6110-0597" },
];

function LegalPage({ kind, sections }: { kind: "terms" | "privacy"; sections: LegalSection[] }) {
  const isTerms = kind === "terms";
  return <PageFrame label={isTerms ? "TERMS" : "PRIVACY"} title={isTerms ? "利用規約" : "プライバシーポリシー"} lead={isTerms ? "TRAKONをご利用いただくための条件を定めています。" : "お預かりする情報と、その取り扱いについてご案内します。"}>
    <section className="legal-layout lower-shell">
      <aside className="legal-toc" aria-label="ページ内目次"><p>CONTENTS</p>{sections.map((section, i) => <a href={`#section-${i + 1}`} key={section.title}>{section.title.replace(/^第?\d+(条|\.)?　?/, "")}</a>)}</aside>
      <article className="legal-body"><p className="legal-date">制定日：2026.8.20</p>{sections.map((section, i) => <section id={`section-${i + 1}`} key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</article>
    </section>
  </PageFrame>;
}

export function TermsPage() { return <LegalPage kind="terms" sections={terms} />; }
export function PrivacyPage() { return <LegalPage kind="privacy" sections={privacy} />; }

const commerceRows = [
  ["販売事業者", "株式会社おさまるカンパニー"], ["運営責任者", "宮丸 長"],
  ["所在地", "〒330-9501\n埼玉県さいたま市大宮区桜木町2丁目3番地\n大宮マルイ7階"], ["電話番号", "03-6110-0597"],
  ["お問い合わせ", "当サイトのお問い合わせフォームよりご連絡ください。"], ["販売価格", "各プランの料金は、料金ページまたは申込画面に表示します。"],
  ["商品代金以外の必要料金", "インターネット接続に必要な通信料等は利用者の負担となります。"], ["支払方法", "クレジットカード決済。法人契約その他の支払方法は個別にご案内します。"],
  ["支払時期", "申込時および以後の契約更新日に、選択した契約期間分をお支払いいただきます。"], ["サービスの提供時期", "決済完了後、直ちにご利用いただけます。"],
  ["解約・返金", "契約期間中に解約した場合も、支払済み料金の日割り返金は行いません。解約後は次回更新日をもって利用を終了します。法令上必要な場合はこの限りではありません。"],
  ["動作環境", "対応ブラウザおよび推奨環境は、サービス内またはヘルプページに表示します。"],
];

export function CommercePage() {
  return <PageFrame label="COMMERCE" title="特定商取引法に基づく表記" lead="TRAKONの販売条件と事業者情報をご案内します。">
    <section className="lower-content lower-shell commerce-content"><dl className="commerce-table">{commerceRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="commerce-note">記載内容は、サービス提供条件の変更に応じて更新します。</p></section>
  </PageFrame>;
}

export function ContactPage() {
  const [confirmed, setConfirmed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setConfirmed(true); };
  return <PageFrame label="CONTACT" title="お問い合わせ" lead="導入のご相談、サービスについてのご質問をお寄せください。">
    <section className="contact-layout lower-shell">
      <div className="contact-intro"><p className="lower-eyebrow">GET IN TOUCH</p><h2>お気軽にご相談ください</h2><p>内容を確認後、通常2〜3営業日以内に担当者よりご連絡します。</p></div>
      <form className="contact-form" onSubmit={submit}>
        <label>会社名 <span>任意</span><input name="company" placeholder="例：株式会社灯和食品" /></label>
        <label>お名前 <b>必須</b><input required name="name" placeholder="例：石原 美咲" /></label>
        <label>メールアドレス <b>必須</b><input required type="email" name="email" placeholder="例：misaki.ishihara@example.jp" /></label>
        <label>お問い合わせ種別 <b>必須</b><select required name="type" defaultValue=""><option value="" disabled>選択してください</option><option>導入について</option><option>料金・契約について</option><option>サービスについて</option><option>その他</option></select></label>
        <label>お問い合わせ内容 <b>必須</b><textarea required name="message" placeholder="ご相談内容やご質問をご入力ください" /></label>
        <label className="privacy-check"><input required type="checkbox" /> <span><a href="/privacy">プライバシーポリシー</a>に同意する</span></label>
        {confirmed && <div className="form-confirm" role="status"><strong>入力内容を確認しました。</strong><span>送信機能の接続後、この内容で送信できます。</span></div>}
        <button type="submit">入力内容を確認する <span>→</span></button><p className="form-note">送信前に入力内容をご確認いただけます。</p>
      </form>
    </section>
  </PageFrame>;
}
