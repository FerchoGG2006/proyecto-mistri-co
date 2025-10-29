'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import { 
  Users, 
  Heart, 
  Target, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  BarChart3,
  Lightbulb,
  Zap,
  Shield,
  BookOpen,
  MessageSquare,
  Calendar,
  User,
  Building2
} from 'lucide-react';

export default function TrabajaConNosotrosClient() {
  const t = useTranslations('pages.workWithUs');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    skills: '',
    motivation: '',
    availability: '',
    salary: '',
    location: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        skills: '',
        motivation: '',
        availability: '',
        salary: '',
        location: '',
        newsletter: false
      });
    }, 3000);
  };

  const positions = [
    { value: 'consultor', label: 'Consultor Senior' },
    { value: 'coach', label: 'Coach Ejecutivo' },
    { value: 'facilitador', label: 'Facilitador de Talleres' },
    { value: 'analista', label: 'Analista de Procesos' },
    { value: 'coordinador', label: 'Coordinador de Proyectos' },
    { value: 'otro', label: 'Otro' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Cultura de Crecimiento',
      description: 'Ambiente que fomenta el desarrollo personal y profesional continuo.'
    },
    {
      icon: Target,
      title: 'Impacto Real',
      description: 'Trabaja en proyectos que transforman organizaciones y mejoran vidas.'
    },
    {
      icon: Users,
      title: 'Equipo Colaborativo',
      description: 'Únete a un equipo de profesionales apasionados y comprometidos.'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Profesional',
      description: 'Oportunidades de desarrollo y crecimiento en tu carrera.'
    }
  ];

  const requirements = [
    'Experiencia en desarrollo organizacional o recursos humanos',
    'Habilidades de comunicación y facilitación',
    'Mentalidad de crecimiento y aprendizaje continuo',
    'Capacidad de trabajo en equipo y colaboración',
    'Compromiso con la excelencia y resultados'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Users className="mr-2 h-5 w-5" />
                Ver posiciones abiertas
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <MessageSquare className="mr-2 h-5 w-5" />
                Conoce nuestro equipo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué trabajar con nosotros?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Únete a un equipo que está transformando la manera en que las organizaciones desarrollan a sus líderes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Qué buscamos?
              </h2>
              <p className="text-gray-600 text-lg">
                Profesionales apasionados por el desarrollo organizacional y el crecimiento de las personas.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Requisitos principales:</h3>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Únete a nuestro equipo
              </h2>
              <p className="text-gray-600 text-lg">
                Completa el formulario y nos pondremos en contacto contigo para conversar sobre oportunidades.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-green-800 font-medium">
                      ¡Aplicación enviada correctamente! Te contactaremos pronto.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+54 9 362 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Posición de interés *</Label>
                      <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una posición" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem key={position.value} value={position.value}>
                              {position.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Experiencia y Habilidades */}
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experiencia profesional *</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Describe tu experiencia profesional relevante..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Habilidades y competencias *</Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="Menciona tus habilidades más relevantes..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">¿Por qué quieres trabajar con nosotros? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Cuéntanos qué te motiva a unirte a nuestro equipo..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="availability">Disponibilidad</Label>
                      <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inmediata">Inmediata</SelectItem>
                          <SelectItem value="1-mes">En 1 mes</SelectItem>
                          <SelectItem value="2-meses">En 2 meses</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Expectativa salarial</Label>
                      <Input
                        id="salary"
                        value={formData.salary}
                        onChange={(e) => handleInputChange('salary', e.target.value)}
                        placeholder="Ej: $500.000 - $800.000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Ciudad, Provincia"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      Quiero recibir información sobre nuevas oportunidades laborales
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Users className="mr-2 h-5 w-5" />
                        Enviar aplicación
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes dudas sobre el proceso?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta sobre nuestras oportunidades laborales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Phone className="mr-2 h-5 w-5" />
              Llamar ahora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <MessageSquare className="mr-2 h-5 w-5" />
              Consulta por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
