'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    expectedSalary: '',
    availability: '',
    message: '',
    resume: null as File | null
  });

  const availablePositions = [
    "Capacitador en Recursos Humanos",
    "Capacitador en Ventas",
    "Capacitador en Marketing",
    "Capacitador en Administración de Empresas",
    "Capacitador en Inteligencia Artificial",
    "Capacitador en Finanzas"
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationData.name || !applicationData.email || !applicationData.position) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    toast.success('¡Aplicación enviada exitosamente! Te contactaremos pronto.');
    
    // Reset form
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      expectedSalary: '',
      availability: '',
      message: '',
      resume: null
    });
    setSelectedPosition('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }));
      toast.success(`CV cargado: ${file.name}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            🚀 Careers
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Construye tu Futuro
            <span className="block text-lime-400">con Nosotros</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Únete a nuestro equipo de capacitadores expertos y ayuda a transformar el retail. 
            Comparte tu conocimiento y forma parte de la revolución en la industria.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">📝 Aplicación</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aplica a una Posición
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y adjunta tu CV para ser considerado.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      value={applicationData.name}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+507 0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Posición de Interés *
                    </label>
                    <Select 
                      value={selectedPosition || applicationData.position} 
                      onValueChange={(value) => {
                        setApplicationData(prev => ({ ...prev, position: value }));
                        setSelectedPosition(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una posición" />
                      </SelectTrigger>
                      <SelectContent>
                        {availablePositions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Años de Experiencia
                    </label>
                    <Select 
                      value={applicationData.experience} 
                      onValueChange={(value) => setApplicationData(prev => ({ ...prev, experience: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu experiencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 años</SelectItem>
                        <SelectItem value="2-3">2-3 años</SelectItem>
                        <SelectItem value="4-5">4-5 años</SelectItem>
                        <SelectItem value="6-10">6-10 años</SelectItem>
                        <SelectItem value="10+">Más de 10 años</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Disponibilidad
                    </label>
                    <Select 
                      value={applicationData.availability} 
                      onValueChange={(value) => setApplicationData(prev => ({ ...prev, availability: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="¿Cuándo podrías empezar?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inmediata">Inmediata</SelectItem>
                        <SelectItem value="2-semanas">En 2 semanas</SelectItem>
                        <SelectItem value="1-mes">En 1 mes</SelectItem>
                        <SelectItem value="negociable">Negociable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">
                        {applicationData.resume ? applicationData.resume.name : "Haz clic para subir tu CV"}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">PDF, DOC, DOCX (máx. 5MB)</p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carta de Presentación
                  </label>
                  <Textarea
                    value={applicationData.message}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Cuéntanos por qué eres el candidato ideal para esta posición..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Aplicación
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Campos requeridos. Revisaremos tu aplicación y te contactaremos en un máximo de 5 días hábiles.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-lime-400 to-green-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Tienes Experiencia en Capacitación?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Únete a nuestro equipo de capacitadores expertos y ayuda a transformar el retail con tu conocimiento.
          </p>
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-3">
            Aplicar Ahora
          </Button>
        </div>
      </section>
    </div>
  );
}