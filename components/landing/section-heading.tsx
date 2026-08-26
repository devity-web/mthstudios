'use client';

import {cn} from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverse';
};

export function SectionHeading({
  title,
  description,
  align = 'left',
  tone = 'default',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
      )}
    >
      <h2
        className={cn(
          'text-balance font-mono text-3xl font-semibold sm:text-4xl',
          tone === 'inverse' && 'text-primary-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-pretty text-lg text-muted-foreground',
            tone === 'inverse' && 'text-primary-foreground/70',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
