import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/startup-launch-package',
    '/pricing',
    '/blog',
    '/resources',
    '/testimonials',
    '/careers',
    '/faqs',
    '/contact',
    '/book-consultation',
    '/thank-you',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/sitemap',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' || route === '/portfolio' ? 0.9 : 0.7,
  }));
}
