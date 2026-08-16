import type { Metadata } from 'next';
import { FaqsPage } from '@/components/pages/faqs';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about Jhakkas Lab services, pricing, process, the Startup Launch Package, and support.',
  alternates: { canonical: '/faqs' },
  openGraph: {
    title: 'Frequently Asked Questions — Jhakkas Lab',
    description: 'Answers to common questions about our services, pricing, and process.',
    url: '/faqs',
  },
};

export default function Page() {
  return <FaqsPage />;
}
