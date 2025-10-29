"use client";

import React from "react";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { TestimonialsSection } from "@/components/common/TestimonialsSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  BookOpen, 
  MessageSquare, 
  BarChart3,
  Lightbulb,
  Heart,
  Zap,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Building2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  User
} from "lucide-react";
import * as Icons from "lucide-react";
import Link from 'next/link';

export default function ServiciosClient() {
  const t = useTranslations('pages.services');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('formacion');


  const testimonials = [
    {
      name: 'Emmanuel Amado',
      company: 'SBR SAS',
      content: 'Con Mistri&Co transformamos completamente nuestra cultura organizacional. Los resultados se vieron desde el primer mes.',
      rating: 5,
      website: 'https://sbrepuestos.com/'
    },
    {
      name: 'María González',
      company: 'TechCorp',
      content: 'El programa de formación de líderes fue excepcional. Nuestros managers están mucho más preparados y motivados.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'InnovateLab',
      content: 'La consultoría estratégica nos ayudó a redefinir nuestros procesos y aumentar la productividad en un 40%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        ctaText={t('hero.ctaText')}
        ctaLink={`/${locale}/contacto`}
        showStats={false}
        secondaryButton={{
          text: t('hero.secondary'),
          href: `/${locale}/portafolio`,
          icon: "BarChart3"
        }}
      />

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title={t('sectionHeader.title')}
            description={t('sectionHeader.description')}
          />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="formacion">{t('tabs.formacion')}</TabsTrigger>
              <TabsTrigger value="asesoramiento">{t('tabs.asesoramiento')}</TabsTrigger>
              <TabsTrigger value="especializados">{t('tabs.especializados')}</TabsTrigger>
            </TabsList>

            <TabsContent value="formacion" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.raw('cards.formacion').map((service: any, index: number) => {
                  const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-700">Incluye:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>


                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="asesoramiento" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.raw('cards.asesoramiento').map((service: any, index: number) => {
                  const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-700">Incluye:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>


                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="especializados" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.raw('cards.especializados').map((service: any, index: number) => {
                  const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-700">Incluye:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>


                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* Testimonials Section */}
      <TestimonialsSection
        title={t('testimonials.title')}
        description={t('testimonials.description')}
        testimonials={testimonials}
      />

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('whatsapp.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t('whatsapp.description')}
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <MessageSquare className="mr-2 h-5 w-5" />
            {t('whatsapp.button')}
          </Button>
        </div>
      </section>
    </div>
  );
}
