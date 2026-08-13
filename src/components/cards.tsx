const websiteCard =
  'flex shrink-0 flex-col overflow-hidden border border-white/70 bg-studio-cream text-primary-foreground shadow-[0_28px_80px_rgba(1,14,48,.34),inset_0_1px_rgba(255,255,255,.9)]';

export function Cards() {
  return (
    <div className="pointer-events-none flex h-[260px] w-full shrink-0 scale-[.72] items-center justify-center drop-shadow-[0_30px_50px_rgba(1,14,48,.2)] sm:h-[300px] sm:scale-[.86] md:h-auto md:w-[46vw] md:max-w-[670px] md:scale-100 lg:w-[min(42vw,670px)] [@media(max-height:500px)]:w-[44vw] [@media(max-height:500px)]:scale-[.68] [@media(max-height:700px)_and_(min-width:721px)]:w-[min(38vw,500px)]">
      <article
        className={`${websiteCard} z-[1] mr-[-64px] h-[245px] w-[195px] -rotate-[10deg] animate-bounce rounded-[22px] p-[15px] [animation-delay:-3s] [animation-duration:8.5s] [animation-timing-function:ease-in-out] motion-reduce:animate-none`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[7px] font-semibold tracking-[-.03em]">
            North/01
          </span>
          <div className="flex gap-1 [&_i]:size-[3px] [&_i]:rounded-full [&_i]:bg-primary-foreground/25">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="mt-5 flex size-12 items-end rounded-full bg-[linear-gradient(145deg,#ff8354,#f2bc89)] p-2 shadow-[0_10px_24px_rgba(255,107,53,.22)]">
          <i className="h-5 w-1.5 rounded-full bg-studio-cream/80" />
          <i className="ml-1 h-8 w-1.5 rounded-full bg-studio-cream" />
          <i className="ml-1 h-4 w-1.5 rounded-full bg-studio-cream/70" />
        </div>
        <strong className="mt-4 font-display text-[27px] leading-[.85] tracking-[-.04em]">
          Grow with
          <br />
          clarity.
        </strong>
        <div className="mt-4 flex flex-col gap-1.5">
          <i className="h-[3px] w-full rounded bg-primary-foreground/10" />
          <i className="h-[3px] w-3/4 rounded bg-primary-foreground/10" />
        </div>
        <span className="mt-auto flex w-fit rounded-full border border-primary-foreground/15 px-2.5 py-1.5 text-[6px] font-medium">
          Explore work ↗
        </span>
      </article>

      <article
        className={`${websiteCard} z-[3] h-[285px] w-[214px] rotate-[2deg] animate-bounce rounded-[24px] p-[17px] [animation-delay:-1s] [animation-duration:7.5s] [animation-timing-function:ease-in-out] motion-reduce:animate-none`}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-1 [&_i]:size-1 [&_i]:rounded-full [&_i]:bg-accent">
            <i />
            <i />
            <i />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[6px] text-primary-foreground/45">
              Studio / Digital
            </span>
            <span className="rounded-full bg-secondary px-2.5 py-1.5 text-[6px] text-secondary-foreground">
              Get started
            </span>
          </div>
        </div>
        <strong className="mt-8 font-display text-[36px] leading-[.82] tracking-[-.045em]">
          Your next
          <br />
          big idea.
        </strong>
        <p className="mt-3 max-w-[150px] text-[7px] leading-[1.5] text-primary-foreground/50">
          A clear digital home for ambitious ideas and the people building them.
        </p>
        <div className="mt-auto flex h-[74px] flex-col overflow-hidden rounded-[14px] bg-[linear-gradient(145deg,#173c49,#276b72)] p-3">
          <span className="text-[6px] text-studio-cream/60">
            Selected project
          </span>
          <strong className="mt-1 text-[10px] text-studio-cream">
            Beyond ordinary.
          </strong>
          <div className="mt-auto flex justify-end">
            <i className="size-9 rounded-full border-[6px] border-accent/80" />
          </div>
        </div>
      </article>

      <article
        className={`${websiteCard} z-[2] ml-[-64px] h-[252px] w-[198px] rotate-[9deg] animate-bounce rounded-[22px] p-[15px] [animation-delay:-5s] [animation-duration:9s] [animation-timing-function:ease-in-out] motion-reduce:animate-none`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[7px] font-bold">Arc°</span>
          <span className="rounded-full bg-primary-foreground px-2 py-1 text-[5px] text-studio-cream">
            Book a demo
          </span>
        </div>
        <div className="mt-5 flex flex-col rounded-[14px] bg-[#ede7dc] p-3">
          <span className="font-mono text-[5px] tracking-[.08em] text-primary-foreground/40 uppercase">
            Launch faster
          </span>
          <strong className="mt-2 text-[17px] leading-[.95] tracking-[-.04em]">
            Built to move.
            <br />
            Made to convert.
          </strong>
          <div className="mt-3 flex items-center gap-1.5">
            <i className="h-[5px] w-10 rounded-full bg-accent" />
            <i className="h-[5px] w-5 rounded-full bg-primary-foreground/15" />
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex flex-1 flex-col rounded-[10px] bg-secondary p-2 text-studio-cream">
            <span className="text-[5px] text-studio-cream/55">Conversion</span>
            <strong className="mt-1 text-[13px]">+38%</strong>
          </div>
          <div className="flex flex-1 flex-col rounded-[10px] border border-primary-foreground/10 p-2">
            <span className="text-[5px] text-primary-foreground/45">
              Ship time
            </span>
            <strong className="mt-1 text-[13px]">5 days</strong>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-end gap-1 text-[5px] text-primary-foreground/40">
          <i className="size-1 rounded-full bg-studio-aqua" /> Live now
        </div>
      </article>
    </div>
  );
}
