'use client';

import {motion, useReducedMotion} from 'framer-motion';
import {ArrowRightIcon, ArrowUpRightIcon} from 'lucide-react';
import {buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import Velaris from '../velaris';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <Velaris height="100vh" className="absolute" grain={0.5}>
        <motion.div
          className="flex items-center justify-center flex-col h-full gap-3.5"
          initial={
            shouldReduceMotion
              ? false
              : {opacity: 0, y: 48, filter: 'blur(12px)'}
          }
          animate={{opacity: 1, y: 0, filter: 'blur(0px)'}}
          transition={{duration: 0.9, ease: [0.32, 0.72, 0, 1]}}
        >
          <h1 className="text-center text-7xl sm:text-8xl max-w-7xl font-mono font-semibold text-white 2xl:max-w-none">
            <span className="md:block">Win more business. </span>
            Waste less time.
          </h1>
          <p className="text-center max-w-170 text-lg text-white/85 sm:text-xl">
            MTH Studio designs websites customers understand and software teams
            can use every day, for businesses across Portugal.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
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
          </div>
          <p className="text-sm font-medium text-white/75">
            Based in Leiria · Projects across Portugal · Reply within one
            business day
          </p>
        </motion.div>
      </Velaris>
    </section>
  );
}
