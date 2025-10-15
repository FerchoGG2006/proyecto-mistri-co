import type { Metadata } from 'next'
import { pageSEO } from '@/lib/seo'

export const metadata: Metadata = pageSEO.servicios

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
