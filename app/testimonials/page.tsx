import type { Metadata } from 'next';
import { TestimonialsPage } from '@/components/pages/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Hear from the founders and brands we have helped grow. Real stories, real results — from branding to launch and beyond.',
  alternates: { canonical: '/testimonials' },
  openGraph: {
    title: 'Client Testimonials — Jhakkas Lab',
    description: 'Real stories from founders and brands we have helped grow.',
    url: '/testimonials',
  },
};

export default function Page() {
  return <TestimonialsPage />;
}
