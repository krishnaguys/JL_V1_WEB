'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { blogPosts, blogCategories } from '@/lib/site';
import { cn } from '@/lib/utils';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const recentPosts = blogPosts.slice(0, 4);

  return (
    <>
      <PageHero
        badge="The Jhakkas Blog"
        title={
          <>
            Insights for <span className="text-gradient-gold">bold brands</span>
          </>
        }
        description="Guides, stories, and insights on branding, web design, marketing, and startup growth — from the Jhakkas Lab team."
      >
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
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
            {blogCategories.map((cat) => (
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

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Articles grid */}
            <div className="lg:col-span-2">
              <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filtered.map((post) => (
                  <StaggerItem key={post.slug}>
                    <article className="group h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className={cn('absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105', getGradient(post.category))} />
                        <div className="absolute inset-0 bg-dots opacity-10" />
                        <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-gold-400 backdrop-blur-sm">
                          {post.category}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-3xl font-bold text-white/30">{post.category.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                        </div>
                        <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-gold-600 transition-colors">{post.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        <a href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500">
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {filtered.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                  No articles found. Try a different search or category.
                </div>
              )}

              {/* Pagination */}
              {filtered.length > 0 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button size="sm" className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink">Categories</h3>
                <ul className="mt-4 space-y-2">
                  {blogCategories.filter((c) => c !== 'All').map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-gold-600"
                      >
                        {cat}
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent posts */}
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink">Recent Posts</h3>
                <ul className="mt-4 space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.slug} className="flex gap-3">
                      <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold text-white', getGradient(post.category))}>
                        {post.category.charAt(0)}
                      </div>
                      <div>
                        <a href={`/blog/${post.slug}`} className="text-sm font-semibold text-ink hover:text-gold-600 transition-colors line-clamp-2">{post.title}</a>
                        <p className="text-xs text-muted-foreground">{post.readTime}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <SectionBadge>Newsletter</SectionBadge>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">Never miss an article</h3>
                <p className="mt-2 text-sm text-muted-foreground">Get our best insights delivered weekly.</p>
                <form className="mt-4 space-y-2">
                  <Input type="email" placeholder="Your email" required className="h-11" />
                  <Button type="submit" className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function getGradient(category: string): string {
  const gradients: Record<string, string> = {
    'Branding': 'from-gold-400 via-gold-500 to-gold-600',
    'Web Design': 'from-blue-400 via-blue-500 to-blue-600',
    'Startups': 'from-emerald-400 via-emerald-500 to-emerald-600',
    'Marketing': 'from-rose-400 via-rose-500 to-rose-600',
    'E-commerce': 'from-teal-400 via-teal-500 to-teal-600',
    'UI/UX': 'from-violet-400 via-violet-500 to-violet-600',
  };
  return gradients[category] || 'from-ink-700 via-ink-800 to-ink-900';
}
