export default function TestStylesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-mistri-blue-500 mb-8">
          Test de Estilos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Tarjeta 1
            </h2>
            <p className="text-gray-600">
              Esta es una tarjeta de prueba para verificar que los estilos se están aplicando correctamente.
            </p>
          </div>
          
          <div className="bg-mistri-blue-50 p-6 rounded-lg shadow-lg border border-mistri-blue-200">
            <h2 className="text-xl font-semibold text-mistri-blue-900 mb-4">
              Tarjeta 2
            </h2>
            <p className="text-mistri-blue-700">
              Tarjeta con colores Mistri&Co
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-900 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-4">
              Tarjeta 3
            </h2>
            <p className="text-white/90">
              Tarjeta con gradiente
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <button className="btn-primary">
            Botón Primario
          </button>
          
          <button className="btn-secondary">
            Botón Secundario
          </button>
          
          <button className="btn-outline">
            Botón Outline
          </button>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Verificación de Estilos
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Tailwind CSS cargado</li>
            <li>✅ Colores personalizados funcionando</li>
            <li>✅ Componentes UI funcionando</li>
            <li>✅ Gradientes aplicados</li>
            <li>✅ Responsive design activo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
