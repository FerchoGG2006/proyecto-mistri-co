import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import AdminLayoutClient from './admin-layout-client';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  // Obtener mensajes para el idioma por defecto (español)
  const messages = await getMessages({ locale: 'es' });
  
  return (
    <NextIntlClientProvider messages={messages} locale="es">
      <AdminLayoutClient>
        {children}
      </AdminLayoutClient>
    </NextIntlClientProvider>
  );
}
