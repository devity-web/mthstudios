'use client';

import {FaqSection} from '@/components/landing/faq-section';
import {Footer} from '@/components/landing/footer';
import {Header} from '@/components/landing/header';
import {HeroSection} from '@/components/landing/hero-section';
import {LeadFormSection} from '@/components/landing/lead-form-section';
import {OrganicBackdrop} from '@/components/landing/organic-backdrop';
import {ProcessSection} from '@/components/landing/process-section';
import {ProjectsSection} from '@/components/landing/projects-section';
import {ServicesGrid} from '@/components/landing/services-grid';
import {TaglineReveal} from '@/components/landing/tagline-reveal';
// import {Testimonials} from '@/components/landing/testimonials';
import {TrustStrip} from '@/components/landing/trust-strip';

const tagLine =
  'Bring in better opportunities. Give your team better ways to deliver them.'
    .split(' ')
    .map((word, id) => ({id: `${id + 1}-${word}`, word}));

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden">
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 -translate-y-24 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:translate-y-0"
      >
        Skip to content
      </a>
      <OrganicBackdrop />
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ServicesGrid />
        <ProcessSection />
        <TaglineReveal words={tagLine} />
        <ProjectsSection />
        {/* <Testimonials /> */}
        <FaqSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
