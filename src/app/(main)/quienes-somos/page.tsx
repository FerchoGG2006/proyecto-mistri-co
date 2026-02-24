import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/cta-section'
import { SectionHeader } from '@/components/section-header'
import { AnimatedSection, StaggeredAnimation } from '@/components/ui/animated-section'
import Link from 'next/link'
import {
  Users,
  ArrowRight,
  CheckCircle,
  LucideIcon
} from 'lucide-react'
import * as Icons from 'lucide-react'
import { cookies } from 'next/headers'
import { contentES, contentPT } from '@/lib/content'

export const revalidate = 3600; // ISR cada hora

export default async function QuienesSomosPage() {
  const cookieStore = await cookies();
  const language = cookieStore.get('preferredLanguage')?.value || 'ES';
  const t = language === 'ES' ? contentES : contentPT;

  const teamAreas = t.titles.quienesSomos.teamAreas
  const values = t.titles.quienesSomos.values

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="section-padding gradient-hero text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/quienes-somos/bg-who-are.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="relative container-custom text-center">
          <h1 className="text-hero text-white mb-6 animate-fade-in">
            {t.titles.quienesSomos.hero}
          </h1>
          <p className="text-body text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            {t.descriptions.quienesSomos.hero}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="btn-secondary hover:shadow-xl hover:shadow-lime-400/25">
              <Link href={t.ctas.quienesSomos.primary.href}>
                {t.ctas.quienesSomos.primary.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-gray-900 hover:bg-white hover:text-mistri-blue-500 glass-effect">
              <Link href={t.ctas.quienesSomos.secondary.href}>
                {t.ctas.quienesSomos.secondary.text}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-section-title text-gray-900 mb-6">
                {t.titles.quienesSomos.mission}
              </h2>
              <p className="text-body text-gray-600 mb-6">
                {t.descriptions.quienesSomos.mission}
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-mistri-lime-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-body text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-mistri-blue-50 to-mistri-lime-50 rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.titles.quienesSomos.experience.title}
                  </h3>
                  <p className="text-body text-gray-600">
                    {t.titles.quienesSomos.experience.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title={t.titles.quienesSomos.team}
            description={t.descriptions.quienesSomos.team}
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={200} className="grid md:grid-cols-2 gap-8">
            {teamAreas.map((area, index) => {
              const IconComponent = Icons[area.icon as keyof typeof Icons] as LucideIcon
              return (
                <Link
                  key={index}
                  href="/servicios"
                  className="relative h-[26rem] rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/quienes-somos/area-${index + 1}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Fallback background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                  <div className="absolute inset-0 bg-pattern-dots opacity-20" />

                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />

                  {/* Contenido alineado a la izquierda */}
                  <div className="relative z-10 h-full flex flex-col justify-center text-white p-6">
                    <div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-500">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-mistri-lime-300 transition-colors duration-300">
                        {area.title}
                      </h3>

                      <p className="text-white/90 mb-6 leading-relaxed">
                        {area.description}
                      </p>

                      <div className="space-y-2">
                        {area.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-mistri-lime-400 flex-shrink-0" />
                            <span className="text-sm text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              )
            })}
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t.titles.quienesSomos.cta}
        description={t.descriptions.quienesSomos.cta}
        primaryButton={{
          text: t.ctas.quienesSomos.ctaSection.primary.text,
          href: t.ctas.quienesSomos.ctaSection.primary.href,
          icon: t.ctas.quienesSomos.ctaSection.primary.icon
        }}
        secondaryButton={t.ctas.quienesSomos.ctaSection.secondary}
        backgroundColor="bg-[#83e935]"
        textColor="text-gray-900"
      />
    </div>
  )
}

