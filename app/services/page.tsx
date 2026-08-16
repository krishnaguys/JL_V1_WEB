import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Branding, web design, e-commerce, digital marketing, UI/UX, video, printing, and strategy — everything your brand needs under one roof at Jhakkas Lab.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services — Jhakkas Lab',
    description: 'Full-service creative agency: branding, websites, e-commerce, marketing, UI/UX, video, printing, and strategy.',
    url: '/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
