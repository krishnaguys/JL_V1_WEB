'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/lib/animations';
import { siteConfig } from '@/lib/site';

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '', label: 'Cities Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export function StatBar() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]" />

      <div className="container-jl relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold text-gradient-gold sm:text-5xl lg:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-ink-300 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
