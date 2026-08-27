'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

export function OrganicBackdrop() {
  const shouldReduceMotion = useReducedMotion();
  const {scrollYProgress} = useScroll();
  const firstY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const secondY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const firstYSmooth = useSpring(firstY, {stiffness: 90, damping: 26});
  const secondYSmooth = useSpring(secondY, {stiffness: 90, damping: 26});

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{y: shouldReduceMotion ? 0 : firstYSmooth}}
        className="absolute -right-24 top-16 size-96 rounded-[42%_58%_62%_38%/52%_35%_65%_48%] bg-mist/70 blur-2xl"
      />
      <motion.div
        style={{y: shouldReduceMotion ? 0 : secondYSmooth}}
        className="absolute -left-24 top-[42rem] size-80 rounded-[64%_36%_45%_55%/39%_58%_42%_61%] bg-accent/25 blur-3xl"
      />
      <div className="absolute right-12 top-[92rem] size-64 rounded-[38%_62%_53%_47%/61%_43%_57%_39%] bg-clay/10 blur-3xl" />
    </div>
  );
}
