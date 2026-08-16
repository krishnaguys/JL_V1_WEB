import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jhakkas Lab. Book a free consultation, send a message, or find us in Pune, India. We respond within 24 hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Jhakkas Lab',
    description: 'Book a free consultation or send us a message. We respond within 24 hours.',
    url: '/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
