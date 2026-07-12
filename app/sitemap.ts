import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nwahirilaw.com';
  const lastModified = new Date('2026-05-17');

  const routes = [
    '/',
    '/about',
    '/practice-areas',
    '/practice-areas/truck-accidents',
    '/practice-areas/traumatic-brain-injury',
    '/practice-areas/uber-lyft-accidents',
    '/practice-areas/slip-and-fall',
    '/practice-areas/car-accidents',
    '/practice-areas/wrongful-death',
    '/practice-areas/premises-liability',
    '/practice-areas/negligent-security',
    '/practice-areas/dog-bites',
    '/practice-areas/criminal-defense',
    '/practice-areas/dui',
    '/practice-areas/civil-rights',
    '/practice-areas/excessive-force',
    '/practice-areas/civil-asset-forfeiture',
    '/results',
    '/contact',
    '/free-consultation',
    '/blog',
    '/atlanta-personal-injury-attorney',
    '/georgia-personal-injury-lawyer',
    '/florida-personal-injury-lawyer',
    '/ai-info',
    '/privacy-policy',
    '/legal-disclaimer',
    '/terms-of-use',
    '/practice-areas/locations/miami-personal-injury-attorney',
    '/practice-areas/locations/north-miami-personal-injury-attorney',
    '/practice-areas/locations/miramar-personal-injury-attorney',
    '/practice-areas/locations/north-miami-beach-personal-injury-attorney',
    '/practice-areas/locations/miami-gardens-personal-injury-attorney',
    '/practice-areas/locations/hialeah-personal-injury-attorney',
    '/practice-areas/locations/homestead-personal-injury-attorney',
    '/practice-areas/locations/kendall-personal-injury-attorney',
    '/practice-areas/car-accidents/hialeah',
    '/blog/can-you-sue-jackson-memorial-hospital',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/practice-areas') ? 0.9 : 0.8,
  }));
}
