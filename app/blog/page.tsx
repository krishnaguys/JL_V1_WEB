import type { Metadata } from 'next';
import { BlogPage } from '@/components/pages/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, guides, and stories on branding, web design, marketing, and startup growth from the Jhakkas Lab team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Jhakkas Lab',
    description: 'Insights and guides on branding, web design, marketing, and startup growth.',
    url: '/blog',
  },
};

export default function Page() {
  return <BlogPage />;
}
