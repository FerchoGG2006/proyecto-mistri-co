'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './navigation';

export function ConditionalNavigation() {
  const pathname = usePathname();
  
  // No mostrar navigation en rutas del admin
  if (pathname.startsWith('/admin')) {
    return null;
  }
  
  return <Navigation />;
}
