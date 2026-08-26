'use client';

import {ArrowUpRightIcon} from 'lucide-react';
import Image from 'next/image';

import {Reveal} from '@/components/landing/reveal';
import {SectionHeading} from '@/components/landing/section-heading';
import {Badge} from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Carousel, CarouselContent, CarouselItem} from '../ui/carousel';

const projects = [
  {
    name: 'Sommarhus Beach Villa',
    url: 'https://sommarhus-nine.vercel.app/',
    domain: 'sommarhus-nine.vercel.app',
    image: '/images/projects/sommarhus.jpg',
    imageAlt: 'Sommarhus Beach Villa website homepage',
    description:
      'A calm hospitality website that brings the villa, amenities, 41 image gallery, guest reviews, and booking enquiries into one considered journey.',
    services: ['Strategy', 'UX design', 'Development'],
  },
  {
    name: 'Bowsy',
    url: 'https://www.bowsy.ie/',
    domain: 'bowsy.ie',
    image: '/images/projects/bowsy.jpg',
    imageAlt: 'Bowsy website homepage',
    description:
      'A clearer home for Bowsy’s AI and talent services, bringing the offer, industry recognition, and opportunity calls into one focused experience.',
    services: ['Website', 'Content structure', 'Development'],
  },
  {
    name: 'reGrowth Consulting',
    url: 'https://www.regrowthconsulting.com/',
    domain: 'regrowthconsulting.com',
    image: '/images/projects/regrowth-consulting.jpg',
    imageAlt: 'reGrowth Consulting website homepage',
    description:
      'A warm consultancy website that gives business support, career guidance, client stories, and scheduled calls a clear shared structure.',
    services: ['Website', 'Service journeys', 'Development'],
  },
  {
    name: 'Toskio',
    url: 'https://toskio.mthstudio.dev/',
    domain: 'toskio.mthstudio.dev',
    image: '/images/projects/toskio.jpg',
    imageAlt: 'Toskio website homepage',
    description:
      'A focused product website for pet shops and groomers, explaining online scheduling, the three step setup, available plans, and the free way to start.',
    services: ['Product website', 'UX design', 'Development'],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 py-20 lg:py-24"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Our projects"
          title="See how clearer thinking becomes useful digital work."
          description="Four businesses with different offers, audiences, and goals. Each needed a simpler path from interest to action."
        />
      </Reveal>

      <Carousel className="mt-12 w-full [&_[data-slot=carousel-content]]:-mx-4 [&_[data-slot=carousel-content]]:-my-16 [&_[data-slot=carousel-content]]:px-4 [&_[data-slot=carousel-content]]:py-16 sm:[&_[data-slot=carousel-content]]:-mx-6 sm:[&_[data-slot=carousel-content]]:px-6 lg:[&_[data-slot=carousel-content]]:-mx-8 lg:[&_[data-slot=carousel-content]]:px-8">
        <CarouselContent className="items-stretch">
          {projects.map(project => (
            <CarouselItem
              key={project.domain}
              className="flex basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card
                variant="glass"
                className="h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 shadow-none"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1280}
                  height={720}
                  className="aspect-video w-full object-cover object-top"
                />

                <CardHeader>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {project.domain}
                  </p>
                  <CardTitle className="text-2xl font-semibold">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-pretty text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex flex-wrap gap-2">
                  {project.services.map(service => (
                    <Badge key={service} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </CardContent>

                <CardFooter>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex w-full items-center justify-between rounded-lg py-2 font-semibold text-primary transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:translate-x-1 active:translate-x-0"
                    aria-label={`Visit ${project.name} website`}
                  >
                    Open project
                    <ArrowUpRightIcon className="size-5" aria-hidden="true" />
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
