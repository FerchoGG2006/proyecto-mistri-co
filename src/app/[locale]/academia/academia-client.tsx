'use client';

import { Hero } from '@/components/hero'
import { CTASection } from '@/components/cta-section'
import { SectionHeader } from '@/components/section-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SimpleAnimatedSection as AnimatedSection } from '@/components/ui/simple-animated-section'
import { useTranslations, useLocale } from 'next-intl'
import { 
  BookOpen,
  Presentation,
  Lightbulb,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Target,
  TrendingUp,
  Zap,
  Globe,
  Brain,
  Heart,
  Briefcase,
  LucideIcon
} from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { content } from '@/lib/content'

export function AcademiaPageClient() {
  const t = useTranslations('pages.academy');
  const locale = useLocale();
  const courses = [
        {
          title: 'Gestión de Equipos',
          description: 'Desarrolla habilidades para liderar equipos de alto rendimiento.',
          duration: '6 semanas',
          modules: 6,
          features: [
            'Fundamentos del liderazgo efectivo',
            'Comunicación y feedback',
            'Resolución de conflictos',
            'Motivación y engagement',
            'Desarrollo de talento',
            'Cultura organizacional'
          ],
          students: 150,
          rating: 4.8,
          icon: 'Users',
          category: 'Liderazgo',
          isPopular: true
        },
        {
          title: 'Transformación Digital',
          description: 'Lidera la transformación digital en tu organización.',
          duration: '8 semanas',
          modules: 8,
          features: [
            'Estrategia digital',
            'Tecnologías emergentes',
            'Cambio organizacional',
            'Gestión de proyectos digitales',
            'Cultura digital',
            'Medición de resultados'
          ],
          students: 89,
          rating: 4.9,
          icon: 'Zap',
          category: 'Digital',
          isPopular: false
        },
        {
          title: 'Coaching Ejecutivo',
          description: 'Desarrolla competencias de coaching para líderes.',
          duration: '10 semanas',
          modules: 10,
          features: [
            'Fundamentos del coaching',
            'Técnicas de coaching',
            'Coaching de equipos',
            'Desarrollo de competencias',
            'Medición de resultados',
            'Certificación internacional'
          ],
          students: 45,
          rating: 4.9,
          icon: 'Heart',
          category: 'Coaching',
          isPopular: true
        }
  ];

  const testimonials = [
    {
      name: 'Roberto Silva',
      position: 'Director de RRHH',
      company: 'TechCorp',
      content: 'El programa de Gestión de Equipos transformó completamente mi forma de liderar. Los resultados en mi equipo son evidentes.',
      rating: 5,
      avatar: '/images/testimonials/roberto.jpg'
    },
    {
      name: 'Laura Fernández',
      position: 'CEO',
      company: 'InnovateLab',
      content: 'La Academia Mistri me dio las herramientas necesarias para liderar la transformación digital de mi empresa.',
      rating: 5,
      avatar: '/images/testimonials/laura.jpg'
    },
    {
      name: 'Miguel Torres',
      position: 'Gerente General',
      company: 'Global Solutions',
      content: 'El coaching ejecutivo cambió mi perspectiva sobre el liderazgo. Ahora soy un líder más efectivo y empático.',
      rating: 5,
      avatar: '/images/testimonials/miguel.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Estudiantes graduados', icon: 'Users' },
    { number: '95%', label: 'Tasa de satisfacción', icon: 'Star' },
    { number: '15', label: 'Años de experiencia', icon: 'Award' },
    { number: '50+', label: 'Empresas capacitadas', icon: 'Briefcase' }
  ];

  const benefits = [
    {
      icon: 'Award',
      title: 'Certificación Internacional',
      description: 'Recibe certificados reconocidos internacionalmente al completar nuestros programas.'
    },
    {
      icon: 'Users',
      title: 'Red de Networking',
      description: 'Conecta con profesionales de diferentes industrias y expande tu red de contactos.'
    },
    {
      icon: 'Target',
      title: 'Enfoque Práctico',
      description: 'Aprende con casos reales y proyectos aplicables a tu trabajo diario.'
    },
    {
      icon: 'Clock',
      title: 'Flexibilidad Horaria',
      description: 'Adapta tu aprendizaje a tu horario con opciones presenciales y online.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('description')}
        ctaText={t('hero.cta')}
        ctaLink={`/${locale}/contacto`}
        showStats={false}
        secondaryButton={{
          text: t('hero.secondaryCta'),
          href: `/${locale}/servicios`,
          icon: "BookOpen"
        }}
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = Icons[stat.icon as keyof typeof Icons] as LucideIcon;
              return (
                <AnimatedSection key={index} animation="scale" delay={index * 100} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-gradient-primary">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title={t('courses.title')}
            description={t('courses.description')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {courses.map((course, index) => {
              const IconComponent = Icons[course.icon as keyof typeof Icons] as LucideIcon;
              return (
                <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 relative overflow-hidden">
                    {course.isPopular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                          Más Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-600">
                        {course.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Course Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-gray-400" />
                          <span>{course.modules} módulos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span>{course.students} estudiantes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-700">Incluye:</h4>
                        <ul className="space-y-1">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="¿Por qué elegir la Academia Mistri?"
            description="Ventajas de estudiar con nosotros. Nuestro enfoque único combina teoría y práctica para garantizar tu éxito profesional."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon as keyof typeof Icons] as LucideIcon;
              return (
                <AnimatedSection key={index} animation="fadeIn" delay={index * 100} className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title={t('testimonials.title')}
            description={t('testimonials.description')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-4 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">
                          {testimonial.position} - {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryButton={{
          text: t('cta.button'),
          href: "/contacto"
        }}
        secondaryButton={{
          text: "Conoce Nuestros Programas",
          href: "/servicios"
        }}
      />
    </div>
  );
}
