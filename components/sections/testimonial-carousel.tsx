'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionBadge } from '@/components/sections/section-badge';
import { testimonials } from '@/lib/site';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TestimonialCarouselProps = {
  badge?: string;
  title?: string;
  description?: string;
  limit?: number;
};

export function TestimonialCarousel({
  badge = 'Client Love',
  title = 'What our clients say',
  description = 'Don\u2019t take our word for it. Hear from the founders and brands we\u2019ve helped grow.',
  limit,
}: TestimonialCarouselProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  const [index, setIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, items.length - itemsPerView);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="section-padding">
      <div className="container-jl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative mt-12">
          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${index} * (100% / ${itemsPerView} + 16px) * ${itemsPerView})` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {items.map((t) => (
                <div
                  key={t.name}
                  className="w-full shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float">
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
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-ink">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          {items.length > itemsPerView && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                disabled={index === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-gold/40 hover:text-gold-500 disabled:opacity-40"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-8 bg-gold-500' : 'w-2 bg-border'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                disabled={index === maxIndex}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-gold/40 hover:text-gold-500 disabled:opacity-40"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
