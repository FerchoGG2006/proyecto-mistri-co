import { locales } from '@/i18n';
import QuienesSomosClient from './quienes-somos-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function QuienesSomosPage() {
  return <QuienesSomosClient />;
}