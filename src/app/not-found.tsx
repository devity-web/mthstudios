'use client';

import {ArrowLeftIcon} from 'lucide-react';

import {buttonVariants} from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-24">
      <div className="glass-surface flex max-w-xl flex-col items-start gap-6 rounded-2xl p-8">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          404 / Route not found
        </p>
        <h1 className="text-balance font-mono text-4xl font-semibold">
          This page took a wrong turn.
        </h1>
        <p className="text-pretty text-lg text-muted-foreground">
          The link may have changed, but the studio is still right here.
        </p>
        <a href="/" className={buttonVariants({variant: 'accent', size: 'xl'})}>
          <ArrowLeftIcon data-icon="inline-start" />
          Back to the studio
        </a>
      </div>
    </main>
  );
}
