import type { Metadata } from 'next';
import { LegalPage } from '@/components/pages/legal';
import { legalSections } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Jhakkas Lab collects, uses, and protects your personal information. We are committed to your privacy and comply with Indian data protection laws.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy — Jhakkas Lab',
    description: 'How we collect, use, and protect your personal information.',
    url: '/privacy-policy',
  },
};

export default function Page() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Privacy Policy"
      description="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information."
      icon="shield"
      lastUpdated="July 2024"
      effectiveDate="July 2024"
      sections={legalSections.privacy}
    />
  );
}
