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
    question: 'What kind of project is a good fit?',
    answer:
      'We work best with businesses and organizations that have a clear offer and a real need for a stronger website, a smoother customer journey, or more useful operational software.',
  },
  {
    value: 'timeline',
    question: 'How long does a typical project take?',
    answer:
      'A focused business website usually takes four to six weeks. Custom portals and operations tools can take longer. We confirm the scope, milestones, and decision points before work begins.',
  },
  {
    value: 'content',
    question: 'Can you help with the words and structure?',
    answer:
      'Yes. You bring the business knowledge. We shape the message, page flow, and calls to action around the questions customers ask before they choose you.',
  },
  {
    value: 'tools',
    question: 'Can you connect our existing tools?',
    answer:
      'Often. We can connect common calendars, forms, payment services, analytics, and customer systems. We check the technical fit during discovery before promising an integration.',
  },
  {
    value: 'ownership',
    question: 'Do we own the finished work?',
    answer:
      'Yes. Once the agreed invoices are paid, you own the custom design and code created for your project. Any third party subscriptions stay in your business account wherever possible.',
  },
  {
    value: 'first-call',
    question: 'What happens after I share my project?',
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
            title="Know what to expect before we speak."
            description="These are the questions that usually matter before a project begins."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Card variant="glass">
            <CardContent>
              <Accordion defaultValue={['fit']}>
                {questions.map(item => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-base font-semibold">
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
