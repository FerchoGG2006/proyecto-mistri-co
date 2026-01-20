import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ConditionalFooter } from '@/components/conditional-footer';
import ErrorBoundary from '@/components/error-boundary';
import EmailJSScripts from '@/components/emailjs-scripts';

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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" href="/main_logo.png" as="image" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ErrorBoundary>
          <EmailJSScripts />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <ConditionalFooter />
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}