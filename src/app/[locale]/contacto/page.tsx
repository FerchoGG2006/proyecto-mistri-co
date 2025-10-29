import { locales } from '@/i18n';
import ContactoClient from './contacto-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ContactoPage() {
  return <ContactoClient />;
}