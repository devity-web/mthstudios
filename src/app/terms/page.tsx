'use client';

import {LegalPage} from '@/components/legal-page';

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Terms" title="Prototype terms for local review.">
      <p>
        The content, reviews, business details, and service descriptions on this
        local prototype are draft material for design review. They do not create
        a commercial offer or service agreement.
      </p>
      <p>
        Replace this page with approved business terms, legal identity details,
        pricing conditions, and project policies before the site is made public.
      </p>
    </LegalPage>
  );
}
