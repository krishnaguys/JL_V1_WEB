import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/pages/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of bold branding, stunning websites, e-commerce stores, and marketing campaigns crafted for ambitious brands across India.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Jhakkas Lab',
    description: 'Bold branding, stunning websites, and real growth. See the work we are proud of.',
    url: '/portfolio',
  },
};

export default function Page() {
  return <PortfolioPage />;
}
