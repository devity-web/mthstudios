import {IconArrowUpRight} from '@tabler/icons-react';
import {Button} from './ui/button';

export function Header() {
  return (
    <header className="flex h-18 shrink-0 items-center justify-between gap-3 md:h-26 [@media(max-height:500px)]:h-15.5">
      <div className="flex shrink-0 items-center gap-3 text-xl font-semibold tracking-[-.04em] sm:text-2xl">
        <span>
          MTH<span className="font-normal text-foreground/55">/studios</span>
        </span>
      </div>

      <Button className="h-11 shrink-0 rounded-full px-4 text-xs shadow-[0_10px_30px_rgba(0,0,0,.16)] transition-transform hover:-translate-y-px md:px-5 md:text-sm">
        Contact Us
        <IconArrowUpRight />
      </Button>
    </header>
  );
}
