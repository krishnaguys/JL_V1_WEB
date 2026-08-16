'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Rocket,
  Users,
  ShieldCheck,
  Target,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionBadge } from '@/components/sections/section-badge';
import { ServiceCard } from '@/components/sections/service-card';
import { PortfolioCard } from '@/components/sections/portfolio-card';
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel';
import { ProcessSteps } from '@/components/sections/process-steps';
import { StatBar } from '@/components/sections/stat-bar';
import { CTABanner } from '@/components/sections/cta-banner';
import { BrandMarquee } from '@/components/sections/brand-marquee';
import { services, portfolioProjects, whyChooseUs } from '@/lib/site';

const whyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Rocket,
  Users,
  ShieldCheck,
  Target,
  Heart,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 -left-20 h-72 w-72 rounded-full bg-gold/5 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />

        <div className="container-jl relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionBadge>Premium Creative Agency</SectionBadge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Bold Branding.<br />
                Stunning Websites.<br />
                <span className="text-gradient-gold">Real Growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                We are Jhakkas Lab — a creative agency that helps ambitious startups
                and brands look bold, sell more, and grow faster. From identity to
                launch, we make it jhakkas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
                >
                  <Link href="/book-consultation">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-ink">4.9/5</span> from 50+ clients
                </p>
              </motion.div>
            </div>

            {/* Right: Mascot + floating cards */}
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative mx-auto h-[420px] w-[420px]"
              >
                {/* Mascot circle */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-ink-900 to-ink-700 shadow-float"
                >
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-gold/30" />
                  <div className="absolute inset-8 rounded-full border border-gold/20" />

                  {/* Panda mascot */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl">
                        <div className="relative">
                          {/* Ears */}
                          <div className="absolute -left-8 -top-2 h-10 w-10 rounded-full bg-ink-900" />
                          <div className="absolute -right-8 -top-2 h-10 w-10 rounded-full bg-ink-900" />
                          {/* Eyes */}
                          <div className="flex gap-4">
                            <div className="flex h-8 w-6 items-center justify-end rounded-full bg-ink-900 pr-1.5">
                              <div className="h-3 w-3 rounded-full bg-white" />
                            </div>
                            <div className="flex h-8 w-6 items-center justify-start rounded-full bg-ink-900 pl-1.5">
                              <div className="h-3 w-3 rounded-full bg-white" />
                            </div>
                          </div>
                          {/* Nose */}
                          <div className="mx-auto mt-1 h-2 w-3 rounded-full bg-ink-900" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
                      Captain JL
                    </div>
                  </div>
                </motion.div>

                {/* Floating service cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-8 top-8 glass rounded-xl p-3 shadow-glass"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-600">
                      <Zap className="h-4 w-4 text-ink" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">Branding</p>
                      <p className="text-[10px] text-muted-foreground">Bold identity</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-4 top-20 glass rounded-xl p-3 shadow-glass"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
                      <Rocket className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">Websites</p>
                      <p className="text-[10px] text-muted-foreground">Fast & stunning</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 left-12 glass rounded-xl p-3 shadow-glass"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">Growth</p>
                      <p className="text-[10px] text-muted-foreground">Real results</p>
                    </div>
                  </div>
                </motion.div>

                {/* Speech bubble */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-2 bottom-16 glass-gold rounded-2xl px-4 py-2.5 shadow-glass"
                >
                  <p className="text-xs font-semibold text-gold-700">
                    Let&apos;s build something jhakkas!
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Our Services</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Everything your brand needs, <span className="text-gradient-gold">under one roof</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              From identity to launch, we cover every aspect of building and growing
              a bold, unforgettable brand.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatBar />

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <SectionBadge>Recent Work</SectionBadge>
              <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
                Work we&apos;re <span className="text-gradient-gold">proud of</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                A glimpse of the brands and digital experiences we&apos;ve crafted.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.slice(0, 6).map((project, i) => (
              <PortfolioCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Why Jhakkas Lab</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Why brands choose <span className="text-gradient-gold">us</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We&apos;re not just another agency. We&apos;re your creative partner —
              bold, fast, and genuinely invested in your success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, i) => {
              const Icon = whyIcons[reason.icon] || Zap;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-all group-hover:bg-gold/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Testimonials */}
      <TestimonialCarousel limit={6} />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
