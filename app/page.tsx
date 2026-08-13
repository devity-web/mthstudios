import { IconArrowUpRight, IconAtom, IconSparkles } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

const glassCard =
  "absolute z-[3] overflow-hidden border border-white/20 bg-gradient-to-br from-white/20 to-white/5 text-foreground shadow-[inset_0_1px_rgba(255,255,255,.28),0_24px_60px_rgba(0,0,0,.2)] backdrop-blur-2xl backdrop-saturate-150"

export default function Page() {
  return (
    <main className="relative isolate h-[100svh] w-full overflow-hidden bg-[radial-gradient(circle_at_71%_42%,rgba(52,129,145,.32),transparent_24%),linear-gradient(118deg,#073343_0%,#063040_48%,#092735_100%)]">
      <div
        className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.32)_0_.65px,transparent_.8px),radial-gradient(circle_at_70%_60%,rgba(255,255,255,.22)_0_.55px,transparent_.75px)] bg-[size:7px_7px,9px_9px] opacity-25 mix-blend-soft-light"
        aria-hidden="true"
      />
      <div
        className="absolute -top-[230px] right-[15%] z-[-2] size-[430px] animate-pulse rounded-full bg-accent/80 opacity-25 blur-[80px] [animation-duration:8s] motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-[210px] -left-[180px] z-[-2] size-[360px] animate-pulse rounded-full bg-studio-aqua opacity-25 blur-[80px] [animation-delay:-3s] [animation-duration:10s] motion-reduce:animate-none"
        aria-hidden="true"
      />

      <header className="absolute inset-x-0 top-0 z-10 flex h-[calc(72px+env(safe-area-inset-top))] items-center justify-between gap-3 px-5 pt-[env(safe-area-inset-top)] sm:px-7 md:h-[104px] md:px-[clamp(28px,4.3vw,72px)] md:pt-0 [@media(max-height:500px)]:h-[62px]">
        <div className="inline-flex shrink-0 items-center gap-3 text-xl font-semibold tracking-[-.04em] sm:text-2xl">
          <span>
            MTH<span className="font-normal text-foreground/55">/studios</span>
          </span>
        </div>

        <Button
          className="h-11 shrink-0 rounded-full px-4 text-xs shadow-[0_10px_30px_rgba(0,0,0,.16)] transition-transform hover:-translate-y-px md:px-5 md:text-sm"
        >
          Contact Us
          <IconArrowUpRight />
        </Button>
      </header>

      <section
        id="top"
        className="block h-full px-5 pt-[calc(94px+env(safe-area-inset-top))] pb-[70px] sm:px-7 md:grid md:grid-cols-[minmax(0,1fr)_minmax(330px,.8fr)] md:items-center md:gap-[4vw] md:px-[clamp(28px,4.3vw,72px)] md:pt-[86px] md:pb-[100px] lg:grid-cols-[minmax(0,1fr)_minmax(450px,.92fr)] [@media(max-height:500px)]:pt-[68px] [@media(max-height:500px)]:pb-10 [@media(max-height:650px)_and_(max-width:720px)]:pt-[calc(82px+env(safe-area-inset-top))] [@media(max-height:700px)_and_(min-width:721px)]:pt-[70px] [@media(max-height:700px)_and_(min-width:721px)]:pb-[70px]"
      >
        <div className="relative z-[3] max-w-[760px]">
          <div className="inline-flex items-center gap-[9px] rounded-full border border-foreground/15 bg-foreground/5 px-[13px] py-2 font-mono text-[10px] tracking-[.08em] text-foreground/70 uppercase backdrop-blur-xl [&_svg]:size-3.5 [&_svg]:text-accent">
            <IconSparkles aria-hidden="true" />
            AI-powered software studio
          </div>
          <h1 className="mt-[18px] max-w-[780px] font-display text-[clamp(3.05rem,15vw,4.6rem)] leading-[.84] font-medium tracking-[-.055em] text-balance sm:text-[clamp(3.7rem,11vw,5.2rem)] md:mt-[clamp(20px,3vh,32px)] md:text-[clamp(4.25rem,7.2vw,8rem)] [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:max-w-[58%] [@media(max-height:500px)]:text-[clamp(2.4rem,8vw,3.4rem)] [@media(max-height:700px)_and_(min-width:721px)]:text-[clamp(3.8rem,6.8vw,6.2rem)]">
            Landing pages
            <span className="block text-accent italic">
              {" "}
              engineered to convert.
            </span>
          </h1>
          <p className="mt-5 max-w-[92%] text-[.9rem] leading-[1.55] text-[#e5efef]/70 sm:max-w-[560px] sm:text-[.96rem] md:mt-[clamp(22px,3vh,34px)] md:max-w-[650px] md:text-[clamp(.96rem,1.35vw,1.2rem)] [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:max-w-[55%] [@media(max-height:500px)]:text-xs [@media(max-height:500px)]:leading-[1.45] [@media(max-height:700px)_and_(min-width:721px)]:mt-[18px]">
            We combine strategy, design, and AI-powered development to ship
            high-conversion landing pages at startup speed.
          </p>
        </div>

        <div
          className="pointer-events-none absolute bottom-[48px] left-1/2 aspect-square w-[min(92vw,430px)] -translate-x-1/2 scale-[.64] opacity-75 sm:right-[-10%] sm:bottom-[54px] sm:left-auto sm:w-[min(72vw,430px)] sm:translate-x-0 sm:scale-75 sm:opacity-85 md:relative md:right-auto md:bottom-auto md:w-[46vw] md:max-w-[670px] md:scale-100 md:justify-self-end md:opacity-100 lg:w-[min(42vw,670px)] [@media(max-height:500px)_and_(max-width:900px)]:right-auto [@media(max-height:500px)_and_(max-width:900px)]:bottom-[-18%] [@media(max-height:500px)_and_(max-width:900px)]:left-1/2 [@media(max-height:500px)_and_(max-width:900px)]:w-[52vw] [@media(max-height:500px)_and_(max-width:900px)]:-translate-x-1/2 [@media(max-height:500px)_and_(max-width:900px)]:scale-[.72] [@media(max-height:650px)_and_(max-width:720px)]:right-auto [@media(max-height:650px)_and_(max-width:720px)]:bottom-[24px] [@media(max-height:650px)_and_(max-width:720px)]:left-1/2 [@media(max-height:650px)_and_(max-width:720px)]:-translate-x-1/2 [@media(max-height:650px)_and_(max-width:720px)]:scale-[.54] [@media(max-height:700px)_and_(min-width:721px)]:w-[min(38vw,500px)]"
          aria-label="Abstract conversion engine animation"
        >
          <div
            className="absolute inset-[12%] animate-pulse rounded-full bg-[radial-gradient(circle,rgba(255,121,65,.26),rgba(55,214,192,.08)_32%,transparent_68%)] blur-[20px] [animation-duration:6s] motion-reduce:animate-none"
            aria-hidden="true"
          />

          <div
            className="absolute inset-[7%] animate-spin rounded-full border border-foreground/15 [animation-duration:28s] motion-reduce:animate-none"
            aria-hidden="true"
          >
            <i className="absolute top-[17%] right-[7%] size-[9px] rounded-full bg-accent shadow-[0_0_18px_#ff6b35]" />
          </div>
          <div
            className="absolute inset-[22%] animate-spin rounded-full border border-dashed border-foreground/15 [animation-direction:reverse] [animation-duration:20s] motion-reduce:animate-none"
            aria-hidden="true"
          >
            <i className="absolute bottom-[5%] left-[25%] size-[9px] rounded-full bg-studio-aqua shadow-[0_0_18px_#54d6c0]" />
          </div>

          <div
            className="absolute top-1/2 left-1/2 h-px w-[43%] origin-left -rotate-[28deg] bg-gradient-to-r from-accent/50 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 h-px w-[43%] origin-left rotate-[148deg] bg-gradient-to-r from-accent/50 to-transparent"
            aria-hidden="true"
          />

          <div
            className="absolute top-1/2 left-1/2 z-[2] grid size-[142px] -translate-1/2 rotate-12 animate-pulse place-items-center rounded-[38%] border border-white/25 bg-gradient-to-br from-white/20 to-white/5 shadow-[inset_0_1px_rgba(255,255,255,.35),0_30px_80px_rgba(0,0,0,.26),0_0_80px_rgba(255,119,66,.12)] backdrop-blur-2xl [animation-duration:5s] motion-reduce:animate-none"
            aria-hidden="true"
          >
            <span className="absolute inset-3.5 rounded-[35%] border border-white/10" />
            <IconAtom className="size-12 text-accent" />
          </div>

          <div
            className={`${glassCard} top-[13%] left-0 hidden w-[190px] -rotate-6 animate-bounce rounded-[18px] p-[19px] [animation-duration:7s] [animation-timing-function:ease-in-out] motion-reduce:animate-none sm:block`}
          >
            <span className="block font-mono text-[8px] tracking-[.08em] text-foreground/55 uppercase">
              01 / Strategy
            </span>
            <strong className="my-3 block text-[13px]">Find the signal</strong>
            <i className="mt-[7px] block h-1 w-full rounded bg-foreground/15" />
            <i className="mt-[7px] block h-1 w-2/3 rounded bg-foreground/15" />
          </div>

          <div
            className={`${glassCard} top-[15%] right-[2%] h-[220px] w-44 rotate-[8deg] animate-bounce rounded-[20px] bg-studio-cream p-[17px] text-primary-foreground [animation-delay:-2s] [animation-duration:8s] [animation-timing-function:ease-in-out] motion-reduce:animate-none [@media(max-height:560px)]:hidden`}
          >
            <div className="flex gap-1 [&_i]:size-1 [&_i]:rounded-full [&_i]:bg-accent">
              <i />
              <i />
              <i />
            </div>
            <strong className="mt-[34px] block font-display text-[31px] leading-[.83] tracking-[-.04em]">
              Your next
              <br />
              big idea.
            </strong>
            <span className="absolute bottom-[18px] left-[17px] rounded-full bg-secondary px-2.5 py-[7px] text-[7px] text-secondary-foreground">
              Get started
            </span>
          </div>

          <div
            className={`${glassCard} right-0 bottom-[7%] hidden w-[190px] -rotate-4 animate-bounce rounded-[18px] p-[18px] [animation-delay:-4s] [animation-duration:6.5s] [animation-timing-function:ease-in-out] motion-reduce:animate-none sm:block`}
          >
            <span className="block font-mono text-[8px] tracking-[.08em] text-foreground/55 uppercase">
              Conversion lift
            </span>
            <strong className="mt-2 block font-display text-[42px] font-medium text-accent">
              +42%
            </strong>
            <div className="mt-[7px] flex h-[34px] items-end gap-[5px] [&_i]:flex-1 [&_i]:rounded-t-[3px] [&_i]:bg-studio-aqua/40">
              <i className="h-[35%]" />
              <i className="h-[48%]" />
              <i className="h-[43%]" />
              <i className="h-[72%]" />
              <i className="h-full !bg-studio-aqua" />
            </div>
          </div>

          <div
            className="absolute bottom-[24%] left-[27%] z-[4] hidden h-4 w-3 animate-bounce bg-foreground drop-shadow-md [animation-duration:8s] [clip-path:polygon(0_0,100%_70%,55%_72%,38%_100%)] motion-reduce:animate-none sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute top-[28%] right-[25%] z-[4] hidden h-4 w-3 animate-bounce bg-accent drop-shadow-md [animation-delay:-3s] [animation-duration:9s] [clip-path:polygon(0_0,100%_70%,55%_72%,38%_100%)] motion-reduce:animate-none sm:block"
            aria-hidden="true"
          />
        </div>
      </section>

      <footer className="absolute right-5 bottom-[env(safe-area-inset-bottom)] left-5 z-[5] flex min-h-[54px] items-center justify-center gap-8 border-t border-foreground/15 sm:right-7 sm:left-7 md:right-[clamp(28px,4.3vw,72px)] md:left-[clamp(28px,4.3vw,72px)] md:min-h-[90px] md:justify-start [@media(max-height:500px)]:hidden [@media(max-height:700px)_and_(min-width:721px)]:min-h-[65px]">
        <p className="font-mono text-[8px] tracking-[.07em] text-foreground/50 uppercase md:text-[9px]">
          Built for teams with something worth clicking.
        </p>
      </footer>
    </main>
  )
}
