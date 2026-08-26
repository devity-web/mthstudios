'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {ArrowUpRightIcon} from 'lucide-react';
import Image from 'next/image';
import {useEffect, useState} from 'react';

import {Button, buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';

const links = [
  {label: 'Services', href: '#services'},
  {label: 'How we work', href: '#process'},
  {label: 'Selected work', href: '#projects'},
  // {label: 'Reviews', href: '#reviews'},
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="section-shell fixed inset-x-0 top-0 z-50 pt-6">
      <nav
        aria-label="Primary navigation"
        className="glass-surface relative z-50 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2"
      >
        <a
          href="#main-content"
          aria-current="page"
          className="focus-ring flex items-center gap-2 rounded-full px-2 py-1"
        >
          <Image
            src="/images/mth-studios-mark-minimal-black-256.png"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span className="text-sm font-semibold tracking-tight">
            MTH/<span className="font-normal text-foreground/70">STUDIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={cn(
            buttonVariants({variant: 'accent'}),
            'hidden rounded-full md:inline-flex',
          )}
        >
          Discuss a project
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(current => !current)}
          className="relative rounded-full md:hidden"
        >
          <span
            className={cn(
              'absolute h-0.5 w-4 bg-current transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]',
              open ? 'rotate-45' : '-translate-y-1',
            )}
          />
          <span
            className={cn(
              'absolute h-0.5 w-4 bg-current transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]',
              open ? '-rotate-45' : 'translate-y-1',
            )}
          />
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-background/90 px-4 pt-32 backdrop-blur-3xl md:hidden"
            initial={{opacity: 0, clipPath: 'circle(0% at 90% 5%)'}}
            animate={{opacity: 1, clipPath: 'circle(140% at 90% 5%)'}}
            exit={{opacity: 0, clipPath: 'circle(0% at 90% 5%)'}}
            transition={{duration: 0.8, ease: [0.32, 0.72, 0, 1]}}
          >
            <div className="mx-auto flex max-w-md flex-col gap-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl px-4 py-3 font-mono text-3xl font-semibold"
                  initial={{opacity: 0, y: 48}}
                  animate={{opacity: 1, y: 0}}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.06,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-4"
                onClick={() => setOpen(false)}
                initial={{opacity: 0, y: 48}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                <a
                  href="#contact"
                  className={buttonVariants({variant: 'accent', size: 'xl'})}
                >
                  Discuss your project
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
