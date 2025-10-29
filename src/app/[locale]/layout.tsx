import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {ReactNode} from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConditionalNavigation } from '@/components/conditional-navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ConditionalFooter } from '@/components/conditional-footer';
import ErrorBoundary from '@/components/error-boundary';
import EmailJSScripts from '@/components/emailjs-scripts';
import { locales } from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Mistri&Co - Consultora Especializada en Transformación Organizacional',
    description: 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios. Impulsamos el crecimiento sostenible de tu organización.',
    keywords: 'consultora, transformación organizacional, desarrollo de equipos, formación de líderes, capacitación, coaching, Argentina',
    authors: [{ name: 'Mistri&Co' }],
    openGraph: {
      title: 'Mistri&Co - Consultora Especializada en Transformación Organizacional',
      description: 'Consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios.',
      url: '',
      siteName: 'Mistri&Co',
      locale: locale === 'es' ? 'es_ES' : 'pt_BR',
      type: 'website',
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/mistri_circular-background_M.png" />
        <link rel="apple-touch-icon" href="/mistri_circular-background_M.png" />
        <link rel="preload" href="/main_logo.png" as="image" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ErrorBoundary>
            <EmailJSScripts />
            <ConditionalNavigation />
            <main className="min-h-screen">{children}</main>
            <ConditionalFooter />
            <Toaster />
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
