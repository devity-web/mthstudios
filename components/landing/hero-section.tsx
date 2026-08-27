'use client';

import {motion, useAnimationControls, useReducedMotion} from 'framer-motion';
import {ArrowRightIcon, ArrowUpRightIcon} from 'lucide-react';
import {useLayoutEffect} from 'react';

import {buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import Velaris from '../velaris';

const ease = [0.16, 1, 0.3, 1] as const;

const heroHidden = {
  line: {y: '110%', filter: 'blur(10px)'},
  signal: {scaleX: 0},
  signalText: {opacity: 0, y: 18},
  supporting: {opacity: 0, y: 18, filter: 'blur(6px)'},
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimationControls();

  useLayoutEffect(() => {
    if (shouldReduceMotion) return;

    controls.set('hidden');
    controls.start('visible');
  }, [controls, shouldReduceMotion]);

  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <Velaris height="100vh" className="absolute" grain={0.5}>
        <motion.div
          className="flex h-full flex-col items-center justify-center gap-6 px-4 text-center sm:px-6"
          initial={false}
          animate={shouldReduceMotion ? 'visible' : controls}
        >
          <h1 className="text-balance max-w-5xl font-mono text-6xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                variants={{
                  hidden: heroHidden.line,
                  visible: {y: 0, filter: 'blur(0px)'},
                }}
                transition={{duration: 0.72, ease}}
              >
                Win more business.
              </motion.span>
            </span>
            <span className="relative inline-block overflow-hidden rounded-xl px-3 pb-2 pt-1 text-accent-foreground sm:px-4">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 origin-left bg-accent"
                variants={{
                  hidden: heroHidden.signal,
                  visible: {scaleX: 1},
                }}
                transition={{duration: 0.58, delay: 0.28, ease}}
              />
              <motion.span
                className="relative block"
                variants={{
                  hidden: heroHidden.signalText,
                  visible: {opacity: 1, y: 0},
                }}
                transition={{duration: 0.46, delay: 0.46, ease}}
              >
                Waste less time.
              </motion.span>
            </span>
          </h1>
          <motion.p
            className="text-pretty max-w-2xl text-lg text-white/85 sm:text-xl"
            variants={{
              hidden: heroHidden.supporting,
              visible: {opacity: 1, y: 0, filter: 'blur(0px)'},
            }}
            transition={{duration: 0.54, delay: 0.58, ease}}
          >
            MTH Studio designs websites customers understand and software teams
            can use every day, for businesses across Portugal.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-3 sm:flex-row"
            variants={{
              hidden: heroHidden.supporting,
              visible: {opacity: 1, y: 0, filter: 'blur(0px)'},
            }}
            transition={{duration: 0.54, delay: 0.68, ease}}
          >
            <a
              href="#contact"
              className={cn(
                buttonVariants({variant: 'accent', size: 'xl'}),
                'rounded-full',
              )}
            >
              Discuss your project
              <ArrowRightIcon data-icon="inline-end" />
            </a>
            <a
              href="#projects"
              className={cn(
                buttonVariants({variant: 'outline', size: 'xl'}),
                'rounded-full border-white/40 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 hover:text-white',
              )}
            >
              See selected work
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </motion.div>
          <motion.p
            className="text-pretty text-sm font-medium text-white/75"
            variants={{
              hidden: heroHidden.supporting,
              visible: {opacity: 1, y: 0, filter: 'blur(0px)'},
            }}
            transition={{duration: 0.48, delay: 0.76, ease}}
          >
            Based in Leiria · Projects across Portugal · Reply within one
            business day
          </motion.p>
        </motion.div>
      </Velaris>
    </section>
  );
}
