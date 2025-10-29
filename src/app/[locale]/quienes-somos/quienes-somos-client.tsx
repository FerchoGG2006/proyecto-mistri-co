'use client';

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CTASection } from '@/components/cta-section'
import { SectionHeader } from '@/components/section-header'
import { AnimatedSection, StaggeredAnimation } from '@/components/ui/animated-section'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Heart, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Building2,
  BookOpen,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Shield,
  Briefcase,
  User
} from 'lucide-react'

export default function QuienesSomosClient() {
  const t = useTranslations('pages.about');
  const locale = useLocale();

  const teamMembers = [
    {
      name: 'María González',
      position: 'Directora General',
      image: '/images/team/maria.jpg',
      description: 'Especialista en transformación organizacional con más de 15 años de experiencia.',
      expertise: ['Liderazgo', 'Estrategia', 'Cambio Organizacional']
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Desarrollo',
      image: '/images/team/carlos.jpg',
      description: 'Experto en desarrollo de equipos y formación de líderes.',
      expertise: ['Coaching', 'Desarrollo de Equipos', 'Capacitación']
    },
    {
      name: 'Ana Martínez',
      position: 'Consultora Senior',
      image: '/images/team/ana.jpg',
      description: 'Especialista en cultura organizacional y procesos de mejora.',
      expertise: ['Cultura', 'Procesos', 'Mejora Continua']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Pasión por el Desarrollo',
      description: 'Creemos en el potencial ilimitado de las personas y organizaciones.'
    },
    {
      icon: Target,
      title: 'Enfoque en Resultados',
      description: 'Cada proyecto está diseñado para generar impacto medible y sostenible.'
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Trabajamos codo a codo con nuestros clientes como socios estratégicos.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description: 'Aplicamos las últimas metodologías y tendencias en desarrollo organizacional.'
    }
  ];

  const achievements = [
    {
      number: '50+',
      label: 'Organizaciones Transformadas',
      description: 'Empresas que han logrado mejoras significativas en su cultura y resultados'
    },
    {
      number: '500+',
      label: 'Líderes Desarrollados',
      description: 'Profesionales que han potenciado sus habilidades de liderazgo'
    },
    {
      number: '15+',
      label: 'Años de Experiencia',
      description: 'Trayectoria consolidada en transformación organizacional'
    },
    {
      number: '95%',
      label: 'Satisfacción del Cliente',
      description: 'Tasa de satisfacción y recomendación de nuestros servicios'
    }
  ];

  const services = [
    {
      icon: Users,
      title: 'Formación de Líderes',
      description: 'Desarrollamos las competencias de liderazgo necesarias para el siglo XXI.',
      features: ['Coaching Ejecutivo', 'Liderazgo Situacional', 'Gestión de Equipos']
    },
    {
      icon: Target,
      title: 'Transformación Cultural',
      description: 'Acompañamos el cambio cultural hacia organizaciones más ágiles y humanas.',
      features: ['Diagnóstico Cultural', 'Diseño de Cultura', 'Implementación']
    },
    {
      icon: TrendingUp,
      title: 'Desarrollo Organizacional',
      description: 'Optimizamos procesos y estructuras para maximizar la eficiencia.',
      features: ['Rediseño de Procesos', 'Estructura Organizacional', 'Sistemas de Gestión']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Calendar className="mr-2 h-5 w-5" />
                Conoce nuestro equipo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                Nuestra historia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Mistri&Co nació con la visión de transformar la manera en que las organizaciones desarrollan a sus líderes y gestionan el cambio. Desde nuestros inicios en Resistencia, Chaco, hemos expandido nuestro impacto a toda Argentina y Latinoamérica.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nuestra metodología MISTRI® ha sido probada en más de 50 organizaciones, generando mejoras medibles en productividad, satisfacción del empleado y resultados de negocio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Award className="mr-2 h-4 w-4" />
                  Certificación Internacional
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Globe className="mr-2 h-4 w-4" />
                  Presencia Regional
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Star className="mr-2 h-4 w-4" />
                  Metodología Propia
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
                <img 
                  src="/images/quienes-somos/bg-who-are.jpg" 
                  alt="Equipo Mistri&Co"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Nuestros Valores"
            description="Los principios que guían nuestro trabajo y definen nuestra cultura organizacional."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fadeIn" delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Nuestro Equipo"
            description="Profesionales apasionados por el desarrollo organizacional y el crecimiento de las personas."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Nuestros Logros"
            description="Resultados que respaldan nuestra experiencia y compromiso con la excelencia."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.label}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Nuestros Servicios"
            description="Soluciones integrales para el desarrollo organizacional y la formación de líderes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para trabajar con nosotros?"
        description="Únete a las organizaciones que ya han transformado su cultura y resultados con Mistri&Co."
        primaryButton={{
          text: "Agenda una reunión",
          href: `/${locale}/contacto`
        }}
        secondaryButton={{
          text: "Conoce nuestros servicios",
          href: `/${locale}/servicios`
        }}
      />
    </div>
  );
}
