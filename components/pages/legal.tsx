'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileLock, Cookie, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/lib/site';

type LegalSection = {
  title: string;
  content: string;
};

type LegalPageProps = {
  badge: string;
  title: string;
  description: string;
  icon: 'shield' | 'file' | 'cookie';
  lastUpdated: string;
  effectiveDate: string;
  sections: LegalSection[];
  faq?: { question: string; answer: string }[];
};

export function LegalPage({
  badge,
  title,
  description,
  icon,
  lastUpdated,
  effectiveDate,
  sections,
  faq,
}: LegalPageProps) {
  const icons = {
    shield: ShieldCheck,
    file: FileLock,
    cookie: Cookie,
  };
  const Icon = icons[icon];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/5 blur-[80px]" />

        <div className="container-jl relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold"
            >
              <Icon className="h-10 w-10 text-ink" />
            </motion.div>

            <SectionBadge>{badge}</SectionBadge>
            <h1 className="mt-6 font-display text-4xl font-bold text-ink sm:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">{description}</p>

            {/* Metadata strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2">
                <span className="font-semibold text-ink">Last Updated:</span> {lastUpdated}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2">
                <span className="font-semibold text-ink">Effective:</span> {effectiveDate}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2">
                <span className="font-semibold text-ink">Company:</span> {siteConfig.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-1">
                {sections.map((section, i) => (
                  <a
                    key={i}
                    href={`#section-${i}`}
                    className="rounded-lg px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-gold-600"
                  >
                    {i + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Accordion sections */}
            <div>
              <Accordion type="single" collapsible className="space-y-3">
                {sections.map((section, i) => (
                  <AccordionItem
                    key={i}
                    value={`section-${i}`}
                    id={`section-${i}`}
                    className="overflow-hidden rounded-2xl border border-border/60 bg-card px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                      <span className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold-600">
                          {i + 1}
                        </span>
                        {section.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-10 text-sm leading-relaxed text-muted-foreground">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                {['SSL Encrypted', 'DPDP Act Compliant', 'GDPR Aware', 'No Third-Party Selling'].map((badge) => (
                  <span key={badge} className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground/70">
                    <Check className="h-4 w-4 text-gold-500" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* FAQ */}
              {faq && faq.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-display text-xl font-bold text-ink">Frequently Asked Questions</h3>
                  <Accordion type="single" collapsible className="mt-4 space-y-3">
                    {faq.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="overflow-hidden rounded-2xl border border-border/60 bg-card px-6 shadow-sm"
                      >
                        <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Contact */}
              <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-6 text-center">
                <h3 className="font-display text-lg font-bold text-ink">Questions about this policy?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contact us at <a href={`mailto:${siteConfig.email}`} className="font-semibold text-gold-600 hover:text-gold-500">{siteConfig.email}</a>
                </p>
                <Button asChild className="mt-4 bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg" size="sm">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        badge="Still Have Questions?"
        title="We're here to"
        titleHighlight="help"
        description="If you have any questions about this policy or our practices, don't hesitate to reach out."
      />
    </>
  );
}
