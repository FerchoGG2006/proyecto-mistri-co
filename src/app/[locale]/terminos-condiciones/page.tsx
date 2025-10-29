import { locales } from '@/i18n';
import TerminosClient from './terminos-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function TerminosPage() {
  return <TerminosClient />;
}