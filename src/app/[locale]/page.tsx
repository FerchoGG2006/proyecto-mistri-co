import { locales } from '@/i18n';
import { HomePageClient } from './home-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return <HomePageClient />;
}
