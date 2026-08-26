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
    title: 'Understand the real workflow',
    copy: 'We learn what customers need, how your team works, and where time or opportunities are being lost.',
  },
  {
    number: '02',
    icon: HammerIcon,
    title: 'Build the useful core',
    copy: 'You see working screens early, so decisions happen around the real experience instead of a long specification.',
  },
  {
    number: '03',
    icon: RocketIcon,
    title: 'Launch with confidence',
    copy: 'We test on real devices, prepare your team, and make sure the finished work is ready for everyday use.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-shell scroll-mt-24 py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="See progress early. Make decisions with context."
          description="You work directly with senior practitioners, see the product take shape, and always know what comes next."
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
                  <CardTitle className="text-xl font-semibold">
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
