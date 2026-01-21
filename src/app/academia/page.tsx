'use client';

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
import { useLanguage } from '@/hooks/use-language'
import type { Metadata } from 'next'

// export const metadata: Metadata = pageSEO.academia
// Nota: metadata no funciona en client components, se debería mover a un layout o componente padre si es crítico.


export default function AcademiaPage() {
  const { t, language } = useLanguage()
  const courses = t.academia.courses
  const workshops = t.academia.workshops
  const talks = t.academia.talks


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t.titles.academia.hero}
        subtitle={t.academia.subtitle}
        description={t.descriptions.academia.hero}
        ctaText={t.ctas.academia.primary.text}
        ctaLink={t.ctas.academia.primary.href}
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
            title={t.titles.academia.programs}
            description={t.academia.programsDescription}
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={150} className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {t.academia.coursesTitle}
                </h3>
                <p className="text-medium-gray mb-4">
                  {t.academia.courses[0].description}
                </p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {t.academia.courses[0].duration}
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-primary shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Presentation className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {t.academia.workshopsTitle}
                </h3>
                <p className="text-medium-gray mb-4">
                  {t.academia.workshops[0].description}
                </p>
                <Badge variant="default" className="bg-primary text-white">
                  {t.academia.workshops[0].duration}
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {t.academia.talksTitle}
                </h3>
                <p className="text-medium-gray mb-4">
                  {t.academia.talks[0].description}
                </p>
                <Badge variant="secondary" className="bg-secondary/20 text-dark">
                  {t.academia.talks[0].duration}
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
                {t.academia.tabs.cursos}
              </TabsTrigger>
              <TabsTrigger value="talleres" className="text-sm lg:text-base">
                {t.academia.tabs.talleres}
              </TabsTrigger>
              <TabsTrigger value="charlas" className="text-sm lg:text-base">
                {t.academia.tabs.charlas}
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
                    {t.academia.moreInfo} {t.academia.tabs.cursos}
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
                    {t.academia.moreInfo} {t.academia.tabs.talleres}
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
                    {t.academia.moreInfo} {t.academia.tabs.charlas}
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
            title={t.academia.benefits.title}
            description={t.academia.benefits.description}
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.academia.benefits.items.map((benefit, idx) => {
              const icons = [Award, Users, Target, TrendingUp]
              const Icon = icons[idx % icons.length]
              const bgColors = ['bg-primary/10', 'bg-secondary/10', 'bg-navy/10', 'bg-primary/10']
              const textColors = ['text-primary', 'text-secondary', 'text-navy', 'text-primary']

              return (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${bgColors[idx]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-6 w-6 ${textColors[idx]}`} />
                    </div>
                    <h3 className="font-semibold text-dark mb-2">{benefit.title}</h3>
                    <p className="text-sm text-medium-gray">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t.titles.academia.cta}
        description={language === 'ES' ? "Únete a nuestros programas de formación y transforma tu carrera profesional" : "Junte-se aos nossos programas de formação e transforme sua carreira profissional"}
        primaryButton={{
          text: t.ctas.academia.ctaSection.primary.text,
          href: t.ctas.academia.ctaSection.primary.href,
          icon: t.ctas.academia.ctaSection.primary.icon
        }}
        secondaryButton={t.ctas.academia.ctaSection.secondary}
        backgroundColor="bg-[#83e935]"
        textColor="text-gray-900"
      />
    </div>
  );
}
