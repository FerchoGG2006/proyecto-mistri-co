import React from "react";
import { Hero } from "@/components/hero";
import { cookies } from "next/headers";
import { contentES, contentPT } from "@/lib/content";
import { ServiciosClient } from "@/components/servicios-client";

export const revalidate = 3600; // ISR cada hora

export default async function ServiciosPage() {
  const cookieStore = await cookies();
  const language = cookieStore.get('preferredLanguage')?.value || 'ES';
  const t = language === 'ES' ? contentES : contentPT;

  const mistriMethod = t.titles.servicios.method;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t.titles.servicios.hero}
        subtitle={t.shared.home.heroSubtitle}
        description={t.descriptions.home.services}
        ctaText={language === 'ES' ? "Solicitar consulta" : "Solicitar consulta"}
        ctaLink="https://wa.me/5493624649700"
        backgroundImage="/images/servicios/bg-services.jpg"
        overlayType="photo"
        secondaryButton={{
          text: language === 'ES' ? "Ver casos de éxito" : "Ver casos de sucesso",
          href: "#testimonios",
          icon: "CheckCircle",
        }}
      />

      {/* Interactive Tabs and Testimonials (Client Side) */}
      <ServiciosClient t={t} language={language} />

      {/* MISTRI Method Section (Static/Server Side) */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gray-900 mb-4">{mistriMethod.title}</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">{mistriMethod.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-6">
            {mistriMethod.steps.map((step: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 xl:p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group cursor-pointer h-full flex flex-col"
              >
                {/* Círculo con letra */}
                <div className="w-20 h-20 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:from-mistri-blue-400 group-hover:to-mistri-blue-500 transition-all duration-200">
                  {step.letter}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-mistri-blue-600 transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Título local */}
                <h4 className="text-lg font-semibold text-mistri-blue-600 mb-4 text-center">
                  ({step.titleLocal})
                </h4>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed text-center text-sm xl:text-base flex-grow">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
