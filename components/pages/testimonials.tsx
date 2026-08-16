'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Play, Clock } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { StatBar } from '@/components/sections/stat-bar';
import { BrandMarquee } from '@/components/sections/brand-marquee';
import { CTABanner } from '@/components/sections/cta-banner';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { testimonials, videoTestimonials } from '@/lib/site';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const filterTabs = ['All', 'Branding', 'Websites', 'Marketing', 'E-commerce'];

export function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      <PageHero
        badge="Client Love"
        title={
          <>
            Don&apos;t take our word <span className="text-gradient-gold">for it</span>
          </>
        }
        description="Hear directly from the founders and brands we have helped grow. Real stories, real results — from branding to launch and beyond."
      />

      <BrandMarquee />

      {/* Review cards with filter */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                  activeFilter === tab
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold'
                    : 'border border-border bg-card text-foreground/70 hover:border-gold/40 hover:text-gold-600',
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={cn('flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white', t.color)}>
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

      <StatBar />

      {/* Video testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Video Stories</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Hear it <span className="text-gradient-gold">in their words</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Watch founders share their experience working with Jhakkas Lab.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {videoTestimonials.map((video, i) => (
              <motion.div
                key={video.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-950 shadow-sm transition-shadow hover:shadow-float">
                  <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80', video.color)} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-white/30">
                      <Play className="h-7 w-7 fill-white text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-ink-950/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className={cn('flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white', video.color)}>
                    {video.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{video.name}</p>
                    <p className="text-xs text-muted-foreground">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        badge="Join Them"
        title="Become our next"
        titleHighlight="success story"
        description="Book a free consultation and let's write your brand's growth story together."
      />
    </>
  );
}
