'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormField, FormProgress } from '@/components/ui/form-field'
import { customToast } from '@/components/ui/custom-toast'
import { ArrowRight, Send } from 'lucide-react'

interface ContactFormData {
  nombre: string
  apellido: string
  email: string
  telefono: string
  empresa: string
  servicio: string
  mensaje: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  })

  const [completedFields, setCompletedFields] = useState(0)

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Calcular campos completados
    const completed = Object.values({ ...formData, [field]: value }).filter(
      value => value.trim() !== ''
    ).length
    setCompletedFields(completed)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar campos requeridos
    const requiredFields = ['nombre', 'apellido', 'email', 'servicio', 'mensaje']
    const missingFields = requiredFields.filter(field => !formData[field as keyof ContactFormData].trim())
    
    if (missingFields.length > 0) {
      customToast.error("Por favor completa todos los campos requeridos", {
        description: `Faltan: ${missingFields.join(', ')}`
      })
      return
    }

    // Simular envío
    customToast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('Form data:', formData)
          resolve('success')
        }, 2000)
      }),
      {
        loading: "Enviando mensaje...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Inténtalo de nuevo."
      }
    )
  }

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormProgress totalFields={7} completedFields={completedFields} />
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={(value) => updateField('nombre', value)}
              validation={{
                required: true,
                minLength: 2,
                maxLength: 50
              }}
            />
            <FormField
              label="Apellido"
              name="apellido"
              type="text"
              placeholder="Tu apellido"
              value={formData.apellido}
              onChange={(value) => updateField('apellido', value)}
              validation={{
                required: true,
                minLength: 2,
                maxLength: 50
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              validation={{
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              }}
            />
            <FormField
              label="Teléfono"
              name="telefono"
              type="tel"
              placeholder="+54 9 11 1234-5678"
              value={formData.telefono}
              onChange={(value) => updateField('telefono', value)}
              validation={{
                pattern: /^[\+]?[0-9\s\-\(\)]+$/
              }}
            />
          </div>

          <FormField
            label="Empresa"
            name="empresa"
            type="text"
            placeholder="Nombre de tu empresa"
            value={formData.empresa}
            onChange={(value) => updateField('empresa', value)}
            validation={{
              maxLength: 100
            }}
          />

          <FormField
            label="Servicio de Interés"
            name="servicio"
            type="select"
            placeholder="Selecciona un servicio"
            value={formData.servicio}
            onChange={(value) => updateField('servicio', value)}
            validation={{
              required: true
            }}
            options={[
              { value: "formacion", label: "Formación de Mandos Medios" },
              { value: "capacitacion", label: "Capacitación y Desarrollo" },
              { value: "transformacion", label: "Transformación Organizacional" },
              { value: "asesoramiento", label: "Asesoramiento Especializado" },
              { value: "academia", label: "Academia Mistri" },
              { value: "otro", label: "Otro" }
            ]}
          />

          <FormField
            label="Mensaje"
            name="mensaje"
            type="textarea"
            placeholder="Cuéntanos sobre tu proyecto o consulta..."
            value={formData.mensaje}
            onChange={(value) => updateField('mensaje', value)}
            validation={{
              required: true,
              minLength: 10,
              maxLength: 1000
            }}
          />

          <Button 
            type="submit" 
            className="w-full btn-primary"
            disabled={completedFields < 5}
          >
            <Send className="mr-2 h-5 w-5" />
            Enviar Mensaje
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
