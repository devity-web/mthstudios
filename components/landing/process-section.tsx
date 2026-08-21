'use client';

import {CompassIcon, HammerIcon, RocketIcon} from 'lucide-react';

import {Reveal} from '@/components/landing/reveal';
import {SectionHeading} from '@/components/landing/section-heading';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const steps = [
  {
    number: '01',
    icon: CompassIcon,
    title: 'Local discovery',
    copy: 'We learn how customers find you, what your team needs, and where the current process loses momentum.',
  },
  {
    number: '02',
    icon: HammerIcon,
    title: 'Focused build',
    copy: 'You see working screens early. We refine the words, flow, and details around real customer decisions.',
  },
  {
    number: '03',
    icon: RocketIcon,
    title: 'Measured launch',
    copy: 'We test on real devices, prepare your team, and track the signals that show whether the work is paying off.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-shell scroll-mt-24 py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="A clear route from first conversation to a useful launch."
          description="No mystery phases and no giant handoff document. You always know what is moving and what comes next."
          align="center"
        />
      </Reveal>
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Reveal key={step.number} delay={index * 0.08}>
              <Card variant={index === 1 ? 'dark' : 'glass'} className="h-full">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant={index === 1 ? 'secondary' : 'outline'}>
                      {step.number}
                    </Badge>
                    <Icon className="size-6" />
                  </div>
                  <CardTitle className="font-mono text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={
                      index === 1
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    }
                  >
                    {step.copy}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
