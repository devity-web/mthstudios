import {Cards} from '@/components/cards';
import {Copy} from '@/components/copy';
import {Header} from '@/components/header';

export default function Page() {
  return (
    <main className="flex h-svh w-full flex-col overflow-hidden bg-[#06234f] bg-[linear-gradient(90deg,rgba(2,24,64,.94)_0%,rgba(3,30,73,.8)_46%,rgba(4,34,79,.38)_100%),url('/images/halftone-landscape-hero.webp')] bg-cover bg-position-[42%_center] bg-no-repeat px-5 pt-[env(safe-area-inset-top)] sm:px-7 md:bg-center md:px-[clamp(28px,4.3vw,72px)]">
      <Header />

      <section
        id="top"
        className="flex min-h-0 flex-1 flex-col justify-center gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between md:gap-[4vw] [@media(max-height:500px)]:flex-row [@media(max-height:500px)]:items-center"
      >
        <Copy />
        <Cards />
      </section>

      <footer className="flex min-h-13.5 shrink-0 items-center justify-center border-t border-foreground/15 pb-[env(safe-area-inset-bottom)] md:min-h-22.5 md:justify-start [@media(max-height:500px)]:hidden [@media(max-height:700px)_and_(min-width:721px)]:min-h-16.25">
        <p className="font-mono text-[8px] tracking-[.07em] text-foreground/50 uppercase md:text-[9px]">
          Built for teams with something worth clicking.
        </p>
      </footer>
    </main>
  );
}
