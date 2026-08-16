'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import { siteConfig, navLinks, services } from '@/lib/site';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const footerNav = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Team', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Testimonials', href: '/testimonials' },
      { title: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: services.slice(0, 5).map((s) => ({
      title: s.title,
      href: '/services',
    })),
  },
  {
    title: 'Resources',
    links: [
      { title: 'Startup Launch Package', href: '/startup-launch-package' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Resources', href: '/resources' },
      { title: 'FAQs', href: '/faqs' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-ink-950 text-ink-100">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-jl relative">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 lg:flex-row lg:items-center"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to make something <span className="text-gradient-gold">jhakkas?</span>
            </h3>
            <p className="mt-2 text-ink-300">
              Book a free consultation and let&apos;s build your brand together.
            </p>
          </div>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-shadow hover:shadow-gold-lg"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold">
                <span className="font-display text-lg font-extrabold text-ink">JL</span>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Jhakkas<span className="text-gradient-gold">Lab</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-ink-300 transition-all hover:bg-gold/20 hover:text-gold-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 transition-colors hover:text-gold-400"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-ink-300">
              Get branding tips and growth insights in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-ink-400"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-2.5 text-sm font-semibold text-ink transition-shadow hover:shadow-gold"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                {!subscribed && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-ink-300 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" /> {siteConfig.address}
            </span>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-gold-400">
              <Mail className="h-4 w-4 text-gold-400" /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-gold-400">
              <Phone className="h-4 w-4 text-gold-400" /> {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ink-400">
            <Link href="/privacy-policy" className="hover:text-gold-400">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gold-400">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-gold-400">Cookie Policy</Link>
            <Link href="/sitemap" className="hover:text-gold-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
