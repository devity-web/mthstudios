'use client';

import {motion} from 'framer-motion';
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

  return (
    <Component
      className={cn(className)}
      initial={{opacity: 0, y: 64, filter: 'blur(12px)'}}
      whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
      viewport={{once: true, amount: 0.18}}
      transition={{duration: 0.9, delay, ease: [0.32, 0.72, 0, 1]}}
    >
      {children}
    </Component>
  );
}
