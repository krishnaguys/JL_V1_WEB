'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
};

export function SectionBadge({ children, className, variant = 'light' }: SectionBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider',
        variant === 'light'
          ? 'bg-gold/10 text-gold-600 border border-gold/20'
          : 'bg-white/10 text-gold-400 border border-white/15',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-glow-pulse" />
      {children}
    </motion.span>
  );
}
