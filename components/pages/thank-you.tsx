'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, Mail, Phone, ArrowRight, Sparkles, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import { siteConfig } from '@/lib/site';

export function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-48">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />

        <div className="container-jl relative">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg"
            >
              <CheckCircle2 className="h-12 w-12 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SectionBadge>Success</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 font-display text-4xl font-bold text-ink sm:text-5xl"
            >
              Thank you!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg"
            >
              Your message has been received. Our team will get back to you within 24 hours.
              In the meantime, explore our work and resources.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>What Happens Next</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              Here&apos;s what to <span className="text-gradient-gold">expect</span>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, title: 'We Review', description: 'Our team reviews your message and goals within a few hours.' },
              { icon: Clock, title: 'We Respond', description: 'You\'ll hear from us within 24 hours with next steps.' },
              { icon: Calendar, title: 'We Schedule', description: 'We book a free consultation at a time that works for you.' },
              { icon: Sparkles, title: 'We Plan', description: 'You receive a tailored proposal within 48 hours of our call.' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold-600">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute right-4 top-4 font-display text-2xl font-extrabold text-gold/20">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate help */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-card p-8 text-center shadow-sm sm:p-12">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Need to talk <span className="text-gradient-gold">now?</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              If it&apos;s urgent, reach us directly. We&apos;re here to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-gold/40 hover:text-gold-600"
              >
                <Mail className="h-4 w-4 text-gold-500" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-gold/40 hover:text-gold-600"
              >
                <Phone className="h-4 w-4 text-gold-500" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        badge="While You Wait"
        title="Explore our"
        titleHighlight="resources"
        description="Check out our free guides, blog, and portfolio while you wait for our response."
        primaryCta={{ label: 'Free Resources', href: '/resources' }}
        secondaryCta={{ label: 'Read the Blog', href: '/blog' }}
      />
    </>
  );
}
