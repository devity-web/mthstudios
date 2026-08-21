'use client';

import {CheckCircle2Icon, ShieldCheckIcon} from 'lucide-react';

import {Reveal} from '@/components/landing/reveal';
import {Badge} from '@/components/ui/badge';

const partners = ['Next.js', 'Vercel', 'Supabase', 'Stripe', 'Google Business'];

export function TrustStrip() {
  return (
    <Reveal as="section" className="section-shell pb-20">
      <div className="glass-surface flex flex-col gap-6 rounded-2xl p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
            <ShieldCheckIcon className="size-5 text-primary" />
          </span>
          <div>
            <p className="font-mono text-sm font-semibold">
              Reliable tools, chosen with care
            </p>
            <p className="text-sm text-muted-foreground">
              A modern stack without unnecessary complexity.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {partners.map(partner => (
            <Badge key={partner} variant="outline">
              <CheckCircle2Icon data-icon="inline-start" />
              {partner}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
