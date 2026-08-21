'use client';

import {
  ArrowRightIcon,
  CheckCircle2Icon,
  Clock3Icon,
  MapPinIcon,
} from 'lucide-react';
import type {FormEvent} from 'react';
import {useState} from 'react';

import {Reveal} from '@/components/landing/reveal';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Field, FieldError, FieldGroup, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {Spinner} from '@/components/ui/spinner';
import {Textarea} from '@/components/ui/textarea';

const serviceOptions = [
  {label: 'Choose a service', value: null},
  {label: 'Local website', value: 'website'},
  {label: 'Quote or booking flow', value: 'booking'},
  {label: 'Dashboard or portal', value: 'dashboard'},
  {label: 'CRM or automation', value: 'automation'},
  {label: 'Ongoing website care', value: 'care'},
  {label: 'Not sure yet', value: 'unsure'},
];

type Errors = Partial<Record<'name' | 'phone' | 'service' | 'message', string>>;

export function LeadFormSection() {
  const [service, setService] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').replace(/\D/g, '');
    const message = String(form.get('message') ?? '').trim();
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = 'Enter your name.';
    if (phone.length < 7) nextErrors.phone = 'Enter a valid phone number.';
    if (!service) nextErrors.service = 'Choose the service you need.';
    if (message.length < 10)
      nextErrors.message = 'Tell us a little more about the project.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  }

  function resetForm() {
    setService(null);
    setErrors({});
    setStatus('idle');
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-24 pt-20">
      <div className="glass-dark overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col items-start gap-6">
              <Badge variant="secondary">Start a project</Badge>
              <h2 className="text-balance font-mono text-3xl font-semibold sm:text-4xl">
                Tell us what would make your working day better.
              </h2>
              <p className="text-pretty text-lg text-primary-foreground/70">
                Share the rough shape of the project. We will reply with useful
                next steps, even if the right answer is smaller than you
                expected.
              </p>
              <div className="flex flex-col gap-4 text-sm text-primary-foreground/80">
                <p className="flex items-center gap-3">
                  <Clock3Icon className="size-5 text-accent" />
                  Reply within one business day
                </p>
                <p className="flex items-center gap-3">
                  <MapPinIcon className="size-5 text-accent" />
                  Lisbon based, serving Portugal
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2Icon className="size-5 text-accent" />
                  Free first conversation
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card variant="glass">
              {status === 'success' ? (
                <CardContent
                  className="flex min-h-96 flex-col items-start justify-center gap-6"
                  aria-live="polite"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <CheckCircle2Icon className="size-6" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <CardTitle className="font-mono text-2xl font-semibold">
                      Your request is ready for review.
                    </CardTitle>
                    <p className="text-pretty text-muted-foreground">
                      This local demo does not send data. Connect the form to
                      your email or CRM before publishing.
                    </p>
                  </div>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Send another request
                  </Button>
                </CardContent>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <CardHeader>
                    <CardTitle className="font-mono text-xl font-semibold">
                      Request a local quote
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FieldGroup>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field data-invalid={Boolean(errors.name)}>
                          <FieldLabel htmlFor="name">Name</FieldLabel>
                          <Input
                            id="name"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                            aria-invalid={Boolean(errors.name)}
                            onChange={() =>
                              setErrors(current => ({
                                ...current,
                                name: undefined,
                              }))
                            }
                          />
                          <FieldError>{errors.name}</FieldError>
                        </Field>
                        <Field data-invalid={Boolean(errors.phone)}>
                          <FieldLabel htmlFor="phone">Phone</FieldLabel>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+351 912 345 678"
                            aria-invalid={Boolean(errors.phone)}
                            onChange={() =>
                              setErrors(current => ({
                                ...current,
                                phone: undefined,
                              }))
                            }
                          />
                          <FieldError>{errors.phone}</FieldError>
                        </Field>
                      </div>

                      <Field data-invalid={Boolean(errors.service)}>
                        <FieldLabel>Service needed</FieldLabel>
                        <Select
                          items={serviceOptions}
                          value={service}
                          onValueChange={value => {
                            setService(value);
                            setErrors(current => ({
                              ...current,
                              service: undefined,
                            }));
                          }}
                        >
                          <SelectTrigger
                            className="w-full"
                            aria-invalid={Boolean(errors.service)}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {serviceOptions.map(option => (
                                <SelectItem
                                  key={option.value ?? 'placeholder'}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FieldError>{errors.service}</FieldError>
                      </Field>

                      <Field data-invalid={Boolean(errors.message)}>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="What are you trying to improve?"
                          aria-invalid={Boolean(errors.message)}
                          onChange={() =>
                            setErrors(current => ({
                              ...current,
                              message: undefined,
                            }))
                          }
                        />
                        <FieldError>{errors.message}</FieldError>
                      </Field>

                      <Button
                        type="submit"
                        variant="accent"
                        size="xl"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Spinner data-icon="inline-start" />
                            Preparing request
                          </>
                        ) : (
                          <>
                            Request my quote
                            <ArrowRightIcon data-icon="inline-end" />
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </CardContent>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
