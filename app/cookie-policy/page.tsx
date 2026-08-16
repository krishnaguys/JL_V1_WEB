import type { Metadata } from 'next';
import { LegalPage } from '@/components/pages/legal';
import { legalSections } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How Jhakkas Lab uses cookies and similar technologies to enhance your browsing experience and understand user behavior.',
  alternates: { canonical: '/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy — Jhakkas Lab',
    description: 'How we use cookies and similar technologies on our website.',
    url: '/cookie-policy',
  },
};

const cookieFaqs = [
  { question: 'Can I disable cookies?', answer: 'Yes, you can control cookies through your browser settings. However, some features of our website may not function properly if cookies are disabled.' },
  { question: 'Do you use third-party cookies?', answer: 'We may use third-party analytics and social media cookies. These are governed by the respective providers\' privacy policies.' },
  { question: 'How often do you update this policy?', answer: 'We update this policy as our services evolve or as required by law. Significant changes will be posted on this page.' },
];

export default function Page() {
  return (
    <LegalPage
      badge="Cookie Policy"
      title="Cookie Policy"
      description="We use cookies to enhance your browsing experience. This policy explains what cookies we use and how to manage them."
      icon="cookie"
      lastUpdated="July 2024"
      effectiveDate="July 2024"
      sections={legalSections.cookie}
      faq={cookieFaqs}
    />
  );
}
