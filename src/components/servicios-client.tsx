'use client';

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaggeredAnimation } from "@/components/ui/animated-section";
import * as Icons from "lucide-react";
import { LucideIcon, CheckCircle, Star, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

interface ServiciosClientProps {
    t: any;
    language: string;
}

export function ServiciosClient({ t, language }: ServiciosClientProps) {
    const [activeTab, setActiveTab] = useState("formacion");

    const services = t.titles.servicios.detailedServices;

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (
                hash &&
                ["formacion", "asesoramiento", "especializados"].includes(hash)
            ) {
                setActiveTab(hash);
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
                setActiveTab("especializados");
                setTimeout(() => {
                    const element = document.getElementById("especializados");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }, 100);
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const testimonials = language === 'ES' ? [
        {
            name: "Emmanuel Amado",
            company: "SBR SAS",
            content: "Con Mistri&Co hemos transformado nuestro negocio. No solo capacitamos a nuestro equipo de ventas, sino que reorganizamos la empresa por completo. Su trabajo en marketing y el análisis de números estratégicos nos dio una claridad que no teníamos. Fue una implementación integral y los resultados lo demuestran.",
            rating: 5,
            website: "https://sbrepuestos.com/?fbclid=PAZXh0bgNhZW0CMTEAAaclbXScXu8RceUjjq00qm-mYUN02TEV6WQCR9UiVWoL-RWtP-iQKCpeZkc50Q_aem_Zbuodh380rtXQEgevzcWeQ",
        },
        {
            name: "Patricia Vázquez",
            company: "Vazquez Contadores Asociados",
            content: "Mistri&Co resolvió nuestro gran desafío: cómo vender y comercializar servicios intangibles. Nos ayudaron a acceder a más clientes con una mentalidad completamente nueva, transformando nuestra perspectiva comercial. Los resultados, además, fueron rápidos y contundentes.",
            rating: 5,
            website: null,
        },
        {
            name: "Gustavo Melinik",
            company: "Muñoz Marchesí",
            content: "Como Gerente de Sucursal, he transformado la forma de liderar a mis equipos. Junto a Mistri&Co, combinamos metas claras, entrenamiento continuo e incentivos estratégicos. Esta fórmula no solo ha optimizado los resultados comerciales, sino que ha potenciado significativamente el desempeño y la motivación de cada vendedor.",
            rating: 5,
            website: "https://www.munozmarchesi.com",
        },
    ] : [
        {
            name: "Emmanuel Amado",
            company: "SBR SAS",
            content: "Com a Mistri&Co transformamos nosso negócio. Não apenas treinamos nossa equipe de vendas, mas reorganizamos a empresa por completo. Seu trabalho em marketing e análise de números estratégicos nos deu uma clareza que não tínhamos. Foi uma implementação integral e os resultados demonstram isso.",
            rating: 5,
            website: "https://sbrepuestos.com",
        },
        {
            name: "Patricia Vázquez",
            company: "Vazquez Contadores Asociados",
            content: "Mistri&Co resolveu nosso grande desafio: como vender e comercializar serviços intangíveis. Eles nos ajudaram a acessar mais clientes com uma mentalidad completamente nova, transformando nossa perspectiva comercial. Os resultados, aliás, foram rápidos e contundentes.",
            rating: 5,
            website: null,
        },
        {
            name: "Gustavo Melinik",
            company: "Muñoz Marchesí",
            content: "Como Gerente de Filial, transformei a forma de liderar minhas equipes. Junto à Mistri&Co, combinamos metas claras, treinamento contínuo e incentivos estratégicos. Esta fórmula não apenas otimizou os resultados comerciais, mas potencializou significativamente o desempenho e a motivação de cada vendedor.",
            rating: 5,
            website: "https://www.munozmarchesi.com",
        },
    ];

    return (
        <>
            {/* Services Tabs */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        title={t.titles.servicios.categories.especializados}
                        description={language === 'ES' ? "Selecciona la categoría que mejor se adapte a las necesidades de tu organización" : "Selecione a categoria que melhor se adapte às necessidades de sua organização"}
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
                                {t.titles.servicios.categories.formacion}
                            </TabsTrigger>
                            <TabsTrigger
                                value="asesoramiento"
                                className="text-xs sm:text-sm lg:text-base whitespace-nowrap w-full sm:w-auto justify-center py-2 px-3"
                            >
                                {t.titles.servicios.categories.asesoramiento}
                            </TabsTrigger>
                            <TabsTrigger
                                value="especializados"
                                className="text-xs sm:text-sm lg:text-base whitespace-nowrap w-full sm:w-auto justify-center py-2 px-3 sm:col-span-2 lg:col-span-1"
                            >
                                {t.titles.servicios.categories.especializados}
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="formacion" className="space-y-8" id="formacion">
                            <StaggeredAnimation
                                animation="slideUp"
                                staggerDelay={200}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {services.formacion.map((service: any, index: number) => {
                                    const IconComponent = Icons[
                                        service.icon as keyof typeof Icons
                                    ] as LucideIcon;
                                    return (
                                        <div
                                            key={index}
                                            className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/servicio-${index + 1
                                                    }.jpg')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                                            <div className="absolute inset-0 bg-pattern-dots opacity-20" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />
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
                                                            .map((feature: string, featureIndex: number) => (
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
                                {services.asesoramiento.map((service: any, index: number) => {
                                    const IconComponent = Icons[
                                        service.icon as keyof typeof Icons
                                    ] as LucideIcon;
                                    return (
                                        <div
                                            key={index}
                                            className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/asesoramiento-${index + 1
                                                    }.jpg')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                                            <div className="absolute inset-0 bg-pattern-dots opacity-20" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />
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
                                                            .map((feature: string, featureIndex: number) => (
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
                                {services.especializados.map((service: any, index: number) => {
                                    const IconComponent = Icons[
                                        service.icon as keyof typeof Icons
                                    ] as LucideIcon;
                                    return (
                                        <div
                                            key={index}
                                            className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/especializado-${index + 1
                                                    }.svg')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                                            <div className="absolute inset-0 bg-pattern-dots opacity-20" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />
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
                                                            .map((feature: string, featureIndex: number) => (
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
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                        </div>
                                    );
                                })}
                            </StaggeredAnimation>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonios" className="py-20 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        title={t.titles.home.testimonials}
                        description={language === 'ES' ? "Testimonios reales de organizaciones que han transformado su cultura y resultados" : "Depoimentos reais de organizações que transformaram sua cultura e resultados"}
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
                                        backgroundImage: `linear-gradient(135deg, rgba(33, 150, 243, 0.8) 0%, rgba(13, 71, 161, 0.9) 100%), url('/images/servicios/testimonial-${index + 1
                                            }.svg')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 opacity-90" />
                                    <div className="absolute inset-0 bg-pattern-dots opacity-20" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500/80 to-mistri-blue-900/90 group-hover:from-mistri-blue-400/90 group-hover:to-mistri-blue-800/95 transition-all duration-500" />
                                    <div className="relative z-10 h-full flex flex-col justify-start text-white p-6 pb-8">
                                        <div>
                                            <div className="flex mb-3">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-4 w-4 text-mistri-lime-400 fill-current"
                                                    />
                                                ))}
                                            </div>
                                            <blockquote className="text-white/90 mb-4 text-base italic leading-relaxed">
                                                &quot;{testimonial.content}&quot;
                                            </blockquote>
                                        </div>
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
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                </div>
                            );

                            return testimonial.website ? (
                                <a
                                    key={index}
                                    href={testimonial.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    {cardContent}
                                </a>
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
                        {t.titles.home.cta}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t.descriptions.home.cta}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="btn-secondary hover:shadow-xl hover:shadow-white-400/25 text-gray-600"
                            onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
                        >
                            <Calendar className="mr-2 h-5 w-5 text-gray-600" />
                            {language === 'ES' ? "Solicitar Consulta Gratuita" : "Solicitar Consulta Gratuita"}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-gray-600 hover:bg-white hover:text-mistri-blue-500 glass-effect"
                        >
                            {language === 'ES' ? "Ver Casos de Éxito" : "Ver Casos de Sucesso"}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
