'use client';

import {QuoteIcon, StarIcon} from 'lucide-react';

import {Reveal} from '@/components/landing/reveal';
import {SectionHeading} from '@/components/landing/section-heading';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const reviews = [
  {
    quote:
      'The new quote flow asks the right questions before we call. Our office now spends far less time sorting weak enquiries from real jobs.',
    name: 'Rita Almeida',
    role: 'Operations lead, Vale Home Care',
    initials: 'RA',
  },
  {
    quote:
      'We finally have a site that sounds like us and works properly on a phone. Customers mention how easy it is to request a visit.',
    name: 'Tiago Martins',
    role: 'Owner, Norte & Sul Repairs',
    initials: 'TM',
  },
  {
    quote:
      'The weekly rhythm was excellent. We saw real screens early, made decisions quickly, and launched without disrupting the team.',
    name: 'Sofia Correia',
    role: 'Director, Casa Clara Services',
    initials: 'SC',
  },
];

const stars = ['one', 'two', 'three', 'four', 'five'];

export function Testimonials() {
  return (
    <section id="reviews" className="section-shell scroll-mt-24 py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Sample client stories"
          title="The work feels good when it makes the working day lighter."
          description="Placeholder reviews are included to show the intended content structure. Replace them with verified customer feedback before publishing."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal key={review.name} delay={index * 0.08}>
            <Card variant="glass" className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-1"
                    role="img"
                    aria-label="Five out of five stars"
                  >
                    {stars.map(star => (
                      <StarIcon
                        key={star}
                        className="size-4 fill-accent text-primary"
                      />
                    ))}
                  </div>
                  <QuoteIcon className="size-6 text-moss" />
                </div>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-8">
                <blockquote className="text-pretty text-lg">
                  “{review.quote}”
                </blockquote>
                <div className="mt-auto flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                    {review.initials}
                  </span>
                  <div>
                    <CardTitle className="font-mono text-sm font-semibold">
                      {review.name}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
                <Badge variant="outline">Draft review</Badge>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
