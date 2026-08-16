'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, TrendingUp, Home, Calendar, Laptop, Coffee, ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { jobOpenings, careerPerks, testimonials } from '@/lib/site';

const perkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, TrendingUp, Home, Calendar, Laptop, Coffee,
};

export function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers at Jhakkas Lab"
        title={
          <>
            Build bold brands <span className="text-gradient-gold">with us</span>
          </>
        }
        description="We're a remote-first team of creatives who love what we do. If you're passionate about bold design, clean code, and real impact — you'll feel right at home."
      />

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Why Work With Us</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Perks of the <span className="text-gradient-gold">job</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We invest in our team the same way we invest in our clients — with care, intention, and a commitment to growth.
            </p>
          </div>

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerPerks.map((perk) => {
              const Icon = perkIcons[perk.icon] || Heart;
              return (
                <StaggerItem key={perk.title}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-all group-hover:bg-gold/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{perk.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Open Positions</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Find your <span className="text-gradient-gold">next role</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We're always looking for talented, passionate people. Don't see a fit? Email us anyway.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {jobOpenings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-bold text-ink">{job.title}</h3>
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-600">{job.department}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.experience}</span>
                  </div>
                </div>
                <Button asChild className="shrink-0 bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee testimonials */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Life at JL</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              What our team <span className="text-gradient-gold">says</span>
            </h2>
          </div>
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <StaggerItem key={t.name}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTABanner
        badge="Don't See a Fit?"
        title="Email us anyway — we're always"
        titleHighlight="hiring talent"
        description="If you're passionate about bold design and clean code, we want to know. Send your portfolio and a note about what you do best."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
      />
    </>
  );
}
