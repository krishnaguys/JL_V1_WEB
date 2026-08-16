import type { Metadata } from 'next';
import { PricingPage } from '@/components/pages/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for branding, web design, and marketing services. Starter at ₹19,999, Growth at ₹49,999, and custom Enterprise solutions.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Jhakkas Lab',
    description: 'Transparent, flat-fee pricing. No hidden charges. Choose the plan that fits your brand.',
    url: '/pricing',
  },
};

export default function Page() {
  return <PricingPage />;
}
