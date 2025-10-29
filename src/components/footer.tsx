'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Botón de scroll to top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/logo_mistri_color.png"
                  alt="Mistri&Co"
                  width={260}
                  height={90}
                  className="h-24 w-auto"
                  quality={90}
                />
              </Link>
              <p className="text-gray-300 leading-relaxed">
                {t('description')}
              </p>
            </div>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com/mistri.co" 
                className="p-2 bg-gray-700 hover:bg-primary rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com/mistri.co" 
                className="p-2 bg-gray-700 hover:bg-primary rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/mistri-co" 
                className="p-2 bg-gray-700 hover:bg-primary rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com/@mistri.co" 
                className="p-2 bg-gray-700 hover:bg-primary rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/quienes-somos`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/academia`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('navigation.academy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('navigation.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('services')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/servicios#formacion`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('serviceLinks.formacion')}
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/5493624649700" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  {t('serviceLinks.asesoramiento')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios#especializados`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('serviceLinks.marketing')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios#especializados`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('serviceLinks.ventas')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios#especializados`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('serviceLinks.liderazgo')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios#especializados`} className="text-gray-300 hover:text-primary transition-colors">
                  {t('serviceLinks.analisis')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Argentina (Presencial)</p>
                  <p>Pellegrini 1073 Piso 2 Oficina 3</p>
                  <p>Resistencia, Chaco, Argentina</p>
                  <p className="mt-2 font-medium">Brasil - Paraguay (Híbrido)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <Link 
                  href="https://wa.me/5493624649700" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  +54 9 362 464-9700
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <Link 
                  href="mailto:contacto@mistriconsultora.com" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  contacto@mistriconsultora.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mistri&Co. {t('rights')}.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/politica-privacidad`} className="text-gray-400 hover:text-primary transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terminos-condiciones`} className="text-gray-400 hover:text-primary transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}