import { pageSEO } from '@/lib/seo'
import type { Metadata } from 'next'
import { BlogPageClient } from './blog-client'
import { locales } from '@/i18n';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = pageSEO.blog

export default function BlogPage() {
  return <BlogPageClient />;
}