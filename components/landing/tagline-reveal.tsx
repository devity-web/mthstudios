'use client';

import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {useRef} from 'react';

const words =
  'Turn local attention into booked work, then give your team better tools to deliver it.'
    .split(' ')
    .map((word, id) => ({id: `${id + 1}-${word}`, word}));

function RevealWord({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const start = index / words.length;
  const end = start + 1 / words.length;
  const opacity = useTransform(progress, [start, end], [0.28, 1]);
  const smoothOpacity = useSpring(opacity, {
    stiffness: 120,
    damping: 24,
    mass: 0.7,
  });

  return (
    <motion.span style={{opacity: smoothOpacity}}>
      {words[index].word}{' '}
    </motion.span>
  );
}

export function TaglineReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  return (
    <section
      ref={sectionRef}
      className="section-shell flex min-h-[70vh] items-center py-24"
    >
      <p className="text-balance max-w-2xl font-mono text-4xl font-semibold sm:text-5xl lg:text-6xl">
        {words.map((word, index) => (
          <RevealWord key={word.id} progress={scrollYProgress} index={index} />
        ))}
      </p>
    </section>
  );
}
