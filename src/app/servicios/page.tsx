"use client";

import React from "react";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
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
import {
  AnimatedSection,
  StaggeredAnimation,
} from "@/components/ui/animated-section";
import {
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen,
  Calendar,
  LucideIcon,
} from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState("formacion");

  // Manejar navegación desde enlaces del footer
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (
        hash &&
        ["formacion", "asesoramiento", "especializados"].includes(hash)
      ) {
        setActiveTab(hash);
        // Scroll suave a la sección
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else if (
        hash &&
        ["marketing", "ventas", "liderazgo", "analisis"].includes(hash)
      ) {
        // Para servicios específicos, ir a la sección especializados
        setActiveTab("especializados");
        setTimeout(() => {
          const element = document.getElementById("especializados");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // Verificar hash al cargar la página
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const services = {
    formacion: [
      {
        icon: "Users",
        title: "Formación de Mandos Medios",
        description:
          "Desarrollamos líderes efectivos que impulsen el crecimiento de tu organización.",
        features: [
          "Programas de liderazgo personalizado",
          "Mentoría y coaching ejecutivo",
          "Desarrollo de habilidades blandas",
          "Evaluación 360° y seguimiento",
          "Certificación en competencias gerenciales",
        ],
        duration: "6-12 meses",
        price: "Consultar",
      },
      {
        icon: "Target",
        title: "Capacitación y Desarrollo",
        description:
          "Potenciamos el talento de tus equipos con metodologías probadas.",
        features: [
          "Talleres especializados por área",
          "Capacitación en competencias técnicas",
          "Programas de certificación",
          "Acompañamiento continuo",
          "Medición de impacto y ROI",
        ],
        duration: "3-6 meses",
        price: "Consultar",
      },
      {
        icon: "TrendingUp",
        title: "Transformación Organizacional",
        description:
          "Reestructuramos procesos para maximizar la eficiencia y productividad.",
        features: [
          "Diagnóstico organizacional",
          "Rediseño de procesos",
          "Implementación de cambios",
          "Medición de resultados",
          "Sostenibilidad del cambio",
        ],
        duration: "6-18 meses",
        price: "Consultar",
      },
    ],
    asesoramiento: [
      {
        icon: "DollarSign",
        title: "Asesoramiento Financiero",
        description:
          "Optimizamos la gestión financiera de tu organización con estrategias probadas.",
        features: [
          "Análisis de estructura financiera",
          "Optimización de costos",
          "Planificación presupuestaria",
          "Control de gestión",
          "Indicadores financieros clave",
        ],
        duration: "3-9 meses",
        price: "Consultar",
      },
      {
        icon: "BarChart3",
        title: "Asesoramiento Impositivo",
        description:
          "Te ayudamos a cumplir con todas las obligaciones fiscales de manera eficiente.",
        features: [
          "Revisión de obligaciones fiscales",
          "Optimización tributaria",
          "Cumplimiento normativo",
          "Asesoramiento en auditorías",
          "Capacitación del equipo contable",
        ],
        duration: "Ongoing",
        price: "Consultar",
      },
      {
        icon: "Shield",
        title: "Asesoramiento en Organización Interna",
        description:
          "Estandarizamos y optimizamos todos los procesos administrativos de tu organización.",
        features: [
          "Mapeo de procesos actuales",
          "Diseño de procedimientos",
          "Implementación de controles",
          "Capacitación del personal",
          "Monitoreo y mejora continua",
        ],
        duration: "4-12 meses",
        price: "Consultar",
      },
    ],
    especializados: [
      {
        icon: "Megaphone",
        title: "Marketing Digital",
        description:
          "Potenciamos tu presencia digital con estrategias integrales de marketing.",
        features: [
          "Estrategias de contenido",
          "SEO y posicionamiento web",
          "Marketing en redes sociales",
          "Campañas publicitarias digitales",
          "Análisis de métricas y ROI",
        ],
        duration: "3-12 meses",
        price: "Consultar",
      },
      {
        icon: "TrendingUp",
        title: "Optimización de Ventas",
        description:
          "Mejoramos los procesos de ventas para maximizar los resultados comerciales.",
        features: [
          "Diagnóstico del proceso de ventas",
          "Capacitación del equipo comercial",
          "Implementación de CRM",
          "Estrategias de cierre",
          "Seguimiento y análisis de resultados",
        ],
        duration: "2-8 meses",
        price: "Consultar",
      },
      {
        icon: "Users",
        title: "Desarrollo de Liderazgo",
        description:
          "Formamos líderes capaces de inspirar y dirigir equipos de alto rendimiento.",
        features: [
          "Programas de liderazgo personalizado",
          "Coaching ejecutivo",
          "Desarrollo de habilidades directivas",
          "Gestión de equipos",
          "Evaluación 360° y seguimiento",
        ],
        duration: "6-12 meses",
        price: "Consultar",
      },
      {
        icon: "BarChart3",
        title: "Análisis de Números",
        description:
          "Transformamos datos en insights accionables para la toma de decisiones.",
        features: [
          "Análisis de KPIs empresariales",
          "Dashboards ejecutivos",
          "Reportes de gestión",
          "Análisis de tendencias",
          "Recomendaciones estratégicas",
        ],
        duration: "2-6 meses",
        price: "Consultar",
      },
    ],
  };

  const testimonials = [
    {
      name: "Emmanuel Amado",
      company: "SBR SAS",
      content:
        "Con Mistri&Co hemos transformado nuestro negocio. No solo capacitamos a nuestro equipo de ventas, sino que reorganizamos la empresa por completo. Su trabajo en marketing y el análisis de números estratégicos nos dio una claridad que no teníamos. Fue una implementación integral y los resultados lo demuestran.",
      rating: 5,
      website:
        "https://sbrepuestos.com/?fbclid=PAZXh0bgNhZW0CMTEAAaclbXScXu8RceUjjq00qm-mYUN02TEV6WQCR9UiVWoL-RWtP-iQKCpeZkc50Q_aem_Zbuodh380rtXQEgevzcWeQ",
    },
    {
      name: "Patricia Vázquez",
      company: "Vazquez Contadores Asociados",
      content:
        "Mistri&Co resolvió nuestro gran desafío: cómo vender y comercializar servicios intangibles. Nos ayudaron a acceder a más clientes con una mentalidad completamente nueva, transformando nuestra perspectiva comercial. Los resultados, además, fueron rápidos y contundentes.",
      rating: 5,
      website: null, // No hay sitio web disponible
    },
    {
      name: "Gustavo Melinik",
      company: "Muñoz Marchesí",
      content:
        "Como Gerente de Sucursal, he transformado la forma de liderar a mis equipos. Junto a Mistri&Co, combinamos metas claras, entrenamiento continuo e incentivos estratégicos. Esta fórmula no solo ha optimizado los resultados comerciales, sino que ha potenciado significativamente el desempeño y la motivación de cada vendedor.",
      rating: 5,
      website: "https://www.munozmarchesi.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Servicios Especializados"
        subtitle="Transformación organizacional y desarrollo de equipos"
        description="Ofrecemos un ecosistema completo de servicios diseñados para impulsar la transformación y el crecimiento sostenible de tu organización. Desde formación de líderes hasta asesoramiento especializado."
        ctaText="Solicitar consulta"
        ctaLink="https://wa.me/5493624649700"
        backgroundImage="/images/servicios/bg-services.jpg"
        overlayType="photo"
        secondaryButton={{
          text: "Ver casos de éxito",
          href: "#testimonios",
          icon: "CheckCircle",
        }}
      />

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Nuestros Servicios Especializados"
            description="Selecciona la categoría que mejor se adapte a las necesidades de tu organización"
          />

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 w-full mb-12 gap-1 sm:gap-2">
              <TabsTrigger 
                value="formacion" 
                className="text-xs sm:text-sm lg:text-base whitespace-nowrap w-full sm:w-auto justify-center py-2 px-3"
              >
                Formación y Desarrollo
              </TabsTrigger>
              <TabsTrigger
                value="asesoramiento"
                className="text-xs sm:text-sm lg:text-base whitespace-nowrap w-full sm:w-auto justify-center py-2 px-3"
              >
                Asesoramiento Especializado
              </TabsTrigger>
              <TabsTrigger
                value="especializados"
                className="text-xs sm:text-sm lg:text-base whitespace-nowrap w-full sm:w-auto justify-center py-2 px-3 sm:col-span-2 lg:col-span-1"
              >
                Servicios Especializados
              </TabsTrigger>
            </TabsList>

            <TabsContent value="formacion" className="space-y-8" id="formacion">
              <StaggeredAnimation
                animation="slideUp"
                staggerDelay={200}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.formacion.map((service, index) => {
                  const IconComponent = Icons[
                    service.icon as keyof typeof Icons
                  ] as LucideIcon;
                  return (
                    <div
                      key={index}
                      className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/servicio-${
                          index + 1
                        }.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {/* Fallback background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />

                      {/* Contenido alineado a la izquierda */}
                      <div className="relative z-10 h-full flex flex-col justify-start text-white p-6 pb-8">
                        <div>
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-500">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-mistri-lime-300 transition-colors duration-300">
                            {service.title}
                          </h3>

                          <p className="text-white/90 mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-2 mb-2">
                            {service.features
                              .slice(0, 3)
                              .map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-mistri-lime-400 flex-shrink-0" />
                                  <span className="text-xs text-white/90 leading-tight">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Efecto de brillo al hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  );
                })}
              </StaggeredAnimation>
            </TabsContent>

            <TabsContent
              value="asesoramiento"
              className="space-y-8"
              id="asesoramiento"
            >
              <StaggeredAnimation
                animation="slideUp"
                staggerDelay={200}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.asesoramiento.map((service, index) => {
                  const IconComponent = Icons[
                    service.icon as keyof typeof Icons
                  ] as LucideIcon;
                  return (
                    <div
                      key={index}
                      className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/asesoramiento-${
                          index + 1
                        }.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {/* Fallback background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />

                      {/* Contenido alineado a la izquierda */}
                      <div className="relative z-10 h-full flex flex-col justify-start text-white p-6 pb-8">
                        <div>
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-500">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-mistri-lime-300 transition-colors duration-300">
                            {service.title}
                          </h3>

                          <p className="text-white/90 mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-2 mb-2">
                            {service.features
                              .slice(0, 3)
                              .map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-mistri-lime-400 flex-shrink-0" />
                                  <span className="text-xs text-white/90 leading-tight">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Efecto de brillo al hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  );
                })}
              </StaggeredAnimation>
            </TabsContent>

            <TabsContent
              value="especializados"
              className="space-y-8"
              id="especializados"
            >
              <StaggeredAnimation
                animation="slideUp"
                staggerDelay={200}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {services.especializados.map((service, index) => {
                  const IconComponent = Icons[
                    service.icon as keyof typeof Icons
                  ] as LucideIcon;
                  return (
                    <div
                      key={index}
                      className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/especializado-${
                          index + 1
                        }.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {/* Fallback background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />

                      {/* Contenido alineado a la izquierda */}
                      <div className="relative z-10 h-full flex flex-col justify-start text-white p-6 pb-8">
                        <div>
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-500">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-mistri-lime-300 transition-colors duration-300">
                            {service.title}
                          </h3>

                          <p className="text-white/90 mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-2 mb-2">
                            {service.features
                              .slice(0, 3)
                              .map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-mistri-lime-400 flex-shrink-0" />
                                  <span className="text-xs text-white/90 leading-tight">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Efecto de brillo al hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  );
                })}
              </StaggeredAnimation>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* MISTRI Method Section */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <SectionHeader
            title="Método MISTRI®"
            description="Nuestra metodología probada que transforma organizaciones a través de un proceso sistemático y efectivo"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-6">
            {[
              {
                letter: "M",
                title: "Metrics",
                titleEs: "Métricas",
                description:
                  "Medimos lo importante: ventas, márgenes y desempeño. Sin números claros, cualquier estrategia es solo intuición.",
              },
              {
                letter: "I",
                title: "Information",
                titleEs: "Información",
                description:
                  "Los datos se transforman en conocimiento. Descubrimos patrones y oportunidades para decisiones inteligentes.",
              },
              {
                letter: "S",
                title: "Strategy",
                titleEs: "Estrategia",
                description:
                  "Trazamos la ruta hacia el éxito. Definimos objetivos claros y diseñamos el plan de acción más efectivo.",
              },
              {
                letter: "T",
                title: "Talent",
                titleEs: "Talento",
                description:
                  "Las personas son el motor. Impulsamos el talento de tu equipo para convertir cada plan en resultados tangibles.",
              },
              {
                letter: "R",
                title: "Results",
                titleEs: "Resultados",
                description:
                  "Medimos los logros alcanzados. Crecimiento real, procesos optimizados y objetivos cumplidos.",
              },
              {
                letter: "I",
                title: "Innovation",
                titleEs: "Innovación",
                description:
                  "El ciclo nunca se detiene. Reinventarse, adaptarse y sorprender con nuevas soluciones.",
              },
            ].map((step, index) => (
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

                {/* Título en español */}
                <h4 className="text-lg font-semibold text-mistri-blue-600 mb-4 text-center">
                  ({step.titleEs})
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

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Lo que Dicen Nuestros Clientes"
            description="Testimonios reales de organizaciones que han transformado su cultura y resultados"
          />

          <StaggeredAnimation
            animation="slideUp"
            staggerDelay={200}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => {
              const cardContent = (
                <div
                  className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/testimonial-${
                      index + 1
                    }.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Fallback background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                  <div className="absolute inset-0 bg-pattern-dots opacity-20" />

                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />

                  {/* Contenido alineado a la izquierda */}
                  <div className="relative z-10 h-full flex flex-col justify-start text-white p-6 pb-8">
                    <div>
                      {/* Estrellas */}
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-mistri-lime-400 fill-current"
                          />
                        ))}
                      </div>

                      {/* Testimonio */}
                      <blockquote className="text-white/90 mb-4 text-base italic leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </blockquote>
                    </div>

                    {/* Información del cliente */}
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-500">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-white/80 text-xs">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              );

              return testimonial.website ? (
                <Link
                  key={index}
                  href={testimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#83e935] text-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Comienza tu proceso de transformación hoy y descubre el potencial de
            tus equipos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-secondary hover:shadow-xl hover:shadow-white-400/25 text-gray-600"
              onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5 text-gray-600" />
              Solicitar Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-600 hover:bg-white hover:text-mistri-blue-500 glass-effect"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
