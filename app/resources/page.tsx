import type { Metadata } from 'next';
import { ResourcesPage } from '@/components/pages/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free guides, templates, checklists, and workbooks to help you build, launch, and grow your brand. Downloadable resources from Jhakkas Lab.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Free Resources — Jhakkas Lab',
    description: 'Guides, templates, checklists, and workbooks for ambitious brands.',
    url: '/resources',
  },
};

export default function Page() {
  return <ResourcesPage />;
}
