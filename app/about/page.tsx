import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/about';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Jhakkas Lab is a premium creative agency founded in 2021, helping ambitious startups and brands across India look bold, sell more, and grow faster.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Jhakkas Lab',
    description:
      'A premium creative agency helping ambitious startups and brands across India look bold, sell more, and grow faster.',
    url: '/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
