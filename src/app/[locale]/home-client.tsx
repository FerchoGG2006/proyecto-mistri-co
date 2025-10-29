'use client';

import { Hero } from "@/components/hero";
import { ClientsSection } from "@/components/clients-section";
import { CTASection } from "@/components/cta-section";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Target,
  Users,
  TrendingUp,
  Presentation,
  Lightbulb,
  Star,
} from "lucide-react";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function HomePageClient() {
  const t = useTranslations('pages.home');
  const locale = useLocale();

  const services = t.raw('homeServices.services') as Array<{
    icon: string;
    title: string;
    description: string;
    features: string[];
    href: string;
  }>;

  const academyPrograms = t.raw('academyPrograms.programs') as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const clientsData = t.raw('clients') as {
    title: string;
    subtitle: string;
    clients: Array<{
      name: string;
      logo: string;
      alt: string;
    }>;
  };

  const testimonials = t.raw('testimonials') as {
    badge: string;
    title: string;
    description: string;
  };

  const cta = t.raw('cta') as {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
      icon: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };

  const iconMap: Record<string, any> = {
    Users,
    Target,
    TrendingUp,
    BookOpen,
    Presentation,
    Lightbulb,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        ctaText={t('hero.cta')}
        ctaLink={`/${locale}/contacto`}
        showStats={true}
        secondaryButton={{
          text: t('hero.secondaryCta'),
          href: `/${locale}/servicios`,
          icon: "Target"
        }}
      />

      {/* Services Section */}
      <div className="animate-fade-in section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gray-900 mb-6">Nuestros Servicios</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">Soluciones integrales para tu organización</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Users;
              return (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="rounded-lg border border-mistri-blue-500 shadow-lg bg-gradient-to-br from-mistri-blue-50 to-mistri-lime-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex flex-col p-6 space-y-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 text-white shadow-lg">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 group-hover:text-mistri-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-3">{service.description}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-mistri-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="animate-bounce-in text-center mt-12" style={{ animationDelay: '600ms' }}>
            <Button asChild className="bg-mistri-blue-500 text-white hover:bg-mistri-blue-600 font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
              <Link href={`/${locale}/servicios`}>
                Ver todos los servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Academy Section */}
      <div className="animate-fade-in section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gray-900 mb-6">Academia Mistri</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">Formación especializada para líderes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {academyPrograms.map((program, index) => {
              const IconComponent = iconMap[program.icon] || BookOpen;
              const academyImages = [
                '/images/academy/academy-1.jpg',
                '/images/academy/academy-2.jpg',
                '/images/academy/academy-3.jpg'
              ];
              return (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <Link 
                    href={`/${locale}/academia`}
                    className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl block"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('${academyImages[index]}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90"></div>
                    <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500"></div>
                    
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-500">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-mistri-lime-300 transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-white/90 mb-6 leading-relaxed">{program.description}</p>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="animate-bounce-in text-center" style={{ animationDelay: '800ms' }}>
            <Button asChild className="bg-mistri-blue-500 text-white hover:bg-mistri-blue-600 font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
              <Link href={`/${locale}/academia`}>
                <BookOpen className="mr-2 h-5 w-5" />
                Conocer Academia Mistri
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <ClientsSection
        title={clientsData.title}
        subtitle={clientsData.subtitle}
        clients={clientsData.clients}
      />

      {/* MISTRI Method Section */}
      <div className="animate-fade-in section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-section-title text-gray-900 mb-6">{t('method.title')}</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">{t('method.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw('method.steps').map((step: any, index: number) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{step.letter}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.titleEs}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection
        title={testimonials.title}
        description={testimonials.description}
        badge={testimonials.badge}
        testimonials={[
          {
            name: 'Emmanuel Amado',
            company: 'Presidente, SBR SAS',
            content: 'Con Mistri&Co hemos transformado nuestro negocio. No solo capacitamos a nuestro equipo de ventas, sino que reorganizamos la empresa por completo. Su trabajo en marketing y el análisis de números estratégicos nos dio una claridad que no teníamos.',
            rating: 5,
            website: 'https://sbrepuestos.com/?fbclid=PAZXh0bgNhZW0CMTEAAaclbXScXu8RceUjjq00qm-mYUN02TEV6WQCR9UiVWoL-RWtP-iQKCpeZkc50Q_aem_Zbuodh380rtXQEgevzcWeQ'
          },
          {
            name: 'Patricia Vázquez',
            company: 'Fundadora, Vazquez Contadores Asociados',
            content: 'Mistri&Co resolvió nuestro gran desafío: cómo vender y comercializar servicios intangibles. Nos ayudaron a acceder a más clientes con una mentalidad completamente nueva, transformando nuestra perspectiva comercial.',
            rating: 5
          },
          {
            name: 'Gustavo Melinik',
            company: 'Gerente, Muñoz Marchesí',
            content: 'Como Gerente de Sucursal, he transformado la forma de liderar a mis equipos. Junto a Mistri&Co, combinamos metas claras, entrenamiento continuo e incentivos estratégicos. Esta fórmula ha optimizado significativamente el desempeño.',
            rating: 5,
            website: 'https://www.munozmarchesi.com'
          }
        ]}
      />

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        description={cta.description}
        primaryButton={{
          text: cta.primaryButton.text,
          href: `/${locale}${cta.primaryButton.href}`,
          icon: cta.primaryButton.icon
        }}
        secondaryButton={{
          text: cta.secondaryButton.text,
          href: `/${locale}${cta.secondaryButton.href}`
        }}
      />
    </div>
  );
}
