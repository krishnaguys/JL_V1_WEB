'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { ProcessSteps } from '@/components/sections/process-steps';
import { CTABanner } from '@/components/sections/cta-banner';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { services } from '@/lib/site';

export function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title={
          <>
            Everything your brand needs, <span className="text-gradient-gold">under one roof</span>
          </>
        }
        description="From bold branding to stunning websites to real growth — we offer eight core services designed to take your brand from concept to launch and beyond."
      />

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container-jl">
          <StaggerGroup className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <div className="group h-full rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                  <div className="flex items-start justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                      <ServiceIcon name={service.icon} />
                    </div>
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-600">
                      0{services.indexOf(service) + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 shrink-0 text-gold-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Startup Launch Package highlight */}
      <section className="section-padding bg-ink-950 text-white">
        <div className="container-jl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-900 to-ink-800 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-[100px]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <SectionBadge variant="dark">Flagship Offer</SectionBadge>
                <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
                  The Startup Launch Package
                </h2>
                <p className="mt-4 text-base text-ink-300 sm:text-lg">
                  Everything a new business needs to launch professionally — branding, website,
                  e-commerce, marketing, and more — delivered in 30 days for one flat price.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg"
                  >
                    <Link href="/startup-launch-package">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Explore the Package
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/pricing">See Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Branding', 'Website', 'E-commerce', 'SEO', 'Social Kit', 'Video', 'Unlimited Revisions', '30-Day Delivery'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <Check className="h-4 w-4 text-gold-400" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTABanner />
    </>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Palette: <PaletteIcon />,
    Globe: <GlobeIcon />,
    ShoppingBag: <ShoppingBagIcon />,
    TrendingUp: <TrendingUpIcon />,
    Figma: <FigmaIcon />,
    Video: <VideoIcon />,
    Printer: <PrinterIcon />,
    Lightbulb: <LightbulbIcon />,
  };
  return <>{icons[name] || <PaletteIcon />}</>;
}

function PaletteIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  );
}
function ShoppingBagIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
function TrendingUpIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
function FigmaIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}
function VideoIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}
function PrinterIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" />
    </svg>
  );
}
function LightbulbIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />
    </svg>
  );
}
