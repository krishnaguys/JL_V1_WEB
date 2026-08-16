'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import { navLinks, services, siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => setMounted(true), []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border/40 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container-jl flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Jhakkas Lab home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold">
            <span className="font-display text-lg font-extrabold text-ink">JL</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Jhakkas<span className="text-gradient-gold">Lab</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-gold-500 ${
                isActive(link.href) ? 'text-gold-500' : 'text-foreground/80'
              }`}
            >
              {link.title}
              {isActive(link.href) && (
                <motion.div
                  className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gold-500"
                  layoutId="navIndicator"
                />
              )}
            </Link>
          ))}

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-gold-500">
                More <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-64 glass border-border/40"
            >
              <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pages
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.slice(4).map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={`cursor-pointer ${
                      isActive(link.href) ? 'text-gold-500' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {services.slice(0, 4).map((s) => (
                <DropdownMenuItem key={s.slug} asChild>
                  <Link href="/services" className="cursor-pointer">
                    {s.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-muted hover:text-gold-500"
            aria-label="Toggle dark mode"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="hidden bg-gradient-to-r from-gold-400 to-gold-600 text-ink shadow-gold hover:shadow-gold-lg sm:flex"
          >
            <Link href="/book-consultation">
              <Sparkles className="mr-1.5 h-4 w-4" />
              Book Consultation
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] overflow-y-auto border-border/40 bg-background/95 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex items-center justify-between pt-4">
                <Link href="/" className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold">
                    <span className="font-display text-lg font-extrabold text-ink">JL</span>
                  </div>
                  <span className="font-display text-lg font-bold">
                    Jhakkas<span className="text-gradient-gold">Lab</span>
                  </span>
                </Link>
                <SheetClose asChild>
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted ${
                        isActive(link.href) ? 'bg-muted text-gold-500' : 'text-foreground/80'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/startup-launch-package"
                    className="mt-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-3 text-center text-base font-semibold text-ink"
                  >
                    Startup Launch Package
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/book-consultation"
                    className="rounded-lg border border-gold/30 bg-gold/5 px-4 py-3 text-center text-base font-semibold text-gold-600"
                  >
                    Book Free Consultation
                  </Link>
                </SheetClose>
              </nav>

              <div className="mt-8 border-t border-border/40 pt-6">
                <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
