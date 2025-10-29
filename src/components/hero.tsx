'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Target, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  showStats?: boolean;
  secondaryButton?: {
    text: string;
    href: string;
    icon?: string;
  };
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  showStats = true,
  secondaryButton
}: HeroProps) {
  const locale = useLocale();

  const stats = [
    { icon: Users, value: '450+', label: 'Clientes satisfechos' },
    { icon: Target, value: '95%', label: 'Tasa de éxito' },
    { icon: TrendingUp, value: '15', label: 'Años de experiencia' },
  ];

  return (
    <section 
      className="relative overflow-hidden gradient-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13, 71, 161, 0.7) 0%, rgba(33, 150, 243, 0.7) 100%), url('/images/home/bg-home.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(0.5px)'
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      
      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-in-left text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-white">{title}</h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">{subtitle}</p>
              <p className="text-body text-white/80">{description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={ctaLink}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 relative overflow-hidden btn-secondary hover:shadow-xl hover:shadow-lime-400/25"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              {secondaryButton && (
                <Link 
                  href={secondaryButton.href}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-11 rounded-md px-8 relative overflow-hidden border-white text-gray-900 hover:bg-white hover:text-mistri-blue-500 glass-effect"
                >
                  {secondaryButton.icon === 'Target' && <Target className="mr-2 h-5 w-5" />}
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
          
          {showStats && (
            <div className="animate-fade-in mt-20 pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className="animate-bounce-in text-center text-white hover-lift"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-mistri-lime-500/20 rounded-full flex items-center justify-center glass-effect">
                          <Icon className="h-10 w-10 text-mistri-lime-400" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2 text-gradient-accent">{stat.value}</div>
                      <div className="text-gray/80">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
