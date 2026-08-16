'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type PortfolioCardProps = {
  project: {
    title: string;
    category: string;
    tags: string[];
    description: string;
    image: string;
    year: number;
    client: string;
    service: string;
  };
  index?: number;
};

export function PortfolioCard({ project, index = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-float"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105',
          getGradient(project.category),
        )} />
        <div className="absolute inset-0 bg-dots opacity-10" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-gold-400 backdrop-blur-sm">
          {project.category}
        </span>

        {/* Year badge */}
        <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.year}
        </span>

        {/* Decorative center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-white/20">
            <span className="font-display text-2xl font-bold text-white">
              {project.client.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
          {project.service}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-gold-600 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-white transition-all hover:bg-gold-500 hover:text-ink"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function getGradient(category: string): string {
  const gradients: Record<string, string> = {
    'Branding': 'from-gold-400 via-gold-500 to-gold-600',
    'Websites': 'from-blue-400 via-blue-500 to-blue-600',
    'E-commerce': 'from-emerald-400 via-emerald-500 to-emerald-600',
    'Marketing': 'from-rose-400 via-rose-500 to-rose-600',
    'UI/UX': 'from-violet-400 via-violet-500 to-violet-600',
    'Video': 'from-orange-400 via-orange-500 to-orange-600',
    'Printing': 'from-teal-400 via-teal-500 to-teal-600',
  };
  return gradients[category] || 'from-ink-700 via-ink-800 to-ink-900';
}
