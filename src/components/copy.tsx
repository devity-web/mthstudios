import { IconSparkles } from "@tabler/icons-react"

export function Copy() {
  return (
    <div className="flex max-w-190 min-w-0 shrink flex-col [@media(max-height:500px)]:w-[52%]">
      <div className="inline-flex w-fit items-center gap-2.25 rounded-full border border-foreground/15 bg-foreground/5 px-3.25 py-2 font-mono text-[10px] tracking-[.08em] text-foreground/70 uppercase backdrop-blur-xl [&_svg]:size-3.5 [&_svg]:text-blue-200">
        <IconSparkles />
        AI-powered software studio
      </div>
      <h1 className="mt-4.5 max-w-195 font-display text-[clamp(3.05rem,15vw,4.6rem)] leading-[.75] font-medium tracking-[-.055em] text-balance sm:text-[clamp(3.7rem,11vw,5.2rem)] md:mt-[clamp(20px,3vh,32px)] md:text-[clamp(4.25rem,7.2vw,8rem)] [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:max-w-[58%] [@media(max-height:500px)]:text-[clamp(2.4rem,8vw,3.4rem)] [@media(max-height:700px)_and_(min-width:721px)]:text-[clamp(3.8rem,6.8vw,6.2rem)]">
        Landing pages
        <span className="block text-blue-200 italic">
          {" "}
          engineered to convert.
        </span>
      </h1>
      <p className="mt-5 max-w-[92%] text-[.9rem] leading-tight text-[#e5efef]/70 sm:max-w-140 sm:text-[.96rem] md:mt-[clamp(22px,3vh,34px)] md:max-w-162.5 md:text-[clamp(.96rem,1.35vw,1.2rem)] [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:max-w-[55%] [@media(max-height:500px)]:text-xs [@media(max-height:500px)]:leading-[1.45] [@media(max-height:700px)_and_(min-width:721px)]:mt-4.5">
        We combine strategy, design, and AI-powered development to ship
        high-conversion landing pages at startup speed.
      </p>
    </div>
  )
}
