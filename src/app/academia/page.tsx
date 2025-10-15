import { Hero } from '@/components/hero'
import { CTASection } from '@/components/cta-section'
import { SectionHeader } from '@/components/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedSection, StaggeredAnimation } from '@/components/ui/animated-section'
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
import { pageSEO } from '@/lib/seo'
import { content } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = pageSEO.academia

export default function AcademiaPage() {
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
        'Medición de resultados'
      ]
    },
    {
      title: 'Toma de Decisiones',
      description: 'Aprende metodologías probadas para tomar decisiones estratégicas.',
      duration: '6 semanas',
      modules: 6,
      features: [
        'Análisis de problemas complejos',
        'Metodologías de decisión',
        'Evaluación de riesgos',
        'Pensamiento crítico',
        'Implementación de decisiones',
        'Seguimiento y ajustes'
      ]
    },
    {
      title: 'Comunicación Efectiva',
      description: 'Mejora tus habilidades de comunicación en todos los niveles.',
      duration: '6 semanas',
      modules: 6,
      features: [
        'Comunicación verbal y no verbal',
        'Presentaciones ejecutivas',
        'Comunicación escrita',
        'Escucha activa',
        'Negociación y persuasión',
        'Comunicación en crisis'
      ]
    },
    {
      title: 'Gestión del Cambio',
      description: 'Lidera procesos de transformación organizacional exitosos.',
      duration: '6 semanas',
      modules: 6,
      features: [
        'Fundamentos del cambio organizacional',
        'Resistencia al cambio',
        'Planificación de la transición',
        'Comunicación del cambio',
        'Sostenibilidad del cambio',
        'Medición del impacto'
      ]
    },
    {
      title: 'Innovación y Creatividad',
      description: 'Desarrolla una cultura de innovación en tu organización.',
      duration: '6 semanas',
      modules: 6,
      features: [
        'Pensamiento creativo',
        'Metodologías de innovación',
        'Design thinking',
        'Prototipado y testing',
        'Implementación de ideas',
        'Cultura de innovación'
      ]
    }
  ]

  const workshops = [
    {
      title: 'Liderazgo Transformacional',
      description: 'Desarrolla tu estilo de liderazgo personal y efectivo.',
      duration: '3 encuentros de 90 min',
      features: [
        'Autoconocimiento y liderazgo',
        'Estilos de liderazgo',
        'Liderazgo situacional',
        'Desarrollo de seguidores',
        'Ética y valores en el liderazgo'
      ]
    },
    {
      title: 'Comunicación Interpersonal',
      description: 'Mejora tus relaciones y comunicación con otros.',
      duration: '3 encuentros de 90 min',
      features: [
        'Escucha activa y empática',
        'Comunicación asertiva',
        'Manejo de emociones',
        'Feedback constructivo',
        'Resolución de conflictos'
      ]
    },
    {
      title: 'Motivación y Engagement',
      description: 'Aprende a motivar y comprometer a tu equipo.',
      duration: '3 encuentros de 90 min',
      features: [
        'Teorías de motivación',
        'Identificación de motivadores',
        'Diseño de experiencias',
        'Reconocimiento y recompensas',
        'Medición del engagement'
      ]
    },
    {
      title: 'Colaboración Efectiva',
      description: 'Trabaja mejor en equipo y construye relaciones sólidas.',
      duration: '3 encuentros de 90 min',
      features: [
        'Fundamentos del trabajo en equipo',
        'Roles y responsabilidades',
        'Comunicación en equipos',
        'Resolución de conflictos',
        'Construcción de confianza'
      ]
    },
    {
      title: 'Gestión del Estrés',
      description: 'Maneja el estrés y mantén el equilibrio personal y profesional.',
      duration: '3 encuentros de 90 min',
      features: [
        'Identificación de estresores',
        'Técnicas de relajación',
        'Gestión del tiempo',
        'Límites saludables',
        'Bienestar integral'
      ]
    },
    {
      title: 'Creatividad e Innovación',
      description: 'Desarrolla tu potencial creativo y fomenta la innovación.',
      duration: '3 encuentros de 90 min',
      features: [
        'Desbloqueo creativo',
        'Técnicas de ideación',
        'Pensamiento lateral',
        'Prototipado rápido',
        'Implementación de ideas'
      ]
    }
  ]

  const talks = [
    {
      title: 'El Futuro del Trabajo',
      description: 'Tendencias y desafíos en el mundo laboral del siglo XXI.',
      duration: '1 hora',
      topics: ['Trabajo remoto', 'Automatización', 'Nuevas competencias', 'Cultura organizacional']
    },
    {
      title: 'Economía Regional 2025',
      description: 'Análisis de las oportunidades y desafíos económicos regionales.',
      duration: '1 hora',
      topics: ['Tendencias económicas', 'Oportunidades de mercado', 'Desafíos regionales', 'Estrategias de crecimiento']
    },
    {
      title: 'Innovación en las Organizaciones',
      description: 'Cómo fomentar la innovación y adaptarse al cambio constante.',
      duration: '1 hora',
      topics: ['Cultura de innovación', 'Procesos creativos', 'Implementación', 'Medición de resultados']
    },
    {
      title: 'Liderazgo en la Era Digital',
      description: 'Nuevas competencias y desafíos para líderes modernos.',
      duration: '1 hora',
      topics: ['Liderazgo digital', 'Gestión de equipos remotos', 'Transformación digital', 'Nuevas competencias']
    },
    {
      title: 'Sostenibilidad Empresarial',
      description: 'Cómo integrar la sostenibilidad en la estrategia organizacional.',
      duration: '1 hora',
      topics: ['ESG y sostenibilidad', 'Impacto social', 'Responsabilidad corporativa', 'Medición de impacto']
    },
    {
      title: 'Diversidad e Inclusión',
      description: 'Construyendo organizaciones más diversas e inclusivas.',
      duration: '1 hora',
      topics: ['Beneficios de la diversidad', 'Estrategias de inclusión', 'Sesgos inconscientes', 'Cultura inclusiva']
    },
    {
      title: 'Gestión del Talento',
      description: 'Estrategias para atraer, desarrollar y retener el mejor talento.',
      duration: '1 hora',
      topics: ['Atracción de talento', 'Desarrollo profesional', 'Retención', 'Employer branding']
    },
    {
      title: 'Transformación Digital',
      description: 'Cómo liderar la transformación digital en tu organización.',
      duration: '1 hora',
      topics: ['Estrategia digital', 'Cambio cultural', 'Tecnología', 'Adopción y resistencia']
    },
    {
      title: 'Agilidad Organizacional',
      description: 'Implementando metodologías ágiles en organizaciones tradicionales.',
      duration: '1 hora',
      topics: ['Metodologías ágiles', 'Cambio cultural', 'Estructuras flexibles', 'Mentalidad ágil']
    },
    {
      title: 'Bienestar Organizacional',
      description: 'Creando entornos de trabajo saludables y productivos.',
      duration: '1 hora',
      topics: ['Salud mental', 'Equilibrio trabajo-vida', 'Ambiente laboral', 'Productividad sostenible']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={content.titles.academia.hero}
        subtitle="Formación especializada para líderes del siglo XXI"
        description={content.descriptions.academia.hero}
        ctaText={content.ctas.academia.primary.text}
        ctaLink={content.ctas.academia.primary.href}
        backgroundImage="/images/academy/bg-mistri-academy.jpg"
        overlayType="abstract"
        secondaryButton={{
          text: "Descargar programa",
          href: "/contacto?form=academia",
          icon: "Download"
        }}
      />

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title={content.titles.academia.programs}
            description="Tres modalidades de aprendizaje diseñadas para diferentes necesidades y niveles de profundidad"
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={150} className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Cursos Intensivos
                </h3>
                <p className="text-medium-gray mb-4">
                  6 módulos en 6 semanas para un aprendizaje profundo y aplicable
                </p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  6 semanas
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-primary shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Presentation className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Talleres Especializados
                </h3>
                <p className="text-medium-gray mb-4">
                  3 encuentros de 90 minutos enfocados en habilidades específicas
                </p>
                <Badge variant="default" className="bg-primary text-white">
                  3 encuentros
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Charlas Inspiradoras
                </h3>
                <p className="text-medium-gray mb-4">
                  10 temáticas actuales sobre el futuro del trabajo y la innovación
                </p>
                <Badge variant="secondary" className="bg-secondary/20 text-dark">
                  1 hora
                </Badge>
              </CardContent>
            </Card>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <Tabs defaultValue="cursos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="cursos" className="text-sm lg:text-base">
                Cursos Intensivos
              </TabsTrigger>
              <TabsTrigger value="talleres" className="text-sm lg:text-base">
                Talleres
              </TabsTrigger>
              <TabsTrigger value="charlas" className="text-sm lg:text-base">
                Charlas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cursos" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {course.duration}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-medium-gray">
                          <BookOpen className="h-4 w-4" />
                          <span>{course.modules} módulos</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-3">
                        {course.title}
                      </h3>
                      <p className="text-medium-gray mb-4">
                        {course.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-dark">
                            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-mistri-blue-500 hover:bg-mistri-blue-600 text-white">
                  <Link href="/contacto?form=academia&programa=cursos">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Más información sobre Cursos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="talleres" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="bg-secondary/10 text-secondary">
                          {workshop.duration}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-medium-gray">
                          <Users className="h-4 w-4" />
                          <span>Grupos reducidos</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-3">
                        {workshop.title}
                      </h3>
                      <p className="text-medium-gray mb-4">
                        {workshop.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {workshop.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-dark">
                            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-mistri-blue-500 hover:bg-mistri-blue-600 text-white">
                  <Link href="/contacto?form=academia&programa=talleres">
                    <Presentation className="mr-2 h-5 w-5" />
                    Más información sobre Talleres
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="charlas" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {talks.map((talk, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="bg-navy/10 text-navy">
                          {talk.duration}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-medium-gray">
                          <Lightbulb className="h-4 w-4" />
                          <span>Inspiracional</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-3">
                        {talk.title}
                      </h3>
                      <p className="text-medium-gray mb-4">
                        {talk.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-dark mb-2">Temas clave:</h4>
                        <div className="flex flex-wrap gap-1">
                          {talk.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-mistri-blue-500 hover:bg-mistri-blue-600 text-white">
                  <Link href="/contacto?form=academia&programa=charlas">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Más información sobre Charlas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="¿Por qué elegir Academia Mistri?"
            description="Nuestros programas están diseñados para generar un impacto real en tu desarrollo profesional y organizacional"
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">Certificación</h3>
                <p className="text-sm text-medium-gray">
                  Certificados reconocidos por la industria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">Networking</h3>
                <p className="text-sm text-medium-gray">
                  Conecta con otros profesionales
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-semibold text-dark mb-2">Aplicación Práctica</h3>
                <p className="text-sm text-medium-gray">
                  Metodologías aplicables inmediatamente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">Impacto Medible</h3>
                <p className="text-sm text-medium-gray">
                  Resultados cuantificables en tu organización
                </p>
              </CardContent>
            </Card>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={content.titles.academia.cta}
        description="Únete a nuestros programas de formación y transforma tu carrera profesional"
        primaryButton={{
          text: content.ctas.academia.ctaSection.primary.text,
          href: content.ctas.academia.ctaSection.primary.href,
          icon: content.ctas.academia.ctaSection.primary.icon
        }}
        secondaryButton={content.ctas.academia.ctaSection.secondary}
        backgroundColor="bg-[#83e935]"
        textColor="text-gray-900"
      />
    </div>
  );
}
