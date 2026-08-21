'use client';

import {ArrowLeftIcon} from 'lucide-react';

import {buttonVariants} from '@/components/ui/button';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function LegalPage({eyebrow, title, children}: LegalPageProps) {
  return (
    <main className="section-shell min-h-screen py-24">
      <div className="glass-surface mx-auto flex max-w-3xl flex-col gap-8 rounded-2xl p-6 sm:p-8">
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="text-balance font-mono text-4xl font-semibold">
          {title}
        </h1>
        <div className="flex flex-col gap-6 text-pretty text-base text-muted-foreground">
          {children}
        </div>
        <a
          href="/"
          className={buttonVariants({variant: 'outline', size: 'xl'})}
        >
          <ArrowLeftIcon data-icon="inline-start" />
          Back to MTH Studio
        </a>
      </div>
    </main>
  );
}
