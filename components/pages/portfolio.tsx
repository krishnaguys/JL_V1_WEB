'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero } from '@/components/sections/page-hero';
import { StatBar } from '@/components/sections/stat-bar';
import { ProcessSteps } from '@/components/sections/process-steps';
import { CTABanner } from '@/components/sections/cta-banner';
import { PortfolioCard } from '@/components/sections/portfolio-card';
import { portfolioProjects } from '@/lib/site';
import { cn } from '@/lib/utils';

const categories = ['All', 'Branding', 'Websites', 'E-commerce', 'Marketing', 'UI/UX', 'Video', 'Printing'];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        badge="Our Portfolio"
        title={
          <>
            Work we&apos;re <span className="text-gradient-gold">proud of</span>
          </>
        }
        description="A selection of brands, websites, and campaigns we've crafted for ambitious clients across India. Filter by category to explore."
      />

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="container-jl">
          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold'
                    : 'border border-border bg-card text-foreground/70 hover:border-gold/40 hover:text-gold-600',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <PortfolioCard key={project.title} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No projects in this category yet. Check back soon!
            </div>
          )}
        </div>
      </section>

      <StatBar />
      <ProcessSteps />
      <CTABanner
        badge="Your Project Next"
        title="Like what you see? Let's make"
        titleHighlight="yours"
        description="Every project here started with a conversation. Book a free consultation and let's talk about yours."
      />
    </>
  );
}
