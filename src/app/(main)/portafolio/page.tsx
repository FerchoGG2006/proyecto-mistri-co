'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    // Simulate form submission
    toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "mistriconsultora@gmail.com",
      subtitle: "Respuesta en 24 horas"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+54 9 362 464-9700",
      subtitle: "Lun - Vie, 8:00 AM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "ARG - BRA - PY",
      subtitle: "Oficina principal"
    },
    {
      icon: MessageSquare,
      title: "Chat en Vivo",
      details: "Disponible ahora",
      subtitle: "Respuesta inmediata"
    }
  ];

  const services = [
    "Desarrollo de Software",
    "Consultoría Tecnológica",
    "Consultoría Empresarial",
    "Cloud Computing",
    "Análisis de Datos",
    "Ciberseguridad",
    "Aplicaciones Móviles",
    "Marketing Digital",
    "Otro"
  ];

  const officeHours = [
    { day: "Lunes - Viernes", hours: "8:00 AM - 6:00 PM" },
    { day: "Sábados", hours: "9:00 AM - 1:00 PM" },
    { day: "Domingos", hours: "Cerrado" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Conversemos sobre tu
            <span className="block text-lime-400">Próximo Proyecto</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a hacer realidad tus ideas. Contáctanos y descubre 
            cómo podemos transformar tu visión en soluciones tecnológicas innovadoras.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-medium">{info.details}</p>
                    <p className="text-sm text-gray-600 mt-1">{info.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Servicio de Interés *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Asunto de tu consulta"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Campos requeridos. Responderemos en un máximo de 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="h-5 w-5 mr-2" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Emergencias:</strong> Para soporte urgente fuera de horario, 
                      contáctanos por email y responderemos lo antes posible.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">¿Necesitas una Respuesta Rápida?</CardTitle>
                  <CardDescription className="text-blue-100">
                    Para consultas urgentes o cotizaciones express
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-lime-400 text-gray-900 hover:bg-lime-300"
                      onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp Directo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open('https://wa.me/5493624649700', '_blank')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Mapa de Ubicación</p>
                      <p className="text-sm">ARG - BRA - PY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-gray-900 rounded-full border-white/30 shadow-md">❓ Preguntas Frecuentes</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Respuestas a tus Dudas Más Comunes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Cuánto tiempo toma un proyecto típico?</h3>
              <p className="text-gray-600">Los proyectos varían entre 2-12 semanas dependiendo de la complejidad y alcance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Ofrecen soporte post-lanzamiento?</h3>
              <p className="text-gray-600">Sí, incluimos 3 meses de soporte gratuito y planes de mantenimiento extendido.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Trabajan con startups?</h3>
              <p className="text-gray-600">Absolutamente. Tenemos paquetes especiales y precios flexibles para startups.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Hacen proyectos internacionales?</h3>
              <p className="text-gray-600">Sí, trabajamos con clientes en toda Latinoamérica y realizamos proyectos remotos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}