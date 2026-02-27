'use client'

import Image from 'next/image'

interface Client {
  name: string
  logo: string
  alt?: string
}

interface ClientsSectionProps {
  title: string
  subtitle: string
  moreText?: string
  clients: Client[]
}

export function ClientsSection({ title, subtitle, moreText, clients }: ClientsSectionProps) {
  // Duplicamos los clientes para crear un efecto de loop infinito
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-16 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Contenedor con scroll horizontal infinito */}
        <div className="relative">
          <div className="flex animate-scroll-horizontal">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Contenedor circular mejorado con múltiples efectos */}
                <div className="relative w-32 h-32 group">
                  {/* Efecto de pulso/resplandor de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mistri-lime-500/20 to-mistri-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>

                  {/* Contenedor principal con glassmorphism */}
                  <div className="relative w-32 h-32 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-white/30 hover:shadow-2xl hover:shadow-mistri-blue-500/30 transition-all duration-500 flex items-center justify-center p-6 hover:scale-110 hover:rotate-2 hover:-translate-y-2 group-hover:border-mistri-lime-500/50">

                    {/* Líneas decorativas que aparecen en hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-mistri-lime-500/40 transition-all duration-500"></div>
                    <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-mistri-blue-500/30 transition-all duration-700"></div>

                    {/* Gradiente sutil de fondo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400"></div>

                    {/* Contenedor del logo */}
                    <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 z-10">
                      {/* Fondo de color para logos blancos */}
                      {(client.name === "Muñoz Marchesí" || client.name === "Dala Computación") && (
                        <div className="absolute inset-0 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                      )}
                      <Image
                        src={client.logo}
                        alt={client.alt || client.name}
                        fill
                        className={`object-contain ${client.name === "SBR Repuestos" || client.name === "Espacio Wilde"
                          ? "rounded-full"
                          : ""
                          }`}
                        sizes="(max-width: 768px) 120px, 128px"
                      />
                    </div>

                    {/* Efecto de partículas/brillo */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-mistri-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-mistri-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for more clients */}
        <div className="text-center mt-8">
          <p className="text-white/80 text-sm">
            {moreText || "Y muchas más organizaciones que confían en nosotros"}
          </p>
        </div>
      </div>
    </section>
  )
}
