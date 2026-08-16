'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, Zap, Rocket, Users, ShieldCheck, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { pricingPlans, whyChooseUs } from '@/lib/site';
import { cn } from '@/lib/utils';

const whyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Rocket, Users, ShieldCheck, Target, Heart,
};

export function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title={
          <>
            Transparent pricing, <span className="text-gradient-gold">no surprises</span>
          </>
        }
        description="Flat-fee pricing for every stage of your brand. No hourly billing, no hidden charges. Pick the plan that fits, and let's get to work."
      />

      {/* Pricing cards */}
      <section className="section-padding">
        <div className="container-jl">
          <StaggerGroup className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={cn(
                    'relative h-full overflow-hidden rounded-3xl border p-8 shadow-sm transition-all hover:shadow-float',
                    plan.popular
                      ? 'border-2 border-gold/40 bg-card shadow-gold'
                      : 'border-border/60 bg-card',
                  )}
                >
                  {plan.popular && (
                    <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-3 py-1 text-xs font-bold text-ink">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-display text-2xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-4xl font-extrabold text-ink">{plan.price}</span>
                    <span className="pb-1 text-sm text-muted-foreground">/ {plan.period}</span>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      'mt-6 w-full',
                      plan.popular
                        ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg'
                        : '',
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need something different? <Link href="/contact" className="font-semibold text-gold-600 hover:text-gold-500">Talk to us</Link> about a custom plan.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Compare Plans</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              Find the right <span className="text-gradient-gold">fit</span>
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] overflow-hidden rounded-2xl border border-border/60 bg-card">
              <thead>
                <tr className="border-b border-border/60 bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-ink">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-ink">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-600">Growth</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-ink">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Logo Design', starter: '3 concepts', growth: 'Full system', enterprise: 'Full system' },
                  { feature: 'Website Pages', starter: '5 pages', growth: '10 pages', enterprise: 'Custom' },
                  { feature: 'E-commerce', starter: '—', growth: '50 products', enterprise: 'Unlimited' },
                  { feature: 'SEO Setup', starter: 'Basic', growth: 'Full', enterprise: 'Advanced' },
                  { feature: 'Social Templates', starter: '10', growth: '30', enterprise: 'Custom' },
                  { feature: 'Promo Video', starter: '—', growth: '30 sec', enterprise: 'Monthly' },
                  { feature: 'Revisions', starter: '2 rounds', growth: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Delivery', starter: '7 days', growth: '30 days', enterprise: 'Custom' },
                  { feature: 'Support', starter: 'Email', growth: 'Priority', enterprise: '24/7' },
                  { feature: 'Account Manager', starter: '—', growth: '—', enterprise: 'Dedicated' },
                ].map((row, i) => (
                  <tr key={row.feature} className={cn('border-b border-border/40', i % 2 === 1 && 'bg-muted/20')}>
                    <td className="px-6 py-4 font-medium text-ink">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{row.starter}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gold-600">{row.growth}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Why Choose Jhakkas Lab</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              More than just an <span className="text-gradient-gold">agency</span>
            </h2>
          </div>
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason) => {
              const Icon = whyIcons[reason.icon] || Zap;
              return (
                <StaggerItem key={reason.title}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-all group-hover:bg-gold/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
