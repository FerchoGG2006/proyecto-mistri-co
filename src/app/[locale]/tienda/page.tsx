import { locales } from '@/i18n';
import TiendaClient from './tienda-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function TiendaPage() {
  return <TiendaClient />;
}