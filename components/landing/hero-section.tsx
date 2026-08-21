'use client';

import {motion} from 'framer-motion';
import {
  ArrowRightIcon,
  CalendarCheck2Icon,
  CircleCheckIcon,
} from 'lucide-react';
import Image from 'next/image';

import {placeholderImages} from '@/components/landing/placeholder-images';
import {Badge} from '@/components/ui/badge';
import {buttonVariants} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {cn} from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="section-shell pb-20 pt-16 sm:pt-24 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          className="flex flex-col items-start gap-6"
          initial={{opacity: 0, y: 48, filter: 'blur(12px)'}}
          animate={{opacity: 1, y: 0, filter: 'blur(0px)'}}
          transition={{duration: 0.9, ease: [0.32, 0.72, 0, 1]}}
        >
          <h1 className="text-balance max-w-2xl bg-linear-to-r from-foreground to-muted-foreground bg-clip-text font-mono text-5xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Websites that keep local service teams booked.
          </h1>
          <p className="text-pretty max-w-2xl text-lg text-muted-foreground sm:text-xl">
            We design and build fast websites, quote journeys, and practical
            software for home service businesses that want more calls and less
            admin.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className={cn(
                buttonVariants({variant: 'accent', size: 'xl'}),
                'w-full sm:w-auto',
              )}
            >
              Request a local quote
              <ArrowRightIcon data-icon="inline-end" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({variant: 'outline', size: 'xl'}),
                'w-full bg-background/60 sm:w-auto',
              )}
            >
              See what we build
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CircleCheckIcon className="size-4 text-primary" />
              Clear scope before we start
            </span>
            <span className="flex items-center gap-2">
              <CircleCheckIcon className="size-4 text-primary" />
              No obligation first call
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl"
          initial={{opacity: 0, scale: 0.94, rotate: 2}}
          animate={{opacity: 1, scale: 1, rotate: 0}}
          transition={{duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1]}}
        >
          <div className="absolute -inset-6 rounded-[48%_52%_42%_58%/52%_42%_58%_48%] bg-mist/80 blur-2xl" />
          <Card variant="glass" className="relative rounded-2xl p-2">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="size-2 rounded-full bg-clay" />
              <span className="size-2 rounded-full bg-accent" />
              <span className="size-2 rounded-full bg-moss" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                localpro.pt / book
              </span>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-secondary">
              <Image
                src={placeholderImages.hero.src}
                alt={placeholderImages.hero.alt}
                width={960}
                height={720}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-primary/90 p-4 text-primary-foreground backdrop-blur-xl">
                <p className="font-mono text-lg font-semibold">
                  Need help at home?
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Choose a service and get a reply within one business hour.
                </p>
              </div>
            </div>
          </Card>

          <motion.div
            className="absolute -bottom-8 -left-4 sm:-left-8"
            animate={{y: [0, -8, 0]}}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <Card variant="glass" size="sm" className="w-56">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-mono text-sm">
                  <CalendarCheck2Icon className="size-4 text-primary" />
                  New quote request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Exterior care · Cascais
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
