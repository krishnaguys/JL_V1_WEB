'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import { SectionBadge } from '@/components/sections/section-badge';
import { processSteps } from '@/lib/site';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
};

type ProcessStepsProps = {
  variant?: 'light' | 'dark';
  badge?: string;
  title?: string;
  description?: string;
};

export function ProcessSteps({
  variant = 'light',
  badge = 'Our Process',
  title = 'How we turn ideas into impact',
  description = 'A proven six-step process that takes you from concept to launch — and beyond.',
}: ProcessStepsProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`section-padding ${isDark ? 'bg-ink-950 text-white' : ''}`}>
      <div className="container-jl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge variant={isDark ? 'dark' : 'light'}>{badge}</SectionBadge>
          <h2 className={`mt-6 font-display text-3xl font-bold sm:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-ink'}`}>
            {title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-ink-300' : 'text-muted-foreground'}`}>
            {description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative text-center"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[55%] top-12 hidden h-px w-[90%] border-t-2 border-dashed border-gold/30 xl:block" />
                )}

                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                  <div className={`absolute inset-0 rounded-full bg-gold/10 blur-xl transition-opacity group-hover:opacity-100 ${isDark ? 'opacity-40' : 'opacity-20'}`} />
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-border shadow-float'} transition-transform group-hover:scale-110`}>
                    <Icon className="h-8 w-8 text-gold-500" />
                  </div>
                  <span className={`absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-xs font-bold text-ink shadow-gold`}>
                    {step.number}
                  </span>
                </div>
                <h3 className={`mt-4 font-display text-base font-bold ${isDark ? 'text-white' : 'text-ink'}`}>
                  {step.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-ink-400' : 'text-muted-foreground'}`}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
