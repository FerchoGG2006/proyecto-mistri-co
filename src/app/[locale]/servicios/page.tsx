import { locales } from '@/i18n';
import ServiciosClient from './servicios-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ServiciosPage() {
  return <ServiciosClient />;
}