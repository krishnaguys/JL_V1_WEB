'use client';

import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/sections/section-badge';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  variant?: 'light' | 'dark';
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  badge,
  title,
  description,
  variant = 'light',
  children,
  className,
}: PageHeroProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={cn(
        'relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20',
        isDark ? 'bg-ink-950 text-white' : '',
        className,
      )}
    >
      {/* Background decorations */}
      {isDark ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.03]" />
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/5 blur-[80px]" />
        </>
      )}

      <div className="container-jl relative">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <SectionBadge variant={isDark ? 'dark' : 'light'}>{badge}</SectionBadge>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              'mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl',
              isDark ? 'text-white' : 'text-ink',
            )}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                'mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg',
                isDark ? 'text-ink-300' : 'text-muted-foreground',
              )}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
