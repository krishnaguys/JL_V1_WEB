import type { Metadata } from 'next';
import { BookConsultationPage } from '@/components/pages/book-consultation';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Book a free 30-minute consultation with Jhakkas Lab. Discuss your goals, timeline, and budget — no pressure, no obligation.',
  alternates: { canonical: '/book-consultation' },
  openGraph: {
    title: 'Book a Free Consultation — Jhakkas Lab',
    description: 'A free 30-minute call to discuss your brand goals. No pressure, no obligation.',
    url: '/book-consultation',
  },
};

export default function Page() {
  return <BookConsultationPage />;
}
