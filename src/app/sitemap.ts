import { MetadataRoute } from 'next';

/

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: '2025-08-10',
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
      lastModified: '2025-08-10',
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
      lastModified: '2025-08-10',
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
      lastModified: '2025-08-10',
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
      lastModified: '2025-08-10',
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap`,
      lastModified: '2025-08-10',
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]
}
