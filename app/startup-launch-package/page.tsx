import type { Metadata } from 'next';
import { StartupLaunchPage } from '@/components/pages/startup-launch';

export const metadata: Metadata = {
  title: 'Startup Launch Package',
  description:
    'Everything a new business needs to launch professionally — branding, website, e-commerce, SEO, social kit, and video — in 30 days for ₹49,999.',
  alternates: { canonical: '/startup-launch-package' },
  openGraph: {
    title: 'Startup Launch Package — Jhakkas Lab',
    description: 'Branding, website, e-commerce, marketing, and more — everything to launch in 30 days for ₹49,999.',
    url: '/startup-launch-package',
  },
};

export default function Page() {
  return <StartupLaunchPage />;
}
