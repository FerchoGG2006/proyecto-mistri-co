'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Calendar, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/use-language';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language: lang, setLanguage: setLang, t } = useLanguage();

  const languages = [
    { code: 'ES' as const, label: 'Español', full: 'Español' },
    { code: 'PT' as const, label: 'Português', full: 'Português (BR)' },
  ];

  const menuItems = [
    { href: '/quienes-somos', label: t.nav.quienesSomos },
    { href: '/servicios', label: t.nav.servicios },
    { href: '/academia', label: t.nav.academia },
    { href: '/blog', label: t.nav.blog },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_mistri_color.png"
              alt="Mistri&Co"
              width={220}
              height={75}
              className="h-20 w-auto"
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
                className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="hidden md:flex items-center space-x-2 text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer outline-none">
                  <Globe className="h-4 w-4" />
                  <span>{lang} {languages.find(l => l.code === lang)?.label}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span>{l.full}</span>
                    {lang === l.code && <div className="h-2 w-2 rounded-full bg-primary" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button asChild className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contacto">
                <Calendar className="mr-2 h-4 w-4" />
                {t.nav.cta}
              </Link>
            </Button>


            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-dark hover:text-primary block px-3 py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="px-3 py-2 border-t border-gray-100 mt-2">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Idioma</p>
                <div className="flex space-x-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsOpen(false);
                      }}
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center space-x-2 ${lang === l.code
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-dark hover:bg-gray-100 border border-transparent'
                        }`}
                    >
                      <Globe className={`h-4 w-4 ${lang === l.code ? 'text-primary' : 'text-gray-400'}`} />
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    {t.nav.cta}
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