import type { Metadata } from 'next';
import { LegalPage } from '@/components/pages/legal';
import { legalSections } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms and conditions for using Jhakkas Lab services and website. Please read these terms carefully before engaging our services.',
  alternates: { canonical: '/terms-and-conditions' },
  openGraph: {
    title: 'Terms & Conditions — Jhakkas Lab',
    description: 'The terms governing our services and website usage.',
    url: '/terms-and-conditions',
  },
};

export default function Page() {
  return (
    <LegalPage
      badge="Terms & Conditions"
      title="Terms & Conditions"
      description="Please read these terms carefully. By using our services or website, you agree to be bound by them."
      icon="file"
      lastUpdated="July 2024"
      effectiveDate="July 2024"
      sections={legalSections.terms}
    />
  );
}
