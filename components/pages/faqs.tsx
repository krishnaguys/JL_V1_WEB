'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Rocket, Users, ShieldCheck, Target, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { CTABanner } from '@/components/sections/cta-banner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqTopics, faqs, whyChooseUs } from '@/lib/site';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

const whyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Rocket, Users, ShieldCheck, Target, Heart,
};

export function FaqsPage() {
  const [activeTopic, setActiveTopic] = useState('General');
  const [search, setSearch] = useState('');

  const filtered = faqs.filter((f) => {
    const matchesTopic = activeTopic === 'All' || f.topic === activeTopic;
    const matchesSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <>
      <PageHero
        badge="FAQs"
        title={
          <>
            Questions? <span className="text-gradient-gold">We have answers</span>
          </>
        }
        description="Everything you need to know about Jhakkas Lab, our services, pricing, process, and the Startup Launch Package."
      >
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 border-border/60 bg-card pl-12 text-base shadow-sm"
            />
          </div>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="container-jl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
            {/* Topic sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Topics</h3>
              <div className="flex flex-wrap gap-2 lg:flex-col">
                {faqTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={cn(
                      'rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-all',
                      activeTopic === topic
                        ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold'
                        : 'text-foreground/70 hover:bg-muted hover:text-gold-600',
                    )}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </aside>

            {/* Accordion */}
            <div>
              <Accordion type="single" collapsible className="space-y-3">
                {filtered.map((faq, i) => (
                  <AccordionItem
                    key={`${activeTopic}-${i}`}
                    value={`item-${i}`}
                    className="overflow-hidden rounded-2xl border border-border/60 bg-card px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filtered.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                  No questions found. Try a different search or topic.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Why Clients Love Us</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Still have <span className="text-gradient-gold">questions?</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              These are the reasons clients choose us — and stay with us.
            </p>
          </div>
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason) => {
              const Icon = whyIcons[reason.icon] || Zap;
              return (
                <StaggerItem key={reason.title}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-all group-hover:bg-gold/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTABanner
        badge="Still Curious?"
        title="Can't find what you're looking"
        titleHighlight="for?"
        description="Book a free consultation and ask us anything. We're happy to help — no pressure, no obligation."
      />
    </>
  );
}
