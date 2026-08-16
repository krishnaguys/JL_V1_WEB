'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  Sparkles,
  ArrowRight,
  Palette,
  Globe,
  ShoppingBag,
  TrendingUp,
  Video,
  FileText,
  Zap,
  Clock,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel';
import { CTABanner } from '@/components/sections/cta-banner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { faqs } from '@/lib/site';

const includedItems = [
  { icon: Palette, title: 'Full Brand Identity', description: 'Logo, color system, typography, and complete brand guidelines booklet.' },
  { icon: Globe, title: '10-Page Custom Website', description: 'Professionally designed, responsive, and SEO-optimized website built to convert.' },
  { icon: ShoppingBag, title: 'E-commerce Setup', description: 'Online store with up to 50 products, payment gateway, and optimized checkout.' },
  { icon: TrendingUp, title: 'SEO + Google My Business', description: 'Local SEO setup, Google My Business optimization, and keyword targeting.' },
  { icon: FileText, title: 'Social Media Kit', description: '30 ready-to-use social media templates for consistent, professional posting.' },
  { icon: Video, title: 'Promotional Video', description: 'A 30-second promotional video for social media, ads, and your website.' },
];

const packageFaqs = faqs.filter((f) => f.topic === 'Startup Launch Package');

export function StartupLaunchPage() {
  return (
    <>
      <PageHero
        badge="Flagship Offer"
        title={
          <>
            The Startup <span className="text-gradient-gold">Launch Package</span>
          </>
        }
        description="Everything a new business needs to launch professionally — branding, website, e-commerce, marketing, and more. Delivered in 30 days. One flat price."
      >
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
          >
            <Link href="/book-consultation">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started — ₹49,999
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg font-bold text-ink-400 line-through">₹79,999</span>
            <span className="rounded-full bg-gold/10 px-3 py-1 font-semibold text-gold-600">Save 37%</span>
          </div>
        </div>
      </PageHero>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>What&apos;s Included</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Six pillars of a <span className="text-gradient-gold">perfect launch</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Every element is crafted by senior designers and developers. No templates, no shortcuts — just bold, premium work.
            </p>
          </div>

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-gold">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Bonus features */}
          <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <h3 className="font-display text-lg font-bold text-ink">Plus these bonuses:</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {['Unlimited Revisions', '30-Day Delivery', 'Priority Support', 'Brand Guidelines Booklet', 'Source Files Included', '30-Day Post-Launch Support'].map((bonus) => (
                <div key={bonus} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <Check className="h-4 w-4 text-gold-500" />
                  {bonus}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark process strip */}
      <section className="bg-ink-950 py-16 text-white">
        <div className="container-jl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { icon: Zap, label: 'Bold by default', value: 'No templates' },
              { icon: Clock, label: 'Delivery time', value: '30 days' },
              { icon: ShieldCheck, label: 'Revisions', value: 'Unlimited' },
              { icon: Star, label: 'Satisfaction', value: '98%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto h-8 w-8 text-gold-400" />
                <p className="mt-3 font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-ink-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing card */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-card p-8 shadow-float sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
              <div className="relative text-center">
                <SectionBadge>One Flat Price</SectionBadge>
                <div className="mt-6 flex items-end justify-center gap-3">
                  <span className="text-2xl font-bold text-ink-400 line-through">₹79,999</span>
                  <span className="font-display text-5xl font-extrabold text-ink sm:text-6xl">₹49,999</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Everything included. No hidden fees.</p>

                <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                  {[
                    'Full Brand Identity System',
                    '10-Page Custom Website',
                    'E-commerce (50 products)',
                    'SEO + Google My Business',
                    '30 Social Media Templates',
                    '30-Second Promo Video',
                    'Brand Guidelines Booklet',
                    'Unlimited Revisions',
                    '30-Day Delivery',
                    'Source Files Included',
                    'Priority Support',
                    '30-Day Post-Launch Support',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 shrink-0 text-gold-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
                >
                  <Link href="/book-consultation">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Launch Your Startup Today
                  </Link>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">50% deposit to start, 50% on delivery. No risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel
        badge="Package Reviews"
        title="Startups we've launched"
        description="Real stories from founders who used the Startup Launch Package to go from idea to launch."
        limit={4}
      />

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionBadge>Package FAQ</SectionBadge>
              <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
                Questions about the <span className="text-gradient-gold">package?</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="mt-8">
              {packageFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-ink">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABanner
        badge="Ready to Launch?"
        title="Your startup deserves a"
        titleHighlight="jhakkas launch"
        description="Book a free consultation and let's plan your launch. We'll have you live in 30 days."
      />
    </>
  );
}
