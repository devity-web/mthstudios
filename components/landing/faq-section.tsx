'use client';

import {Reveal} from '@/components/landing/reveal';
import {SectionHeading} from '@/components/landing/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {Card, CardContent} from '@/components/ui/card';

const questions = [
  {
    value: 'fit',
    question: 'What kind of service business is the best fit?',
    answer:
      'We work best with established local teams in home care, maintenance, trades, cleaning, landscaping, and related services. The strongest projects start with a clear service offer and a genuine need for better enquiries or operations.',
  },
  {
    value: 'timeline',
    question: 'How long does a typical project take?',
    answer:
      'A focused service website usually takes four to six weeks. A custom portal or operations tool can take longer. We confirm the scope, milestones, and decision points before work begins.',
  },
  {
    value: 'content',
    question: 'Can you help with the words and structure?',
    answer:
      'Yes. We shape the message, page flow, and calls to action around the questions your customers ask before they book. You bring the service knowledge and we turn it into clear digital content.',
  },
  {
    value: 'tools',
    question: 'Can you connect our existing tools?',
    answer:
      'Usually. We can connect common calendars, forms, payment services, analytics, and customer systems. We check the technical fit during discovery before promising an integration.',
  },
  {
    value: 'ownership',
    question: 'Do we own the finished work?',
    answer:
      'Yes. Once the agreed invoices are paid, you own the custom design and code created for your project. Any third party subscriptions stay in your business account wherever possible.',
  },
  {
    value: 'first-call',
    question: 'What happens after we request a quote?',
    answer:
      'We review your details and reply within one business day. If there is a good fit, we arrange a free conversation with no obligation and send a clear written recommendation after it.',
  },
];

export function FaqSection() {
  return (
    <section className="section-shell py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Useful answers before the first call."
            description="If your question is more specific, add it to the quote form and we will answer it directly."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Card variant="glass">
            <CardContent>
              <Accordion defaultValue={['fit']}>
                {questions.map(item => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="font-mono text-base font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-pretty text-base text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
