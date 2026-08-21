'use client';

import {
  BotIcon,
  CalendarRangeIcon,
  GaugeIcon,
  LayoutDashboardIcon,
  SearchCheckIcon,
  WrenchIcon,
} from 'lucide-react';

import {Reveal} from '@/components/landing/reveal';
import {SectionHeading} from '@/components/landing/section-heading';
import {Badge} from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    icon: SearchCheckIcon,
    title: 'Local websites',
    description:
      'Fast, search ready sites that make your work clear and turn nearby visitors into real enquiries.',
    outcome: 'More qualified calls',
    technology: ['Next.js', 'Local SEO'],
  },
  {
    icon: CalendarRangeIcon,
    title: 'Quote and booking flows',
    description:
      'Simple journeys that collect the right job details before your team picks up the phone.',
    outcome: 'Less time chasing details',
    technology: ['Forms', 'Calendars'],
  },
  {
    icon: LayoutDashboardIcon,
    title: 'Operations dashboards',
    description:
      'One practical view for jobs, customers, availability, and the numbers you use every week.',
    outcome: 'A clearer working day',
    technology: ['Supabase', 'Analytics'],
  },
  {
    icon: BotIcon,
    title: 'CRM and automation',
    description:
      'Connect enquiries, reminders, and follow up so fewer good leads disappear between tools.',
    outcome: 'Faster customer replies',
    technology: ['HubSpot', 'Webhooks'],
  },
  {
    icon: WrenchIcon,
    title: 'Custom client portals',
    description:
      'Give customers a calm place to approve work, view progress, and keep documents together.',
    outcome: 'A more professional service',
    technology: ['React', 'Stripe'],
  },
  {
    icon: GaugeIcon,
    title: 'Care and optimisation',
    description:
      'Ongoing improvements to speed, accessibility, search visibility, and conversion performance.',
    outcome: 'A site that keeps improving',
    technology: ['Vercel', 'Core Web Vitals'],
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="section-shell scroll-mt-24 py-20 lg:py-24"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Digital tools built around the way your crew actually works."
          description="From the first search to the final invoice, we remove friction from the moments that win jobs and keep customers informed."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} as="article" delay={index * 0.06}>
              <Card
                variant="glass"
                className="h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:shadow-glass"
              >
                <CardHeader>
                  <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-6" />
                  </span>
                  <CardTitle className="font-mono text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-pretty text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-4">
                  <p className="font-medium text-primary">{service.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.map(technology => (
                      <Badge key={technology} variant="outline">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
