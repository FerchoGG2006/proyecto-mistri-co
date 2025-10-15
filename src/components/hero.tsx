'use client'

import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, Users, Target, TrendingUp, Download, FileText, Phone, BookOpen, CheckCircle } from 'lucide-react'
import * as Icons from 'lucide-react'
import { AnimatedSection, CounterAnimation } from '@/components/ui/animated-section'
import { RippleButton } from '@/components/ui/ripple-button'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  showStats?: boolean
  backgroundImage?: string
  overlayType?: 'photo' | 'abstract' // 'photo' para fotos reales, 'abstract' para vectores/abstractos
  secondaryButton?: {
    text: string
    href: string
    icon?: string
  }
}

export const Hero = memo(function Hero({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink,
  showStats = false,
  backgroundImage,
  overlayType = 'photo',
  secondaryButton
}: HeroProps) {
  const stats = [
    { icon: Users, value: '450+', label: 'Clientes satisfechos' },
    { icon: Target, value: '95%', label: 'Tasa de éxito' },
    { icon: TrendingUp, value: '15', label: 'Años de experiencia' },
  ]

  // Configuración del overlay según el tipo
  const getOverlayConfig = () => {
    if (!backgroundImage) return {}
    
    if (overlayType === 'photo') {
      // Para fotos reales: overlay azul oscuro 70% + blur ligero
      return {
        backgroundImage: `linear-gradient(135deg, rgba(13, 71, 161, 0.7) 0%, rgba(33, 150, 243, 0.7) 100%), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(0.5px)'
      }
    } else {
      // Para vectores/abstractos: overlay estándar sin blur
      return {
        backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
  }

  return (
    <section 
      className="relative overflow-hidden gradient-hero"
      style={getOverlayConfig()}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <AnimatedSection animation="slideLeft" className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-white">
                {title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                {subtitle}
              </p>
              <p className="text-body text-white/80">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RippleButton asChild size="lg" className="btn-secondary hover:shadow-xl hover:shadow-lime-400/25">
                <Link href={ctaLink}>
                  <Calendar className="mr-2 h-5 w-5" />
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </RippleButton>
              {secondaryButton && (
                <RippleButton asChild variant="outline" size="lg" className="border-white text-gray-900 hover:bg-white hover:text-mistri-blue-500 glass-effect">
                  <Link href={secondaryButton.href}>
                    {secondaryButton.icon && (
                      (() => {
                        const IconComponent = Icons[secondaryButton.icon as keyof typeof Icons] as any
                        return IconComponent ? <IconComponent className="mr-2 h-5 w-5" /> : null
                      })()
                    )}
                    {secondaryButton.text}
                  </Link>
                </RippleButton>
              )}
            </div>
          </AnimatedSection>

          {/* Visual Element - Removed cards for cleaner design */}
        </div>

        {/* Stats Section */}
        {showStats && (
          <AnimatedSection animation="fadeIn" delay={300} className="mt-20 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 100} className="text-center text-white hover-lift">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mistri-lime-500/20 rounded-full flex items-center justify-center glass-effect">
                      <stat.icon className="h-8 w-8 text-mistri-lime-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-gradient-accent">
                    <CounterAnimation 
                      end={parseInt(stat.value.replace(/[^\d]/g, ''))} 
                      suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : ''}
                    />
                  </div>
                  <div className="text-gray/80">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
})
