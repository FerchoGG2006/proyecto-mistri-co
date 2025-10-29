import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mistri&Co - Consultora Especializada en Transformación Organizacional',
  description: 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios. Impulsamos el crecimiento sostenible de tu organización.',
  keywords: 'consultora, transformación organizacional, desarrollo de equipos, formación de líderes, capacitación, coaching, Argentina',
  authors: [{ name: 'Mistri&Co' }],
  openGraph: {
    title: 'Mistri&Co - Consultora Especializada en Transformación Organizacional',
    description: 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios.',
    url: '',
    siteName: 'Mistri&Co',
    locale: 'es_ES',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}