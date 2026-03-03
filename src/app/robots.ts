import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/.next'],
    },
    sitemap: 'https://gaurav-singh4-yoe-portfolio.vercel.app/sitemap.xml',
  };
}
