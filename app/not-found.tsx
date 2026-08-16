'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Home, Search, Sparkles, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTABanner } from '@/components/sections/cta-banner';

export default function NotFound() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />

        <div className="container-jl relative">
          <div className="mx-auto max-w-2xl text-center">
            {/* Confused mascot */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-ink-900 to-ink-700 shadow-float"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Compass className="h-16 w-16 text-gold-400" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-7xl font-extrabold text-gradient-gold sm:text-8xl"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl"
            >
              Oops, this page took a wrong turn
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-4 max-w-md text-base text-muted-foreground"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sitemap">
                  <Search className="mr-2 h-5 w-5" />
                  View Sitemap
                </Link>
              </Button>
            </motion.div>

            {/* Directional signs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mt-12 max-w-lg"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Maybe you&apos;re looking for
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { title: 'Services', href: '/services' },
                  { title: 'Portfolio', href: '/portfolio' },
                  { title: 'Pricing', href: '/pricing' },
                  { title: 'Blog', href: '/blog' },
                  { title: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground/70 transition-all hover:border-gold/40 hover:text-gold-600"
                  >
                    {link.title}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        badge="Still Lost?"
        title="Let us guide you"
        titleHighlight="home"
        description="Book a free consultation and let's talk about your brand. We promise not to lose you again."
      />
    </>
  );
}
