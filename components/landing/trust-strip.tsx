'use client';

import {CheckCircle2Icon, ShieldCheckIcon} from 'lucide-react';

import {Reveal} from '@/components/landing/reveal';
import {Badge} from '@/components/ui/badge';

const assurances = [
  'Direct senior involvement',
  'Working screens early',
  'Focused websites in four to six weeks',
  'Projects across Portugal',
];

export function TrustStrip() {
  return (
    <Reveal as="section" className="section-shell py-20">
      <div className="glass-surface flex flex-col gap-6 rounded-2xl p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
            <ShieldCheckIcon className="size-5 text-primary" />
          </span>
          <div>
            <p className="text-sm font-semibold">
              One studio from first click to daily operations
            </p>
            <p className="text-sm text-muted-foreground">
              Strategy, design, and development stay connected from discovery to
              launch.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {assurances.map(assurance => (
            <Badge key={assurance} variant="outline">
              <CheckCircle2Icon data-icon="inline-start" />
              {assurance}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
