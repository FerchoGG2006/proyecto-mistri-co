'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { 
  FileText, 
  Calendar, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  BarChart3,
  Lightbulb,
  Zap,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export default function TerminosClient() {
  const t = useTranslations('pages.terms');

  const sections = [
    {
      id: 'aceptacion',
      title: '1. Aceptación de los Términos',
      content: 'Al acceder y utilizar los servicios de Mistri&Co, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.'
    },
    {
      id: 'servicios',
      title: '2. Descripción de Servicios',
      content: 'Mistri&Co ofrece servicios de consultoría en transformación organizacional, desarrollo de equipos, formación de líderes y capacitación empresarial. Nuestros servicios incluyen pero no se limitan a: consultoría estratégica, programas de formación, coaching ejecutivo y desarrollo organizacional.'
    },
    {
      id: 'responsabilidades',
      title: '3. Responsabilidades del Cliente',
      content: 'El cliente se compromete a: proporcionar información veraz y completa, participar activamente en los programas, cumplir con los horarios acordados, mantener la confidencialidad de la información compartida y realizar los pagos según lo acordado.'
    },
    {
      id: 'confidencialidad',
      title: '4. Confidencialidad',
      content: 'Toda la información compartida entre las partes será tratada de manera confidencial. Mistri&Co se compromete a no divulgar información sensible del cliente, y el cliente se compromete a mantener la confidencialidad de las metodologías y herramientas propietarias.'
    },
    {
      id: 'pagos',
      title: '5. Términos de Pago',
      content: 'Los pagos se realizarán según lo acordado en el contrato específico. Los precios están sujetos a cambios con previo aviso. Los pagos vencidos pueden resultar en la suspensión de servicios.'
    },
    {
      id: 'cancelaciones',
      title: '6. Cancelaciones y Reembolsos',
      content: 'Las cancelaciones deben notificarse con al menos 48 horas de anticipación. Los reembolsos se procesarán según la política específica del servicio contratado. No se otorgan reembolsos por servicios ya prestados.'
    },
    {
      id: 'limitaciones',
      title: '7. Limitaciones de Responsabilidad',
      content: 'Mistri&Co no será responsable por daños indirectos, incidentales o consecuenciales. Nuestra responsabilidad se limita al monto pagado por los servicios específicos que dieron lugar al reclamo.'
    },
    {
      id: 'modificaciones',
      title: '8. Modificaciones',
      content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.'
    }
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
                <FileText className="mr-2 h-5 w-5" />
                Descargar PDF
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <MessageSquare className="mr-2 h-5 w-5" />
                Consultar dudas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              <Calendar className="mr-2 h-4 w-4" />
              Última actualización: 15 de Enero, 2024
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              Versión 2.1
            </Badge>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={section.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Tienes preguntas sobre nuestros términos?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Nuestro equipo legal está disponible para aclarar cualquier duda sobre estos términos y condiciones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800">
                <Mail className="mr-2 h-5 w-5" />
                Contactar legal
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                <MessageSquare className="mr-2 h-5 w-5" />
                Consulta por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 bg-gray-100">
        <div className="container-custom">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Mistri&Co</strong> - Consultora Especializada en Transformación Organizacional
            </p>
            <p>
              Pellegrini 1073 Piso 2 Oficina 3, Resistencia, Chaco, Argentina | 
              <a href="mailto:contacto@mistriconsultora.com" className="text-blue-600 hover:underline ml-1">
                contacto@mistriconsultora.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}