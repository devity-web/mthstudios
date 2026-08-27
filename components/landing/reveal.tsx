'use client';

import {motion, useReducedMotion} from 'framer-motion';
import type {PropsWithChildren} from 'react';

import {cn} from '@/lib/utils';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article';
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const Component = motion[as];
  const shouldReduceMotion = useReducedMotion();

  return (
    <Component
      className={cn(className)}
      initial={
        shouldReduceMotion
          ? {opacity: 0.82}
          : {opacity: 0.72, y: 24, filter: 'blur(8px)'}
      }
      whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
      viewport={{once: true, amount: 0.18}}
      transition={{
        duration: shouldReduceMotion ? 0.16 : 0.64,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}
