'use client';

import {Clock3Icon, MapPinIcon, RadarIcon} from 'lucide-react';
import Image from 'next/image';

import {Separator} from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="section-shell pb-8">
      <div className="rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <a
              href="/"
              className="focus-ring flex w-fit items-center gap-3 rounded-lg"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground">
                <Image
                  src="/images/mth-studios-mark-minimal-black-256.png"
                  alt=""
                  width={48}
                  height={48}
                />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                MTH/
                <span className="font-normal text-muted/70">STUDIO</span>
              </span>
            </a>
            <p className="text-pretty text-sm text-primary-foreground/70">
              Websites and software for local teams who take pride in useful
              work.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-sm font-semibold">Local address</h2>
            <p className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              Leiria, Portugal
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-sm font-semibold">Service radius</h2>
            <p className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <RadarIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              Remote projects across Portugal
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-sm font-semibold">Business hours</h2>
            <p className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <Clock3Icon className="mt-0.5 size-4 shrink-0 text-accent" />
              Monday to Friday
              <br />
              09:00 to 18:00
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <div className="flex flex-col gap-4 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MTH Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              className="focus-ring rounded-sm hover:text-primary-foreground"
              href="/privacy"
            >
              Privacy
            </a>
            <a
              className="focus-ring rounded-sm hover:text-primary-foreground"
              href="/terms"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
