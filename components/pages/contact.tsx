'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { CTABanner } from '@/components/sections/cta-banner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig, faqs, services } from '@/lib/site';

const contactInfo = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: 'Location', value: siteConfig.address, href: '#map' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
];

const contactFaqs = faqs.filter((f) => f.topic === 'General').slice(0, 4);

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        title={
          <>
            Let&apos;s start a <span className="text-gradient-gold">conversation</span>
          </>
        }
        description="Have a project in mind? Book a free consultation or send us a message. We respond within 24 hours — no pressure, no jargon."
      />

      <section className="section-padding">
        <div className="container-jl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink">Get in Touch</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach us through any of these channels. We're here to help.
                </p>
                <ul className="mt-6 space-y-4">
                  {contactInfo.map((info) => (
                    <li key={info.label}>
                      <a
                        href={info.href}
                        className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-600">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-semibold text-ink">{info.value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp card */}
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">Prefer WhatsApp?</h3>
                    <p className="text-sm text-muted-foreground">Chat with us instantly.</p>
                  </div>
                </div>
                <Button asChild className="mt-4 w-full bg-emerald-500 text-white hover:bg-emerald-600" size="sm">
                  <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Map placeholder */}
              <div id="map" className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-gold/40" />
                    <p className="mt-2 text-sm font-semibold text-ink">{siteConfig.address}</p>
                    <p className="text-xs text-muted-foreground">Map integration ready</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-dots opacity-20" />
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-xl font-bold text-ink">Send us a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/5 p-12 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">Message Sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required placeholder="John Doe" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" className="h-11" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                          ))}
                          <SelectItem value="startup-package">Startup Launch Package</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" required placeholder="Tell us about your project..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our <a href="/privacy-policy" className="font-semibold text-gold-600 hover:text-gold-500">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Inline FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionBadge>Quick Answers</SectionBadge>
              <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
                Common <span className="text-gradient-gold">questions</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="mt-8">
              {contactFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-border/60 bg-card px-6 shadow-sm">
                  <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
