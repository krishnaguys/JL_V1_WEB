'use client';

import { motion } from 'framer-motion';
import { brands } from '@/lib/site';

export function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-12">
      <div className="container-jl">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by ambitious brands across India
        </p>
        <div className="relative mt-8 overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex gap-12"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {doubled.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex shrink-0 items-center gap-2 text-lg font-bold text-muted-foreground/60 transition-colors hover:text-gold-500"
              >
                <span className="h-2 w-2 rounded-full bg-gold/40" />
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
