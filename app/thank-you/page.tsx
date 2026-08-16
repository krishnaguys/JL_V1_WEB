import type { Metadata } from 'next';
import { ThankYouPage } from '@/components/pages/thank-you';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for reaching out to Jhakkas Lab. We will get back to you within 24 hours.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouPage />;
}
