'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/quienes-somos', label: 'Quiénes Somos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/academia', label: 'Academia Mistri' },
    { href: '/blog', label: 'Blog' },
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
            {/* CTA Button */}
            <Button 
              className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agenda una reunión
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
              <div className="pt-2 border-t border-gray-200">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    setIsOpen(false)
                    window.open('https://wa.me/5493624649700', '_blank')
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Agenda una reunión
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}