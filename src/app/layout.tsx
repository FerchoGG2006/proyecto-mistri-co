import './globals.css';
import { LanguageProvider, Language } from '@/hooks/use-language';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const language = cookieStore.get('preferredLanguage')?.value || 'ES';
  const isPT = language === 'PT';

  return {
    title: isPT
      ? 'Mistri&Co - Consultoria Especializada em Transformação Organizacional'
      : 'Mistri&Co - Consultora Especializada en Transformación Organizacional',
    description: isPT
      ? 'Consultoria argentina especializada em transformação organizacional, desenvolvimento de equipes e formação de líderes.'
      : 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios. Impulsamos el crecimiento sostenible de tu organización.',
    keywords: isPT
      ? 'consultoria, transformação organizacional, desenvolvimento de equipes, formação de líderes, capacitação, coaching, Argentina'
      : 'consultora, transformación organizacional, desarrollo de equipos, formación de líderes, capacitación, coaching, Argentina',
    authors: [{ name: 'Mistri&Co' }],
    openGraph: {
      title: 'Mistri&Co',
      description: isPT
        ? 'Consultoria especializada em transformação organizacional.'
        : 'Consultora especializada en transformación organizacional.',
      url: '',
      siteName: 'Mistri&Co',
      locale: isPT ? 'pt_BR' : 'es_AR',
      type: 'website',
    }
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const language = (cookieStore.get('preferredLanguage')?.value as Language) || 'ES';
  return (
    <html lang={language.toLowerCase()} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" href="/main_logo.png" as="image" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <LanguageProvider initialLanguage={language}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}