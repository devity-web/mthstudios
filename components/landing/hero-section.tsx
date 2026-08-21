'use client';

import {motion, useReducedMotion} from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-10"
        initial={false}
        animate={
          shouldReduceMotion
            ? {scale: 1.04}
            : {
                scale: [1.04, 1.12, 1.06],
                x: ['0%', '-1.5%', '1%'],
                y: ['0%', '1%', '-1%'],
              }
        }
        transition={
          shouldReduceMotion
            ? {duration: 0}
            : {
                duration: 18,
                ease: [0.32, 0.72, 0, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'mirror',
              }
        }
      >
        <Image
          src="/images/clouds-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-primary/35" aria-hidden="true" />

      <motion.div
        className="relative z-10 flex w-full flex-col items-center gap-6 text-center"
        initial={
          shouldReduceMotion ? false : {opacity: 0, y: 48, filter: 'blur(12px)'}
        }
        animate={{opacity: 1, y: 0, filter: 'blur(0px)'}}
        transition={{duration: 0.9, ease: [0.32, 0.72, 0, 1]}}
      >
        <h1 className="text-balance text-7xl sm:text-8xl max-w-7xl leading-[0.82] tracking-tighter font-mono font-semibold text-white 2xl:max-w-none">
          <span className="md:block">Websites that </span>
          <span className="md:block">keep local business </span>
          <span className="mt-2 inline-block bg-accent px-2 py-1 text-accent-foreground sm:px-4 sm:py-2 lg:px-6 lg:py-3 2xl:py-6">
            teams booked.
          </span>
        </h1>
        <p className="text-pretty max-w-[680px] text-lg text-white/85 sm:text-xl">
          We design and build fast websites, quote journeys, and practical
          software for home service businesses that want more calls and less
          admin.
        </p>
      </motion.div>
    </section>
  );
}
