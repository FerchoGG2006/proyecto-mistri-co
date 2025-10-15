'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, User, Building, MessageSquare, Calendar } from 'lucide-react'
import { toast } from 'sonner'

interface AcademiaFormProps {
  programa?: string
}

export function AcademiaForm({ programa }: AcademiaFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    programa: programa || '',
    mensaje: '',
    interes: ''
  })

  const programas = [
    { value: 'cursos', label: 'Cursos Intensivos' },
    { value: 'talleres', label: 'Talleres Especializados' },
    { value: 'charlas', label: 'Charlas Inspiradoras' },
    { value: 'todos', label: 'Todos los programas' }
  ]

  const intereses = [
    'Liderazgo y gestión de equipos',
    'Toma de decisiones estratégicas',
    'Comunicación efectiva',
    'Transformación organizacional',
    'Desarrollo personal',
    'Innovación y creatividad',
    'Otro'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simular envío del formulario
    toast.success('¡Gracias por tu interés! Te contactaremos pronto.')
    
    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      programa: programa || '',
      mensaje: '',
      interes: ''
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Solicita Información sobre Academia Mistri
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Completa el formulario y nos pondremos en contacto contigo para brindarte más detalles sobre nuestros programas de formación.
          </p>
          {programa && (
            <Badge className="mt-4 bg-primary/10 text-primary">
              Programa: {programas.find(p => p.value === programa)?.label || programa}
            </Badge>
          )}
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Nombre completo *
                </label>
                <Input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleChange('nombre', e.target.value)}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Teléfono
                </label>
                <Input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  placeholder="+54 9 11 1234-5678"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Empresa
                </label>
                <Input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => handleChange('empresa', e.target.value)}
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Programa de interés *
              </label>
              <Select value={formData.programa} onValueChange={(value) => handleChange('programa', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un programa" />
                </SelectTrigger>
                <SelectContent>
                  {programas.map((programa) => (
                    <SelectItem key={programa.value} value={programa.value}>
                      {programa.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Área de interés específica
              </label>
              <Select value={formData.interes} onValueChange={(value) => handleChange('interes', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu área de interés" />
                </SelectTrigger>
                <SelectContent>
                  {intereses.map((interes) => (
                    <SelectItem key={interes} value={interes}>
                      {interes}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Mensaje adicional
              </label>
              <Textarea
                value={formData.mensaje}
                onChange={(e) => handleChange('mensaje', e.target.value)}
                placeholder="Cuéntanos más sobre tus objetivos de formación o cualquier pregunta específica..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full text-gray-600" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Solicitar Información
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
