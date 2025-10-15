import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Mistri&Co',
  description: 'Términos y condiciones de uso de los servicios de Mistri&Co',
}

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Información General
            </h2>
            <p className="text-gray-600 mb-6">
              Estos términos y condiciones rigen el uso de los servicios ofrecidos por Mistri&Co, 
              consultora especializada en transformación organizacional, desarrollo de equipos y 
              formación de mandos medios.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Servicios Ofrecidos
            </h2>
            <p className="text-gray-600 mb-6">
              Mistri&Co ofrece servicios de consultoría, formación, desarrollo organizacional 
              y asesoramiento especializado para empresas y organizaciones.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Contacto
            </h2>
            <p className="text-gray-600 mb-6">
              Para más información sobre nuestros servicios, contáctanos a través de:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Teléfono: +54 9 362 464-9700</li>
              <li>Email: mistriconsultora@gmail.com</li>
              <li>Ubicación: Argentina, Brasil, Paraguay</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Modificaciones
            </h2>
            <p className="text-gray-600 mb-6">
              Mistri&Co se reserva el derecho de modificar estos términos y condiciones 
              en cualquier momento. Las modificaciones entrarán en vigor inmediatamente 
              después de su publicación.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
