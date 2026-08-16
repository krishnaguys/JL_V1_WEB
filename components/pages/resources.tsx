'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, ArrowRight, FileText, CheckSquare, Calendar, BookOpen, Palette, ShoppingBag, Figma } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { resources, resourceCategories } from '@/lib/site';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckSquare,
  Calendar,
  Search,
  BookOpen,
  Palette,
  ShoppingBag,
  Figma,
  FileText,
};

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        badge="Free Resources"
        title={
          <>
            Tools to <span className="text-gradient-gold">grow your brand</span>
          </>
        }
        description="Free guides, templates, checklists, and workbooks crafted by our team to help you build, launch, and grow your brand."
      >
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 border-border/60 bg-card pl-12 text-base shadow-sm"
            />
          </div>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="container-jl">
          {/* Category tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {resourceCategories.map((cat) => (
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

          {/* Featured resource */}
          {activeCategory === 'All' && !search && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 sm:p-12"
            >
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-600">Featured</span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">{resources[0].title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{resources[0].description}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> {resources[0].type}</span>
                    <span>{resources[0].downloadSize}</span>
                  </div>
                  <Button className="mt-6 bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Free
                  </Button>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold">
                  <CheckSquare className="h-24 w-24 text-white/80" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid */}
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => {
              const Icon = iconMap[resource.icon] || FileText;
              return (
                <StaggerItem key={resource.title}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-all group-hover:bg-gold/20">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">{resource.type}</span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{resource.downloadSize} • {resource.category}</span>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-white transition-all hover:bg-gold-500 hover:text-ink" aria-label={`Download ${resource.title}`}>
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No resources found. Try a different search or category.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-card p-8 text-center shadow-sm sm:p-12">
            <SectionBadge>Stay Updated</SectionBadge>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
              Get new resources in your inbox
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Join 2,000+ founders and marketers getting our best resources and insights. No spam, ever.
            </p>
            <form className="mx-auto mt-6 flex max-w-md gap-2">
              <Input type="email" placeholder="Your email" required className="h-12" />
              <Button type="submit" size="lg" className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
