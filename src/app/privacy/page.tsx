'use client';

import {LegalPage} from '@/components/legal-page';

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy" title="A simple local demo with no tracking.">
      <p>
        This prototype does not send form details, store submissions, or load
        analytics. The quote interaction is included only to demonstrate
        validation and success states.
      </p>
      <p>
        Before publishing, connect the form to an approved email or customer
        system, document the data purpose and retention period, and replace this
        draft with a policy reviewed for your business.
      </p>
    </LegalPage>
  );
}
