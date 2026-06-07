import { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '@/services/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

  const posts = await getPublishedBlogPosts();

  // You can adjust the available locales and static routes here
  const locales = ['pt', 'en'];
  const routes = ['', '/articles', '/projects', '/courses'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Add static routes
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });

    // Add dynamic article routes
    posts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/articles/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
