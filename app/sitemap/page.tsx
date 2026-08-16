import type { Metadata } from 'next';
import { SitemapPage } from '@/components/pages/sitemap';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'A complete map of all pages on the Jhakkas Lab website. Find what you need quickly.',
  alternates: { canonical: '/sitemap' },
  openGraph: {
    title: 'Sitemap — Jhakkas Lab',
    description: 'A complete map of all pages on our website.',
    url: '/sitemap',
  },
};

export default function Page() {
  return <SitemapPage />;
}
