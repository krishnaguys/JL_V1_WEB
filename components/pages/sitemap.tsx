'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Home, Briefcase, Star, BookOpen, Mail, FileText, HelpCircle, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { StaggerGroup, StaggerItem } from '@/lib/animations';
import { services } from '@/lib/site';

const sitemapCategories = [
  {
    icon: Home,
    title: 'Main Pages',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Pricing', href: '/pricing' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Flagship Offer',
    links: [
      { title: 'Startup Launch Package', href: '/startup-launch-package' },
      { title: 'Book a Consultation', href: '/book-consultation' },
      { title: 'Contact Us', href: '/contact' },
      { title: 'Thank You', href: '/thank-you' },
    ],
  },
  {
    icon: Star,
    title: 'Social Proof',
    links: [
      { title: 'Testimonials', href: '/testimonials' },
      { title: 'Portfolio', href: '/portfolio' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Content',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Resources', href: '/resources' },
    ],
  },
  {
    icon: Briefcase,
    title: 'Company',
    links: [
      { title: 'Careers', href: '/careers' },
      { title: 'FAQs', href: '/faqs' },
    ],
  },
  {
    icon: FileText,
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Terms & Conditions', href: '/terms-and-conditions' },
      { title: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
];

export function SitemapPage() {
  return (
    <>
      <PageHero
        badge="Sitemap"
        title={
          <>
            Find everything <span className="text-gradient-gold">in one place</span>
          </>
        }
        description="A complete map of every page on our website. If you're looking for something specific, start here."
      />

      <section className="section-padding">
        <div className="container-jl">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sitemapCategories.map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-float hover:border-gold/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-600">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{cat.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {cat.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-gold-600"
                        >
                          {link.title}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Services list */}
          <div className="mt-12 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-600">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">All Services</h3>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href="/services"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-gold-600"
                >
                  {s.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
