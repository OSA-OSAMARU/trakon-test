import imgProductScreenshotHero from "./dd414436588d195907a288977aea58f593ea7dfc.png";
import imgRectangle2 from "./7192b6cbf8c89183b39c830444f618a6a64a6243.png";
import imgRectangle3 from "./9303b4d2a82795864b5ac22ee4b1b639da2d2b58.png";
import imgRectangle4 from "./a3184b4f793c95526c0515d69670914b93cfc853.png";
import imgRectangle5 from "./032ccdd4164dea5e78c1a75eff49238efe7fbaf6.png";
import imgProductScreenshotDetailDrawer from "./ff02f21f25fc0b9cea087f81b0e36652535a5436.png";
import imgProductScreenshotHistoryDrawer from "./d0b3d677553f150a2de0a276fedf9347948ace40.png";
import imgProductScreenshotDashboard from "./dd7e538ce51820e128f1c23798205397b6933cef.png";
import imgRectangle6 from "./77afe5528a21675aaed37bee146f3dd44fbd1b2b.png";
import imgRectangle7 from "./aae5d357b45d69a8a415ab77fc2b5618a1f8a37d.png";
import imgRectangle8 from "./79347c3e4303f7a63ecfe5a64919043a1e21f426.png";
import imgRectangle9 from "./a4254e52ec69c982e42e83decfb3b8102cd85e26.png";
import imgRectangle10 from "./931faea0242cfa5b0563de0d58fdab09a952753c.png";
import imgRectangle11 from "./6a78930b98cf66100492ff84ac336860f4d02693.png";
import imgRectangle12 from "./b67393a32206a7635e7de42e9b1e8485a126fb46.png";
import imgRectangle13 from "./8b28d232edcb5101cfd6f1ad231b07d0aa34bb69.png";

function Button() {
  return (
    <div className="bg-[#e8642a] content-stretch flex flex-col h-[44px] items-center justify-center overflow-clip pl-[75px] pr-[79px] py-[12px] relative rounded-[7px] shrink-0 w-[157px]" data-name="Button">
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.6px] relative shrink-0 text-[20px] text-white tracking-[0.8px] whitespace-nowrap">ログイン　→</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Header">
      <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1a1a18] text-[48px] tracking-[2.4px] whitespace-nowrap">TRAKON</p>
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[43px] overflow-clip relative shrink-0 w-[233px]" data-name="Button">
      <div className="absolute bg-[#e8642a] h-[43px] left-0 rounded-[7px] top-0 w-[233px]" />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.6px] left-[34px] text-[20px] text-white top-[12px] tracking-[0.8px] whitespace-nowrap">無料で始める　→</p>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Hero Copy">
      <div className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#20201e] text-[56px] text-center tracking-[-0.84px] w-[min-content]">
        <p className="leading-[66.08px] mb-0">タスクが見えているだけでは、</p>
        <p className="leading-[66.08px]">プロジェクトは進まない。</p>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#4f4e49] text-[20px] text-center w-[442px]">
        大切なのは、
        <br aria-hidden />
        いま、誰がボールを持っているのか。
      </p>
      <Button1 />
    </div>
  );
}

function ProductScreenshotHero() {
  return (
    <div className="h-[620px] pointer-events-none relative rounded-[20px] shrink-0 w-[1200px]" data-name="Product Screenshot / Hero">
      <img alt="" className="absolute inset-0 max-w-none object-contain rounded-[20px] size-full" src={imgProductScreenshotHero} />
      <div aria-hidden className="absolute border border-[#e5e0d8] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Component01Hero() {
  return (
    <div className="bg-[#faf8f4] relative shrink-0 w-full" data-name="01 / Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[72px] items-start pb-[110px] pt-[40px] px-[120px] relative size-full">
          <Header />
          <HeroCopy />
          <ProductScreenshotHero />
        </div>
      </div>
    </div>
  );
}

function Signal() {
  return (
    <div className="bg-white h-[300px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Signal 01">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[30px] py-[32px] relative rounded-[inherit] size-full">
        <div className="h-[141px] pointer-events-none relative rounded-[7px] shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[7px] size-full" src={imgRectangle2} />
          <div aria-hidden className="absolute border-[#8d8988] border-[0.5px] border-solid inset-0 rounded-[7px]" />
        </div>
        <div className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#4f4e49] text-[14px] tracking-[0.56px] w-[218px] whitespace-pre-wrap">
          <p className="leading-[19.6px] mb-0">01</p>
          <p className="leading-[19.6px] mb-0">​</p>
          <p className="leading-[19.6px]">ボールの所在が、わからない。</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ded8ce] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Signal1() {
  return (
    <div className="bg-white h-[300px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Signal 02">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[30px] py-[32px] relative rounded-[inherit] size-full">
        <div className="h-[141px] pointer-events-none relative rounded-[7px] shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden rounded-[7px]">
            <img alt="" className="absolute h-full left-[0.08%] max-w-none top-0 w-[104.07%]" src={imgRectangle3} />
          </div>
          <div aria-hidden className="absolute border-[#8d8988] border-[0.5px] border-solid inset-0 rounded-[7px]" />
        </div>
        <div className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#4f4e49] text-[14px] tracking-[0.56px] w-[218px] whitespace-pre-wrap">
          <p className="leading-[19.6px] mb-0">02</p>
          <p className="leading-[19.6px] mb-0">​</p>
          <p className="leading-[19.6px]">大切な確認が、埋もれる。</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ded8ce] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Signal2() {
  return (
    <div className="bg-white h-[300px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Signal 03">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[30px] py-[32px] relative rounded-[inherit] size-full">
        <div className="h-[141px] pointer-events-none relative rounded-[7px] shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[7px] size-full" src={imgRectangle4} />
          <div aria-hidden className="absolute border-[#8d8988] border-[0.5px] border-solid inset-0 rounded-[7px]" />
        </div>
        <div className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#4f4e49] text-[14px] tracking-[0.56px] w-full whitespace-pre-wrap">
          <p className="leading-[19.6px] mb-0">03</p>
          <p className="leading-[19.6px] mb-0">​</p>
          <p className="leading-[19.6px]">なぜ戻ったのか、後から追えない。</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ded8ce] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Signal3() {
  return (
    <div className="bg-white h-[300px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Signal 04">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[30px] py-[32px] relative rounded-[inherit] size-full">
        <div className="h-[141px] pointer-events-none relative rounded-[7px] shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[7px] size-full" src={imgRectangle5} />
          <div aria-hidden className="absolute border-[#8d8988] border-[0.5px] border-solid inset-0 rounded-[7px]" />
        </div>
        <div className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#4f4e49] text-[14px] tracking-[0.56px] w-full whitespace-pre-wrap">
          <p className="leading-[19.6px] mb-0">04</p>
          <p className="leading-[19.6px] mb-0">​</p>
          <p className="leading-[19.6px]">気づいたときには、もう時間がない。</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ded8ce] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function FourWarningSignals() {
  return (
    <div className="content-stretch flex h-[300px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Four warning signals">
      <Signal />
      <Signal1 />
      <Signal2 />
      <Signal3 />
    </div>
  );
}

function Component02Problem() {
  return (
    <div className="bg-[#f3efe8] relative shrink-0 w-full" data-name="02 / Problem — 静かに止まる">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[120px] py-[110px] relative size-full">
          <div className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#20201e] text-[44px] tracking-[-0.44px] w-[680px]">
            <p className="leading-[55px] mb-0">受け渡しが止まれば、</p>
            <p className="leading-[55px]">プロジェクトは進みません。</p>
          </div>
          <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#20201e] text-[20px] w-[900px]">タスクとは別に進行の管理が必要です。</p>
          <FourWarningSignals />
        </div>
      </div>
    </div>
  );
}

function ProductScreenshotDetailDrawer() {
  return (
    <div className="h-[720px] relative rounded-[20px] shrink-0 w-[1200px]" data-name="Product Screenshot / Detail Drawer">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[20px] size-full" src={imgProductScreenshotDetailDrawer} />
      <div className="content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[inherit] size-full" />
      <div aria-hidden className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Component06ProductWhoHasTheBall() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="06 / Product — Who has the ball">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[120px] py-[110px] relative size-full">
          <div className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#20201e] text-[44px] tracking-[-0.44px] w-[900px]">
            <p className="leading-[55px] mb-0">いま、誰が</p>
            <p className="leading-[55px]">ボールを持っている？</p>
          </div>
          <div className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4f4e49] text-[20px] w-[680px]">
            <p className="leading-[36px] mb-0">実施者、承認者、進行責任者。</p>
            <p className="leading-[36px]">次に誰へ渡すのかまで、一つの画面でわかる。</p>
          </div>
          <ProductScreenshotDetailDrawer />
        </div>
      </div>
    </div>
  );
}

function Target() {
  return (
    <div className="[word-break:break-word] absolute bg-[#f7f4ee] h-[82px] leading-[normal] left-[27px] overflow-clip rounded-[12px] top-[111px] w-[504px] whitespace-nowrap" data-name="Target">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold left-[16px] text-[#22211f] text-[16px] top-[16px]">Webデザイン</p>
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal left-[16px] text-[#665f57] text-[11px] top-[48px]">杉野 遥 → 石原 美咲</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="[word-break:break-word] absolute bg-white border border-[#cfc9c0] border-solid h-[180px] leading-[normal] left-[27px] overflow-clip rounded-[10px] top-[251px] w-[504px]" data-name="Textarea">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[50px] left-[15px] text-[#9a948b] text-[12px] top-[15px] w-[470px]">例：ファーストビューのコピーと写真のバランスをご確認ください。</p>
      <p className="absolute font-['Noto_Sans_JP:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium left-[15px] text-[#7a746c] text-[11px] top-[141px] whitespace-pre">{`⌕  ファイルを添付（予定）`}</p>
    </div>
  );
}

function Cancel() {
  return (
    <div className="absolute bg-white border border-[#cfc9c0] border-solid h-[48px] left-[213px] overflow-clip rounded-[10px] top-[527px] w-[150px]" data-name="Cancel">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] left-[41px] text-[#22211f] text-[12px] top-[13px] whitespace-nowrap">キャンセル</p>
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute bg-[#22211f] h-[48px] left-[371px] overflow-clip rounded-[10px] top-[527px] w-[160px]" data-name="Primary">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] left-[32px] text-[12px] text-white top-[14px] whitespace-nowrap">確認TOSSする</p>
    </div>
  );
}

function Modaltoss() {
  return (
    <div className="bg-[#fffefc] border border-[#e0dad2] border-solid h-[620px] overflow-clip relative rounded-[18px] shadow-[0px_14px_32px_0px_rgba(0,0,0,0.08)] shrink-0 w-[560px]" data-name="Modal / 確認TOSS">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[27px] text-[#22211f] text-[24px] top-[27px] whitespace-nowrap">確認TOSS</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[27px] text-[#665f57] text-[12px] top-[71px] w-[500px]">承認者へボールを渡します</p>
      <Target />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] left-[27px] text-[#22211f] text-[12px] top-[221px] whitespace-nowrap">確認してほしい内容（任意）</p>
      <Textarea />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[27px] text-[#7a746c] text-[11px] top-[451px] whitespace-nowrap">メッセージは通知され、進行履歴に保存されます。</p>
      <Cancel />
      <Primary />
      <div className="absolute bg-[#2589a6] h-[620px] left-[-1px] top-[-1px] w-[4px]" data-name="Accent" />
    </div>
  );
}

function Target1() {
  return (
    <div className="[word-break:break-word] absolute bg-[#f7f4ee] h-[82px] leading-[normal] left-[27px] overflow-clip rounded-[12px] top-[111px] w-[504px] whitespace-nowrap" data-name="Target">
      <p className="absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold left-[16px] text-[#22211f] text-[16px] top-[16px]">Webデザイン</p>
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal left-[16px] text-[#665f57] text-[11px] top-[48px]">石原 美咲 → 杉野 遥</p>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="[word-break:break-word] absolute bg-white border border-[#cfc9c0] border-solid h-[180px] leading-[normal] left-[27px] overflow-clip rounded-[10px] top-[251px] w-[504px]" data-name="Textarea">
      <p className="absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[50px] left-[15px] text-[#9a948b] text-[12px] top-[15px] w-[470px]">例：商品写真を大きくして、コピーとの優先順位を調整してください。</p>
      <p className="absolute font-['Noto_Sans_JP:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium left-[15px] text-[#7a746c] text-[11px] top-[141px] whitespace-pre">{`⌕  ファイルを添付（予定）`}</p>
    </div>
  );
}

function Cancel1() {
  return (
    <div className="absolute bg-white border border-[#cfc9c0] border-solid h-[48px] left-[213px] overflow-clip rounded-[10px] top-[527px] w-[150px]" data-name="Cancel">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] left-[41px] text-[#22211f] text-[12px] top-[13px] whitespace-nowrap">キャンセル</p>
    </div>
  );
}

function Primary1() {
  return (
    <div className="absolute bg-[#22211f] h-[48px] left-[371px] overflow-clip rounded-[10px] top-[527px] w-[160px]" data-name="Primary">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] left-[32px] text-[12px] text-white top-[14px] whitespace-nowrap">RETURNする</p>
    </div>
  );
}

function Modalreturn() {
  return (
    <div className="bg-[#fffefc] border border-[#e0dad2] border-solid h-[620px] overflow-clip relative rounded-[18px] shadow-[0px_14px_32px_0px_rgba(0,0,0,0.08)] shrink-0 w-[560px]" data-name="Modal / コメントRETURN">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[27px] text-[#22211f] text-[24px] top-[27px] whitespace-nowrap">コメントRETURN</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[27px] text-[#665f57] text-[12px] top-[71px] w-[500px]">実施者へボールを戻します</p>
      <Target1 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[normal] left-[27px] text-[#22211f] text-[12px] top-[221px] whitespace-nowrap">戻す内容 ＊</p>
      <Textarea1 />
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[27px] text-[#7a746c] text-[11px] top-[451px] whitespace-nowrap">メッセージは通知され、進行履歴に保存されます。</p>
      <Cancel1 />
      <Primary1 />
      <div className="absolute bg-[#c88718] h-[620px] left-[-1px] top-[-1px] w-[4px]" data-name="Accent" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[77px] items-center overflow-clip relative shrink-0 w-[1200px]">
      <Modaltoss />
      <Modalreturn />
    </div>
  );
}

function ProductScreenshotHistoryDrawer() {
  return (
    <div className="content-stretch flex flex-col h-[720px] items-start p-[32px] pointer-events-none relative rounded-[20px] shrink-0 w-[1200px]" data-name="Product Screenshot / History Drawer">
      <div aria-hidden className="absolute inset-0 rounded-[20px]">
        <div className="absolute bg-[#f7f4ee] inset-0 rounded-[20px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[20px] size-full" src={imgProductScreenshotHistoryDrawer} />
      </div>
      <div aria-hidden className="absolute border border-[#e5e0d8] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Component04ProductTossAndReturn() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex flex-col gap-[64px] items-start justify-center overflow-clip px-[120px] py-[110px] relative shrink-0" data-name="04 / Product — TOSS and RETURN">
      <div className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[130px] leading-[0] relative shrink-0 text-[#22211f] text-[52px] w-[900px]">
        <p className="leading-[normal] mb-0">要点を添えて渡す。</p>
        <p className="leading-[normal]">理由を添えて戻す。</p>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#665f57] text-[20px] w-[1100px]">確認してほしいことと、戻す理由。それだけ添えれば、ボールは次へ動きます。</p>
      <Frame />
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#665f57] text-[20px] w-[1100px]">確認のやり取りは、誰が・いつ・誰へ渡したかと共に、そのまま進行の履歴として残ります。</p>
      <ProductScreenshotHistoryDrawer />
    </div>
  );
}

function ProductScreenshotDashboard() {
  return (
    <div className="h-[720px] relative rounded-[20px] shrink-0 w-[1200px]" data-name="Product Screenshot / Dashboard">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[20px] size-full" src={imgProductScreenshotDashboard} />
      <div className="content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[inherit] size-full" />
      <div aria-hidden className="absolute border border-[#e5e0d8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Component08ProductCrossProjectDashboard() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="08 / Product — Cross-project Dashboard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[120px] py-[110px] relative size-full">
          <div className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#20201e] text-[44px] tracking-[-0.44px] w-[900px]">
            <p className="leading-[55px] mb-0">全てのプロジェクトの、</p>
            <p className="leading-[55px]">いま動くべきボールを見る。</p>
          </div>
          <div className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4f4e49] text-[20px] w-[680px]">
            <p className="leading-[36px] mb-0">作業中、返答待ち、RETURN対応、次の工程TOSS待ち。</p>
            <p className="leading-[36px]">いま動くべきものが、ひと目でわかる。</p>
          </div>
          <ProductScreenshotDashboard />
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-1 content-stretch flex flex-col gap-[15px] h-[310px] items-start justify-self-stretch overflow-clip p-[24px] relative rounded-[16px] row-1 shrink-0" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[127.97%] left-0 max-w-none top-[-10.44%] w-full" src={imgRectangle6} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">縦スケジュール</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">時間を縦に表示し、工程の流れと日付を同時に確認。</p>
    </div>
  );
}

function Feature1() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-2 content-stretch flex flex-col gap-[15px] h-[310px] items-start justify-self-stretch overflow-clip p-[24px] relative rounded-[16px] row-1 shrink-0" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[127.97%] left-0 max-w-none top-[-10.44%] w-full" src={imgRectangle7} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">ボールの保持者</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">いま誰が対応すべきかを、カードと詳細画面に表示。</p>
    </div>
  );
}

function Feature2() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-3 content-stretch flex flex-col gap-[15px] h-[310px] items-start justify-self-stretch overflow-clip p-[24px] relative rounded-[16px] row-1 shrink-0" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle8} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">確認依頼 / 差し戻し</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">要点を添えて渡し、戻す理由も履歴に残す。</p>
    </div>
  );
}

function Feature3() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-4 content-stretch flex flex-col gap-[15px] h-[310px] items-start justify-self-stretch overflow-clip p-[24px] relative rounded-[16px] row-1 shrink-0" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle9} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">進行履歴</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">「確認」「差し戻し」「承認」を時系列で記録。</p>
    </div>
  );
}

function Feature4() {
  return (
    <div className="absolute bg-[#f7f4ee] border border-[#e5e0d8] border-solid content-stretch flex flex-col gap-[15px] h-[309px] items-start left-[-1.5px] overflow-clip p-[24px] rounded-[16px] top-[-1px] w-[283.25px]" data-name="Feature / 縦スケジュール">
      <div className="flex-[1_0_0] min-h-px relative rounded-[10px] w-[230px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle10} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">横断ダッシュボード</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">複数案件の状態と要対応をひとつの場所で確認。</p>
    </div>
  );
}

function Featuretossreturn() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-1 h-[310px] justify-self-stretch overflow-clip relative rounded-[16px] row-2 shrink-0" data-name="Feature / 確認TOSS／RETURN">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[23px] text-[#f05a28] text-[26px] top-[23px] whitespace-nowrap">⇄</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] left-[23px] text-[#22211f] text-[16px] top-[85px] w-[234px]">確認TOSS／RETURN</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[80px] leading-[normal] left-[23px] text-[#665f57] text-[12px] top-[129px] w-[234px]">要点を添えて渡し、戻す理由も履歴に残す。</p>
      <Feature4 />
    </div>
  );
}

function Feature5() {
  return (
    <div className="absolute bg-[#f7f4ee] border border-[#e5e0d8] border-solid content-stretch flex flex-col gap-[15px] items-start left-[-1.5px] overflow-clip p-[24px] rounded-[16px] top-[-1px] w-[283.25px]" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle11} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">期限超過アラート</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">期限を過ぎたカードをリングと日数で表示。</p>
    </div>
  );
}

function Featuretossreturn1() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-2 h-[310px] justify-self-stretch overflow-clip relative rounded-[16px] row-2 shrink-0" data-name="Feature / 確認TOSS／RETURN">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[23px] text-[#f05a28] text-[26px] top-[23px] whitespace-nowrap">⇄</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] left-[23px] text-[#22211f] text-[16px] top-[85px] w-[234px]">確認TOSS／RETURN</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[80px] leading-[normal] left-[23px] text-[#665f57] text-[12px] top-[129px] w-[234px]">要点を添えて渡し、戻す理由も履歴に残す。</p>
      <Feature5 />
    </div>
  );
}

function Feature6() {
  return (
    <div className="absolute bg-[#f7f4ee] border border-[#e5e0d8] border-solid content-stretch flex flex-col gap-[15px] items-start left-[-1.5px] overflow-clip p-[24px] rounded-[16px] top-[-1px] w-[283.25px]" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle12} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">役割と権限</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">実施者・承認者・進行責任者の操作を明確化。</p>
    </div>
  );
}

function Featuretossreturn2() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-3 h-[310px] justify-self-stretch overflow-clip relative rounded-[16px] row-2 shrink-0" data-name="Feature / 確認TOSS／RETURN">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[23px] text-[#f05a28] text-[26px] top-[23px] whitespace-nowrap">⇄</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] left-[23px] text-[#22211f] text-[16px] top-[85px] w-[234px]">確認TOSS／RETURN</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[80px] leading-[normal] left-[23px] text-[#665f57] text-[12px] top-[129px] w-[234px]">要点を添えて渡し、戻す理由も履歴に残す。</p>
      <Feature6 />
    </div>
  );
}

function Feature7() {
  return (
    <div className="absolute bg-[#f7f4ee] border border-[#e5e0d8] border-solid content-stretch flex flex-col gap-[15px] items-start left-[-1.5px] overflow-clip p-[24px] rounded-[16px] top-[-1px] w-[283.25px]" data-name="Feature / 縦スケジュール">
      <div className="h-[177px] relative rounded-[10px] shrink-0 w-[230px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle13} />
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] min-w-full relative shrink-0 text-[#22211f] text-[16px] w-[min-content]">アカウント不要の共有URL</p>
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#665f57] text-[12px] w-[min-content]">URLを送るだけで、クライアントも確認・承認。</p>
    </div>
  );
}

function Featuretossreturn3() {
  return (
    <div className="bg-[#f7f4ee] border border-[#e5e0d8] border-solid col-4 h-[310px] justify-self-stretch overflow-clip relative rounded-[16px] row-2 shrink-0" data-name="Feature / 確認TOSS／RETURN">
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[23px] text-[#f05a28] text-[26px] top-[23px] whitespace-nowrap">⇄</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold h-[24px] leading-[normal] left-[23px] text-[#22211f] text-[16px] top-[85px] w-[234px]">確認TOSS／RETURN</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Regular',sans-serif] font-normal h-[80px] leading-[normal] left-[23px] text-[#665f57] text-[12px] top-[129px] w-[234px]">要点を添えて渡し、戻す理由も履歴に残す。</p>
      <Feature7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[__fit-content(100%)_272px] h-[644px] overflow-clip relative shrink-0 w-[1206px]">
      <Feature />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Featuretossreturn />
      <Featuretossreturn1 />
      <Featuretossreturn2 />
      <Featuretossreturn3 />
    </div>
  );
}

function Component09Features() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex flex-col gap-[31px] items-start overflow-clip px-[115px] py-[110px] relative shrink-0" data-name="09 / Features">
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22211f] text-[48px] whitespace-nowrap">TRAKONでできること</p>
      <Frame1 />
    </div>
  );
}

function AllPlansSharedFeatures() {
  return (
    <div className="bg-[#fdf3ee] h-[64px] relative rounded-[12px] shrink-0 w-[1200px]" data-name="All plans / Shared features">
      <div className="[word-break:break-word] content-stretch flex gap-[24px] items-center overflow-clip px-[24px] py-[20px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#e8642a] text-[13px]">全プラン共通</p>
        <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#20201e] text-[14px]">プロジェクト作成・編集　／　非会員へのプロジェクト共有　／　非会員への確認依頼と差戻し</p>
      </div>
      <div aria-hidden className="absolute border border-[#e8642a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Recommended() {
  return (
    <div className="bg-[#fdf3ee] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-name="Recommended">
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e8642a] text-[11px] whitespace-nowrap">Beta</p>
    </div>
  );
}

function PlanHeader() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Plan Header">
      <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#20201e] text-[28px] whitespace-nowrap">Free</p>
      <Recommended />
    </div>
  );
}

function Price() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] items-end overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Price">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[52px] relative shrink-0 text-[#20201e] text-[40px]">¥0</p>
      <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4f4e49] text-[14px]">/月</p>
    </div>
  );
}

function PlanLimits() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal gap-[13px] items-start leading-[22px] overflow-clip relative shrink-0 text-[#20201e] text-[14px] w-full whitespace-pre" data-name="Plan limits">
      <p className="relative shrink-0">{`✓  1アカウント`}</p>
      <p className="relative shrink-0">{`✓  2プロジェクトまで`}</p>
      <p className="relative shrink-0">{`✓  基本機能すべて`}</p>
    </div>
  );
}

function FlexibleSpace() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Flexible space" />;
}

function CtaFree() {
  return (
    <div className="bg-[#e8642a] content-stretch flex h-[48px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="CTA / Free">
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-pre">{`無料で始める  →`}</p>
    </div>
  );
}

function PricingCardFree() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] h-[610px] items-start p-[28px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Pricing Card / Free">
      <div aria-hidden className="absolute border-2 border-[#e8642a] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PlanHeader />
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#4f4e49] text-[14px] whitespace-nowrap">まず試してみたい方へ</p>
      <Price />
      <div className="bg-[#e7e1d8] h-px relative shrink-0 w-full" data-name="Divider" />
      <PlanLimits />
      <FlexibleSpace />
      <CtaFree />
    </div>
  );
}

function PlanHeader1() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Plan Header">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#20201e] text-[28px]">Personal</p>
      <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#4f4e49] text-[14px]">個人で案件を動かす方へ</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] items-end overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Price">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[52px] relative shrink-0 text-[#20201e] text-[40px]">¥980</p>
      <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4f4e49] text-[14px]">/月</p>
    </div>
  );
}

function PlanLimits1() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal gap-[13px] items-start leading-[22px] overflow-clip relative shrink-0 text-[#20201e] text-[14px] w-full whitespace-pre" data-name="Plan limits">
      <p className="relative shrink-0">{`✓  1アカウント`}</p>
      <p className="relative shrink-0">{`✓  10プロジェクトまで`}</p>
      <p className="relative shrink-0">{`✓  基本機能すべて`}</p>
    </div>
  );
}

function FlexibleSpace1() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Flexible space" />;
}

function CtaPersonal() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="CTA / Personal">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#20201e] text-[14px] whitespace-nowrap">COMING SOON</p>
      </div>
      <div aria-hidden className="absolute border border-[#e7e1d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PricingCardPersonal() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] h-[610px] items-start p-[28px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Pricing Card / Personal">
      <div aria-hidden className="absolute border border-[#e7e1d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PlanHeader1 />
      <Price1 />
      <div className="bg-[#e7e1d8] h-px relative shrink-0 w-full" data-name="Divider" />
      <PlanLimits1 />
      <FlexibleSpace1 />
      <CtaPersonal />
    </div>
  );
}

function PlanMeta() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Plan Meta">
      <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#20201e] text-[28px] whitespace-nowrap">Team</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] items-end overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Price">
      <p className="font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[52px] relative shrink-0 text-[#20201e] text-[40px]">¥9,800</p>
      <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4f4e49] text-[14px]">/月</p>
    </div>
  );
}

function PlanLimits2() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal gap-[13px] items-start leading-[22px] overflow-clip relative shrink-0 text-[#20201e] text-[14px] w-full whitespace-pre" data-name="Plan limits">
      <p className="relative shrink-0">{`✓  5アカウント`}</p>
      <p className="relative shrink-0">{`✓  プロジェクト無制限`}</p>
      <p className="relative shrink-0">{`✓  基本機能すべて`}</p>
    </div>
  );
}

function FlexibleSpace2() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Flexible space" />;
}

function CtaEnterprise() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="CTA / Enterprise">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#20201e] text-[14px] whitespace-nowrap">COMING SOON</p>
      </div>
      <div aria-hidden className="absolute border border-[#e7e1d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PricingCardTeam() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] h-[610px] items-start p-[28px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Pricing Card / Team">
      <div aria-hidden className="absolute border border-[#ded8ce] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PlanMeta />
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#4f4e49] text-[14px] whitespace-nowrap">制作チームの進行管理へ</p>
      <Price2 />
      <div className="bg-[#e7e1d8] h-px relative shrink-0 w-full" data-name="Divider" />
      <PlanLimits2 />
      <FlexibleSpace2 />
      <CtaEnterprise />
    </div>
  );
}

function PlanHeader2() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Plan Header">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#20201e] text-[28px]">Enterprise</p>
      <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#4f4e49] text-[14px]">組織に合わせて個別設計</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="bg-white content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name="Price">
      <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[52px] relative shrink-0 text-[#20201e] text-[28px] whitespace-nowrap">お問い合わせ</p>
    </div>
  );
}

function PlanLimits3() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal gap-[13px] items-start leading-[22px] overflow-clip relative shrink-0 text-[#20201e] text-[14px] w-full whitespace-pre" data-name="Plan limits">
      <p className="relative shrink-0">{`✓  アカウント数は個別設計`}</p>
      <p className="relative shrink-0">{`✓  プロジェクト無制限`}</p>
      <p className="relative shrink-0">{`✓  権限に応じた作成・編集`}</p>
    </div>
  );
}

function FlexibleSpace3() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Flexible space" />;
}

function CtaEnterprise1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="CTA / Enterprise">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#20201e] text-[14px] whitespace-nowrap">COMING SOON</p>
      </div>
      <div aria-hidden className="absolute border border-[#e7e1d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PricingCardEnterprise() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] h-[610px] items-start p-[28px] relative rounded-[16px] shrink-0 w-[282px]" data-name="Pricing Card / Enterprise">
      <div aria-hidden className="absolute border border-[#e7e1d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PlanHeader2 />
      <Price3 />
      <div className="bg-[#e7e1d8] h-px relative shrink-0 w-full" data-name="Divider" />
      <PlanLimits3 />
      <FlexibleSpace3 />
      <CtaEnterprise1 />
    </div>
  );
}

function Pricing4Plans() {
  return (
    <div className="content-stretch flex gap-[24px] h-[610px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing / 4 plans">
      <PricingCardFree />
      <PricingCardPersonal />
      <PricingCardTeam />
      <PricingCardEnterprise />
    </div>
  );
}

function Component10PricingFourPlans() {
  return (
    <div className="bg-[#f3efe8] relative shrink-0 w-full" data-name="10 / Pricing — Four plans">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[120px] py-[110px] relative size-full">
          <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[66.08px] relative shrink-0 text-[#20201e] text-[56px] tracking-[-0.84px] w-[900px]">さあ、始めよう。</p>
          <p className="[word-break:break-word] font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#4f4e49] text-[20px] w-[680px]">まずは無料から。チームの規模に合わせて選べます。</p>
          <AllPlansSharedFeatures />
          <Pricing4Plans />
        </div>
      </div>
    </div>
  );
}

function Component11FinalCta() {
  return (
    <div className="bg-[#faf8f4] relative shrink-0 w-full" data-name="11 / Final CTA">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[120px] py-[128px] relative size-full">
          <p className="[word-break:break-word] font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[55px] relative shrink-0 text-[#20201e] text-[44px] text-center tracking-[-0.44px] w-[900px]">
            ボールを止めない。
            <br aria-hidden />
            考える時間を、取り戻す。
          </p>
        </div>
      </div>
    </div>
  );
}

function Component12Footer() {
  return (
    <div className="bg-[#faf8f4] relative shrink-0 w-full" data-name="12 / Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start px-[120px] py-[64px] relative size-full">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1a1a18] text-[48px] tracking-[2.4px] whitespace-nowrap">TRAKON</p>
          <p className="font-['Noto_Sans_JP:Regular',sans-serif] font-normal leading-[28.8px] relative shrink-0 text-[#4f4e49] text-[16px] w-[1200px]">会社概要　利用規約　プライバシーポリシー　お問い合わせ</p>
        </div>
      </div>
    </div>
  );
}

export default function LpDesktop() {
  return (
    <div className="bg-[#faf8f4] content-stretch flex flex-col items-center relative size-full" data-name="LP / Desktop / 1440">
      <Component01Hero />
      <Component02Problem />
      <Component06ProductWhoHasTheBall />
      <Component04ProductTossAndReturn />
      <Component08ProductCrossProjectDashboard />
      <Component09Features />
      <Component10PricingFourPlans />
      <Component11FinalCta />
      <Component12Footer />
    </div>
  );
}