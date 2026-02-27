import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/cta-section'
import { SectionHeader } from '@/components/section-header'
import { AnimatedSection, StaggeredAnimation } from '@/components/ui/animated-section'
import Link from 'next/link'
import Image from 'next/image'
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
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center bg-[#0a192f] py-12 lg:py-24 overflow-hidden">
        {/* Advanced Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#0d213f] to-[#0a192f]"></div>

        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-mistri-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-mistri-lime-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Refined Decorative Elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(33,150,243,0.15),transparent_50%)]"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <AnimatedSection animation="slideRight" className="relative group order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                <Image
                  src="/images/quienes-somos/hero-historia.jpg"
                  alt={t.titles.quienesSomos.hero}
                  fill
                  className="object-cover object-top transition-all duration-1000 group-hover:scale-110"
                  priority
                />
                {/* Subtle internal gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a192f]/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Decorative Card */}
              <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl hidden md:block animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-mistri-lime-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-mistri-blue-900 h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{t.titles.quienesSomos.experience.title}</div>
                    <div className="text-white/70 text-sm">Mistri & Co.</div>
                  </div>
                </div>
              </div>

              {/* Decorative behind elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-[40px] rotate-3"></div>
            </AnimatedSection>

            {/* Content Column */}
            <AnimatedSection animation="slideLeft" className="text-white space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h1 className="text-hero text-white leading-[1.1] tracking-tight">
                  {t.titles.quienesSomos.hero}
                </h1>
                <div className="w-24 h-2 bg-gradient-to-r from-mistri-lime-500 to-mistri-lime-300 rounded-full shadow-[0_0_15px_rgba(131,233,53,0.3)]"></div>
                <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed max-w-xl">
                  {t.descriptions.quienesSomos.hero}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button asChild size="lg" className="btn-secondary h-16 px-10 text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-mistri-lime-500/10">
                  <Link href={t.ctas.quienesSomos.primary.href}>
                    {t.ctas.quienesSomos.primary.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="h-16 px-10 text-lg font-semibold bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-[#0a192f] transition-all duration-300">
                  <Link href={t.ctas.quienesSomos.secondary.href}>
                    {t.ctas.quienesSomos.secondary.text}
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
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

