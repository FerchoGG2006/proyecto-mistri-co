import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { ClientsSection } from "@/components/clients-section";
import { LazySection } from "@/components/lazy-section";
import { CTASection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import { AnimatedSection, StaggeredAnimation } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  LucideIcon,
  BookOpen,
} from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { contentES, contentPT } from "@/lib/content";

export const revalidate = 3600; // ISR cada hora

export default async function Home() {
  const cookieStore = await cookies();
  const language = cookieStore.get('preferredLanguage')?.value || 'ES';
  const t = language === 'ES' ? contentES : contentPT;

  const services = t.titles.servicios.items;
  const clients = t.shared.clients.items;
  const academyFeatures = t.academia.features;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t.titles.home.hero}
        subtitle={t.shared.home.heroSubtitle}
        description={t.descriptions.home.hero}
        ctaText={t.ctas.home.primary.text}
        ctaLink={t.ctas.home.primary.href}
        showStats={true}
        backgroundImage="/images/home/bg-home.jpg"
        overlayType="photo"
        statsLabels={t.shared.stats}
        secondaryButton={{
          text: t.ctas.home.secondary.text,
          href: t.ctas.home.secondary.href,
          icon: "Target"
        }}
      />

      {/* Services Section */}
      <AnimatedSection animation="fadeIn" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title={t.titles.home.services}
            description={t.descriptions.home.services}
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant={service.variant}
              />
            ))}
          </StaggeredAnimation>

          <AnimatedSection animation="scale" delay={600} className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary text-gray-600">
              <Link href="/servicios">
                {t.titles.servicios.viewAll}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Academy Section */}
      <AnimatedSection animation="fadeIn" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title={t.titles.home.academy}
            description={t.descriptions.home.academy}
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={200} className="grid md:grid-cols-3 gap-8 mb-12">
            {academyFeatures.map((feature, index) => {
              const IconComponent = Icons[
                feature.icon as keyof typeof Icons
              ] as LucideIcon;
              return (
                <Link
                  key={index}
                  href="/academia"
                  className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/academy/academy-${index + 1}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Fallback background pattern si no hay imagen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                  <div className="absolute inset-0 bg-pattern-dots opacity-20" />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />

                  {/* Contenido */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-500">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-mistri-lime-300 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-white/90 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-white">
                        {feature.duration}
                      </span>
                    </div>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              );
            })}
          </StaggeredAnimation>

          <AnimatedSection animation="scale" delay={800} className="text-center">
            <Button asChild size="lg" className="btn-primary text-gray-600">
              <Link href="/academia">
                <BookOpen className="mr-2 h-5 w-5" />
                {t.academia.viewMore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Clients Section */}
      <LazySection>
        <ClientsSection
          title={t.shared.clients.title}
          subtitle={t.shared.clients.subtitle}
          moreText={t.shared.clients.moreText}
          clients={clients}
        />
      </LazySection>

      {/* Testimonials Section */}
      <AnimatedSection animation="fadeIn" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title={t.titles.home.testimonials}
            description={t.descriptions.home.testimonials}
            badgeVariant="outline"
          />

          <StaggeredAnimation animation="slideUp" staggerDelay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.shared.testimonials.map((testimonial, index) => (
              <Card key={index} className="card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-mistri-lime-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-body text-gray-700 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${index === 1 ? 'from-mistri-lime-500 to-mistri-lime-600' : 'from-mistri-blue-500 to-mistri-blue-600'} rounded-full flex items-center justify-center`}>
                      <span className={`${index === 1 ? 'text-gray-900' : 'text-white'} font-semibold`}>
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-small text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection
        title={t.titles.home.cta}
        description={t.descriptions.home.cta}
        primaryButton={{
          text: t.ctas.home.ctaSection.primary.text,
          href: t.ctas.home.ctaSection.primary.href,
          icon: t.ctas.home.ctaSection.primary.icon
        }}
        secondaryButton={t.ctas.home.ctaSection.secondary}
        backgroundColor="bg-[#83e935]"
        textColor="text-gray-900"
      />
    </div>
  );
}
