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
    title: 'Websites and landing pages',
    description:
      'Make your offer easy to understand, easy to trust, and easy to act on.',
    outcome: 'Turn visits into qualified enquiries',
    technology: ['Next.js', 'Local SEO'],
  },
  {
    icon: CalendarRangeIcon,
    title: 'Quote and booking flows',
    description:
      'Collect the details your team needs before the first call, visit, or appointment.',
    outcome: 'Spend less time chasing context',
    technology: ['Forms', 'Calendars'],
  },
  {
    icon: LayoutDashboardIcon,
    title: 'Operations dashboards',
    description:
      'Bring customers, work, availability, and useful numbers into one practical view.',
    outcome: 'See what needs attention next',
    technology: ['Supabase', 'Analytics'],
  },
  {
    icon: BotIcon,
    title: 'CRM and automation',
    description:
      'Route enquiries, send reminders, and keep follow up moving between the tools you use.',
    outcome: 'Respond while interest is still warm',
    technology: ['HubSpot', 'Webhooks'],
  },
  {
    icon: WrenchIcon,
    title: 'Custom client portals',
    description:
      'Give customers one calm place to approve work, follow progress, and find documents.',
    outcome: 'Keep every project moving',
    technology: ['React', 'Stripe'],
  },
  {
    icon: GaugeIcon,
    title: 'Care and optimisation',
    description:
      'Keep improving speed, accessibility, search visibility, and the journeys that matter.',
    outcome: 'Protect the value of your website',
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
          title="Fix the digital gaps that cost you time and opportunities."
          description="Start with the part that causes the most friction. We can improve the customer journey, the work behind it, or both."
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
                  <CardTitle className="text-xl font-semibold">
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
