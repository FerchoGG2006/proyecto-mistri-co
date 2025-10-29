import { locales } from '@/i18n';
import TrabajaConNosotrosClient from './trabaja-con-nosotros-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function TrabajaConNosotrosPage() {
  return <TrabajaConNosotrosClient />;
}