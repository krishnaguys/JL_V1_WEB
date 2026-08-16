'use client';

import { motion } from 'framer-motion';
import {
  Flame,
  Handshake,
  Sparkles,
  Users,
  Target,
  Eye,
  Rocket,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { SectionBadge } from '@/components/sections/section-badge';
import { StatBar } from '@/components/sections/stat-bar';
import { CTABanner } from '@/components/sections/cta-banner';
import { BrandMarquee } from '@/components/sections/brand-marquee';
import { FadeInSection, StaggerGroup, StaggerItem } from '@/lib/animations';
import { teamMembers, values, timeline, siteConfig } from '@/lib/site';

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Handshake,
  Sparkles,
  Users,
};

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Twitter,
  Instagram,
};

export function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Jhakkas Lab"
        title={
          <>
            We make brands <span className="text-gradient-gold">jhakkas</span>
          </>
        }
        description="Founded in 2021, Jhakkas Lab is a premium creative agency on a mission to make bold branding and stunning websites accessible to ambitious startups and brands across India."
      />

      {/* Mission / Vision / Values */}
      <section className="section-padding">
        <div className="container-jl">
          <StaggerGroup className="grid gap-6 lg:grid-cols-3">
            <StaggerItem>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-gold">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To make bold, premium branding accessible to every ambitious startup —
                  no matter the budget. We believe great design shouldn&apos;t be a luxury;
                  it should be the foundation of every business.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To become India&apos;s most trusted creative partner for startups —
                  the first name that comes to mind when a founder decides to build something
                  bold, beautiful, and built to last.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg">
                  <Rocket className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">Our Promise</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We treat your brand like our own. Bold work, honest timelines, transparent
                  pricing, and a genuine partnership that extends well beyond launch day.
                  Your success is literally our business.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Our Values</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              What we <span className="text-gradient-gold">stand for</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Four principles that guide every decision, every design, and every client relationship.
            </p>
          </div>
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = valueIcons[value.icon] || Flame;
              return (
                <StaggerItem key={value.title}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold-600 transition-all group-hover:bg-gold/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Our Story</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              From idea to <span className="text-gradient-gold">impact</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              The journey of Jhakkas Lab — from a one-person studio to a team of 15+ creatives.
            </p>
          </div>

          <div className="relative mt-16 max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-gold-400 via-gold/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <FadeInSection key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 pb-12 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold sm:left-1/2">
                    <span className="text-[10px] font-bold text-ink">{item.year.slice(-2)}</span>
                  </div>

                  {/* Card */}
                  <div className={`ml-12 flex-1 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-float">
                      <span className="text-2xl font-display font-extrabold text-gradient-gold">{item.year}</span>
                      <h3 className="mt-2 font-display text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-jl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Our Team</SectionBadge>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              The minds behind the <span className="text-gradient-gold">magic</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              A senior team of designers, developers, and strategists who genuinely love what they do.
            </p>
          </div>

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-lg font-bold text-white shadow-lg`}>
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{member.name}</h3>
                      <p className="text-sm text-gold-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex gap-2">
                    {Object.entries(socialIcons).map(([name, Icon]) => (
                      <a
                        key={name}
                        href={siteConfig.social[name === 'Linkedin' ? 'linkedin' : name === 'Twitter' ? 'twitter' : 'instagram']}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-gold/10 hover:text-gold-600"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <StatBar />
      <BrandMarquee />
      <CTABanner
        badge="Join the journey"
        title="Want to build something"
        titleHighlight="jhakkas together?"
        description="Whether you're a startup founder or an established brand, we'd love to hear your story and help you write the next chapter."
      />
    </>
  );
}
