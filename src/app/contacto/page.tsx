'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AcademiaForm } from '@/components/academia-form'
import ContactFormEnhanced from '@/components/contact-form-enhanced'
import { 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Send,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  LucideIcon
} from 'lucide-react'
import * as Icons from 'lucide-react'

export default function ContactoPage() {
  const isAcademiaForm = false
  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Escríbenos para cualquier consulta',
      value: 'mistriconsultora@gmail.com',
      action: 'Enviar email'
    },
    {
      icon: 'Phone',
      title: 'Teléfono',
      description: 'Llámanos para una consulta inmediata',
      value: '+54 9 362 464-9700',
      action: 'Llamar ahora'
    },
    {
      icon: 'MapPin',
      title: 'Ubicación',
      description: 'Estamos presentes en múltiples países',
      value: 'ARG - BRA - PY',
      action: 'Ver ubicaciones'
    },
    {
      icon: 'Calendar',
      title: 'Agenda una reunión',
      description: 'Reserva tu consulta gratuita',
      value: '30 minutos',
      action: 'Agendar ahora'
    }
  ]

  const services = [
    {
      icon: 'Users',
      title: 'Formación de Mandos Medios',
      description: 'Desarrollamos líderes efectivos para tu organización'
    },
    {
      icon: 'Target',
      title: 'Capacitación y Desarrollo',
      description: 'Potenciamos el talento de tus equipos'
    },
    {
      icon: 'TrendingUp',
      title: 'Transformación Organizacional',
      description: 'Reestructuramos procesos para maximizar eficiencia'
    },
    {
      icon: 'Lightbulb',
      title: 'Asesoramiento Especializado',
      description: 'Consultoría en finanzas, procesos y desarrollo'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Contacto
          </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              ¿Listo para Transformar
              <span className="block text-secondary">
                tu Organización?
              </span>
          </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a 
              desarrollar líderes efectivos, optimizar procesos y alcanzar tus objetivos estratégicos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = Icons[info.icon as keyof typeof Icons] as LucideIcon
              return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-mistri-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-mistri-blue-600" />
                    </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{info.description}</p>
                  <p className="text-gray-900 font-medium mb-4">{info.value}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      if (info.title === 'Teléfono' || info.title === 'Agenda una reunión') {
                        window.open('https://wa.me/5493624649700', '_blank')
                      } else if (info.title === 'Email') {
                        window.open('mailto:mistriconsultora@gmail.com', '_blank')
                      }
                    }}
                  >
                    {info.action}
                  </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
                    <div>
              {isAcademiaForm ? (
                <AcademiaForm programa="" />
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-dark mb-4">
                      Envíanos un Mensaje
                    </h2>
                    <p className="text-medium-gray">
                      Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                    </p>
                  </div>

                  <ContactFormEnhanced />
                </>
              )}
                    </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl font-bold text-dark mb-6">
                  ¿Por qué elegir Mistri&Co?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark">Experiencia Comprobada</h4>
                      <p className="text-sm text-medium-gray">
                        Más de 10 años transformando organizaciones en Argentina y la región.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark">Equipo Interdisciplinario</h4>
                      <p className="text-sm text-medium-gray">
                        Profesionales especializados en cada área de tu organización.
                      </p>
                    </div>
                    </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark">Resultados Medibles</h4>
                      <p className="text-sm text-medium-gray">
                        Metodologías probadas que generan impacto real y sostenible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark">Acompañamiento Continuo</h4>
                      <p className="text-sm text-medium-gray">
                        Soporte permanente para el crecimiento sostenible de tu organización.
                      </p>
                    </div>
                    </div>
                    </div>
                  </div>

              {/* Services Overview */}
                  <div>
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Nuestros Servicios
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => {
                    const IconComponent = Icons[service.icon as keyof typeof Icons] as LucideIcon
                    return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-mistri-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-4 w-4 text-mistri-blue-600" />
                  </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                            <p className="text-xs text-gray-600">{service.description}</p>
                  </div>
                  </div>
                </CardContent>
              </Card>
                    )
                  })}
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                  </div>
                    <div>
                      <h4 className="font-semibold text-dark">Respuesta Rápida</h4>
                      <p className="text-sm text-medium-gray">Te contactamos en menos de 24 horas</p>
                    </div>
                  </div>
                  <p className="text-sm text-medium-gray">
                    Nuestro equipo revisa cada consulta personalmente y te brinda 
                    una respuesta detallada con las mejores opciones para tu organización.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#83e935] text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Prefieres una Consulta Inmediata?
            </h2>
          <p className="text-xl text-gray-600 mb-8">
            Llámanos ahora y habla directamente con uno de nuestros especialistas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar Ahora
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}