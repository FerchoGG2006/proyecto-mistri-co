'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/footer'

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // No mostrar footer en rutas de admin
  if (pathname.startsWith('/admin')) {
    return null
  }
  
  return <Footer />
}
