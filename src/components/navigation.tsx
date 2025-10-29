'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSelector } from '@/components/language-selector';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  const menuItems = [
    { href: `/${locale}/servicios`, label: 'Servicios', description: 'Nuestros servicios' },
    { href: `/${locale}/academia`, label: 'Academia', description: 'Programas de formación' },
    { href: `/${locale}/quienes-somos`, label: 'Nosotros', description: 'Conoce nuestro equipo' },
    { href: `/${locale}/blog`, label: 'Blog', description: 'Artículos y recursos' },
  ];

  return (
    <nav className="nav-liberis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_mistri_color.png"
              alt="Mistri&Co"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
              quality={90}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* CTA Button */}
            <Button asChild className="btn-primary">
              <Link href={`/${locale}/contacto`}>
                <Calendar className="mr-2 h-4 w-4" />
                Agenda una consulta
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button asChild className="btn-primary w-full">
                  <Link href={`/${locale}/contacto`} onClick={() => setIsOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Agenda una consulta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}