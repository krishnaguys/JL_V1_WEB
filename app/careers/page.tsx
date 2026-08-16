import type { Metadata } from 'next';
import { CareersPage } from '@/components/pages/careers';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Jhakkas Lab — a remote-first creative agency building bold brands. Explore open roles in design, engineering, marketing, and more.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Jhakkas Lab',
    description: 'Build bold brands with us. Explore open roles in design, engineering, and marketing.',
    url: '/careers',
  },
};

export default function Page() {
  return <CareersPage />;
}
