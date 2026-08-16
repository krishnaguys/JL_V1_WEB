'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { services } from '@/lib/site';
import { cn } from '@/lib/utils';

const bookingSteps = [
  { number: '01', title: 'Select Service', icon: Sparkles, description: 'Choose the service you need.' },
  { number: '02', title: 'Pick a Date & Time', icon: Calendar, description: 'Select your preferred slot.' },
  { number: '03', title: 'Your Details', icon: User, description: 'Tell us about yourself.' },
];

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <>
      <PageHero
        badge="Free Consultation"
        title={
          <>
            Book your <span className="text-gradient-gold">free consultation</span>
          </>
        }
        description="A 30-minute call to discuss your goals, timeline, and budget. No pressure, no obligation — just a genuine conversation about your brand."
      />

      {/* Booking steps */}
      <section className="section-padding">
        <div className="container-jl">
          {/* Steps indicator */}
          <div className="mx-auto mb-12 flex max-w-3xl items-center justify-center gap-4 sm:gap-8">
            {bookingSteps.map((s, i) => (
              <div key={s.number} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all',
                      step >= i + 1
                        ? 'border-gold-500 bg-gradient-to-br from-gold-400 to-gold-600 text-ink shadow-gold'
                        : 'border-border bg-card text-muted-foreground',
                    )}
                  >
                    {step > i + 1 ? <Check className="h-5 w-5" /> : <span className="text-sm font-bold">{s.number}</span>}
                  </div>
                  <span className={cn('text-xs font-semibold', step >= i + 1 ? 'text-ink' : 'text-muted-foreground')}>
                    {s.title}
                  </span>
                </div>
                {i < bookingSteps.length - 1 && (
                  <div className={cn('h-0.5 w-8 sm:w-16', step > i + 1 ? 'bg-gold-500' : 'bg-border')} />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              {/* Step 1: Service */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">What do you need?</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Select the service you're most interested in.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {services.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => setSelectedService(s.slug)}
                        className={cn(
                          'flex items-center gap-3 rounded-xl border p-4 text-left transition-all',
                          selectedService === s.slug
                            ? 'border-2 border-gold/40 bg-gold/5 shadow-gold'
                            : 'border-border/60 hover:border-gold/30',
                        )}
                      >
                        <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-white', s.color)}>
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-ink">{s.title}</p>
                          <p className="text-xs text-muted-foreground">Tap to select</p>
                        </div>
                        {selectedService === s.slug && (
                          <Check className="ml-auto h-5 w-5 text-gold-500" />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={nextStep}
                      disabled={!selectedService}
                      className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">Pick a date & time</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Choose your preferred day and time slot.</p>
                  </div>

                  {/* Days */}
                  <div>
                    <Label className="mb-3 block">Select a day</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {days.map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={cn(
                            'rounded-xl border py-3 text-sm font-semibold transition-all',
                            selectedDay === day
                              ? 'border-2 border-gold/40 bg-gold/5 text-gold-600'
                              : 'border-border/60 text-foreground/70 hover:border-gold/30',
                          )}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times */}
                  <div>
                    <Label className="mb-3 block">Select a time</Label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            'flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-sm font-medium transition-all',
                            selectedTime === time
                              ? 'border-2 border-gold/40 bg-gold/5 text-gold-600'
                              : 'border-border/60 text-foreground/70 hover:border-gold/30',
                          )}
                        >
                          <Clock className="h-3 w-3" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!selectedDay || !selectedTime}
                      className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = '/thank-you';
                  }}
                >
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">Your details</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Tell us about yourself so we can prepare.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required placeholder="John" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Doe" className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="john@company.com" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Brand</Label>
                    <Input id="company" placeholder="Your brand name" className="h-11" />
                  </div>

                  {/* Summary */}
                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">Booking Summary</p>
                    <div className="mt-2 space-y-1 text-sm text-foreground/80">
                      <p>Service: <span className="font-semibold text-ink">{services.find((s) => s.slug === selectedService)?.title || '—'}</span></p>
                      <p>Day: <span className="font-semibold text-ink">{selectedDay || '—'}</span></p>
                      <p>Time: <span className="font-semibold text-ink">{selectedTime || '—'}</span></p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={prevStep} variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      Confirm Booking
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>What to Expect</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              Your consultation <span className="text-gradient-gold">journey</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Calendar, title: 'Book a Slot', description: 'Pick a time that works for you.' },
              { icon: User, title: 'We Call You', description: 'A 30-minute call on your schedule.' },
              { icon: Sparkles, title: 'We Listen', description: 'We learn about your goals and vision.' },
              { icon: ArrowRight, title: 'You Get a Plan', description: 'A tailored proposal within 48 hours.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
