'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/sections/section-badge';

type CTABannerProps = {
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTABanner({
  badge = 'Let\u2019s Build Together',
  title = 'Ready to make your brand',
  titleHighlight = 'jhakkas?',
  description = 'Book a free consultation and let\u2019s turn your vision into a bold, unforgettable brand. No pressure, no jargon — just a genuine conversation about your goals.',
  primaryCta = { label: 'Book Free Consultation', href: '/book-consultation' },
  secondaryCta = { label: 'View Our Work', href: '/portfolio' },
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-jl">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center sm:px-12 lg:px-16 lg:py-24">
          {/* Background glows */}
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />

          <div className="relative mx-auto max-w-2xl">
            <SectionBadge variant="dark">{badge}</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              {title} <span className="text-gradient-gold">{titleHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-base text-ink-300 sm:text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
              >
                <Link href={primaryCta.href}>
                  <Sparkles className="mr-2 h-5 w-5" />
                  {primaryCta.label}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={secondaryCta.href}>
                  {secondaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
