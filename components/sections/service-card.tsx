'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  Globe,
  ShoppingBag,
  TrendingUp,
  Figma,
  Video,
  Printer,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Globe,
  ShoppingBag,
  TrendingUp,
  Figma,
  Video,
  Printer,
  Lightbulb,
};

type ServiceCardProps = {
  service: {
    slug: string;
    title: string;
    icon: string;
    short: string;
    color: string;
  };
  href?: string;
  className?: string;
};

export function ServiceCard({ service, href = '/services', className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Palette;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-float',
        className,
      )}
    >
      {/* Hover gradient glow */}
      <div className={cn(
        'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20',
        service.color,
      )} />

      <div className={cn(
        'flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg',
        service.color,
      )}>
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-ink">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>

      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
