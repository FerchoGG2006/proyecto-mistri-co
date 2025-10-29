import type { Metadata } from 'next'
import { AcademiaPageClient } from './academia-client'
import { locales } from '@/i18n'
import { getTranslations } from 'next-intl/server'

export async function generateStaticParams() {
  return locales.map((locale) => ({ 
    locale: locale 
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.academy.seo' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mistri-co.com';
  const currentUrl = `${baseUrl}/${locale}/academia`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Mistri&Co' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: currentUrl,
      siteName: 'Mistri&Co',
      locale: locale === 'es' ? 'es_ES' : 'pt_BR',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/academy/bg-mistri-academy.jpg`,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/images/academy/bg-mistri-academy.jpg`],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'es': `${baseUrl}/es/academia`,
        'pt': `${baseUrl}/pt/academia`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function AcademiaPage() {
  return <AcademiaPageClient />;
}