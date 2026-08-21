'use client';

import {
  Clock3Icon,
  MapPinIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
} from 'lucide-react';
import Image from 'next/image';

import {placeholderImages} from '@/components/landing/placeholder-images';
import {Reveal} from '@/components/landing/reveal';
import {SectionHeading} from '@/components/landing/section-heading';

const advantages = [
  {
    icon: MapPinIcon,
    title: 'Close enough to understand',
    copy: 'Based in Lisbon, with a practical feel for the way local customers search, compare, and make contact.',
  },
  {
    icon: MessageCircleIcon,
    title: 'A real person answers',
    copy: 'You speak directly with the people shaping and building the work, not an account layer passing messages around.',
  },
  {
    icon: Clock3Icon,
    title: 'Reliable working rhythm',
    copy: 'Clear weekly updates, sensible response times, and honest visibility when a decision needs your input.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Built for the long run',
    copy: 'Clean source code, documented access, and tools your business can keep using even as your needs change.',
  },
];

export function LocalAdvantage() {
  return (
    <section id="local" className="section-shell scroll-mt-24 py-20 lg:py-24">
      <div className="glass-dark overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[42%_58%_62%_38%/52%_35%_65%_48%] bg-accent/20 blur-2xl" />
              <Image
                src={placeholderImages.project.src}
                alt={placeholderImages.project.alt}
                width={960}
                height={720}
                className="relative aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-background/80 px-4 py-3 text-foreground shadow-glass backdrop-blur-xl">
                <p className="font-mono text-sm font-semibold">Lisbon based</p>
                <p className="text-xs text-muted-foreground">
                  Serving Portugal with local context
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="The local advantage"
              title="A nearby studio that treats reliability as part of the product."
              description="Good software should feel as dependable as the service you deliver at a customer’s door."
              tone="inverse"
            />
            <ul className="mt-8 flex flex-col gap-6">
              {advantages.map(advantage => {
                const Icon = advantage.icon;
                return (
                  <li key={advantage.title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-mono text-base font-semibold">
                        {advantage.title}
                      </h3>
                      <p className="mt-2 text-pretty text-sm text-primary-foreground/70">
                        {advantage.copy}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
