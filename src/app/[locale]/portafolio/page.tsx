import { locales } from '@/i18n';
import PortafolioClient from './portafolio-client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function PortafolioPage() {
  return <PortafolioClient />;
}