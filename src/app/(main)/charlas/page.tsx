import { Hero } from '@/components/hero'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Calendar,
  ArrowRight,
  Clock,
  User,
  MapPin,
  Play,
  Download,
  Star,
  Users,
  Award
} from 'lucide-react'
import Link from 'next/link'
import prisma from '@/lib/db'
import { cookies } from 'next/headers'
import { contentES, contentPT } from '@/lib/content'

export const revalidate = 60; // ISR para carga instantánea

export default async function CharlasPage() {
  const cookieStore = await cookies();
  const language = cookieStore.get('preferredLanguage')?.value || 'ES';
  const t = language === 'ES' ? contentES : contentPT;

  // Fetch talks directamente desde la DB en el servidor
  const talks = await prisma.talk.findMany({
    orderBy: { date: 'desc' }
  });

  // Clasificar charlas
  const upcomingTalks = talks.filter(talk => talk.type === 'Próxima' || talk.type === 'Charla')
  const pastTalks = talks.filter(talk => talk.type === 'Finalizada' || talk.type === 'Conferencia')

  const speakers = [
    {
      name: "Fernando Mistri",
      title: "Director Ejecutivo",
      company: "Mistri&Co",
      bio: "Especialista en transformación organizacional y desarrollo de equipos de alto rendimiento.",
      talks: talks.length
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Charlas Inspiradoras"
        subtitle="Conocimiento y experiencia de expertos reconocidos"
        description="Únete a nuestras charlas especializadas donde expertos comparten insights valiosos sobre liderazgo, innovación y transformación organizacional. Eventos gratuitos diseñados para inspirar y educar a líderes modernos."
        ctaText="Ver próximas charlas"
        ctaLink="#proximas"
        secondaryButton={{
          text: "Suscribirse",
          href: "/contacto",
          icon: "Calendar"
        }}
      />

      {/* Stats Section (Static for now, could be derived from DB) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-medium-gray">Charlas Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-medium-gray">Asistentes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-medium-gray">Rating Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-medium-gray">Expertos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Talks Tabs */}
      <section id="proximas" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Nuestras Charlas
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Selecciona entre nuestras próximas charlas o revisa el contenido de eventos anteriores
            </p>
          </div>

          <Tabs defaultValue="proximas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="proximas" className="text-sm lg:text-base">
                Próximas Charlas
              </TabsTrigger>
              <TabsTrigger value="anteriores" className="text-sm lg:text-base">
                Charlas Anteriores
              </TabsTrigger>
            </TabsList>

            <TabsContent value="proximas" className="space-y-8">
              {upcomingTalks.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingTalks.map((talk) => (
                    <Card key={talk.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 rounded-t-lg flex items-center justify-center">
                          <Play className="h-16 w-16 text-white opacity-80" />
                        </div>
                        <Badge className="absolute top-4 left-4 bg-secondary text-dark">
                          {talk.type}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                          {talk.title}
                        </CardTitle>
                        <CardDescription className="text-medium-gray line-clamp-2">
                          {talk.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-2 text-sm text-dark">
                            <User className="h-4 w-4" />
                            <span>Staff Mistri&Co</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-dark">
                            <Calendar className="h-4 w-4" />
                            <span>{talk.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-dark">
                            <MapPin className="h-4 w-4" />
                            <span>{talk.location}</span>
                          </div>
                        </div>

                        <Button className="w-full" variant="outline" asChild>
                          <Link href={talk.url || '#'}>
                            Saber más
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-medium-gray">No hay charlas programadas próximamente.</div>
              )}
            </TabsContent>

            <TabsContent value="anteriores" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastTalks.length > 0 ? pastTalks.map((talk) => (
                  <Card key={talk.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-medium-gray to-dark rounded-t-lg flex items-center justify-center">
                        <Play className="h-16 w-16 text-white opacity-80" />
                      </div>
                      <Badge className="absolute top-4 left-4 bg-dark text-white">
                        Finalizada
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                        {talk.title}
                      </CardTitle>
                      <CardDescription className="text-medium-gray">
                        {talk.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <User className="h-4 w-4" />
                          <span>{talk.speaker || 'Staff Mistri&Co'}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(talk.date).toLocaleDateString(language === 'ES' ? 'es-ES' : 'pt-BR')}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Clock className="h-4 w-4" />
                          <span>{talk.duration || '60 min'}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Users className="h-4 w-4" />
                          <span>{talk.attendees || '0'} asistentes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span>{talk.rating || '5.0'}/5.0</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1" variant="outline" size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Ver Video
                        </Button>
                        <Button className="flex-1" variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Slides
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="text-center py-12 text-medium-gray">No hay charlas anteriores registradas.</div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nuestros Expertos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Conoce a Nuestros Speakers
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Profesionales reconocidos que comparten su experiencia y conocimiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-medium-gray text-sm mb-4">
                    {speaker.company}
                  </p>
                  <p className="text-medium-gray text-sm mb-4">
                    {speaker.bio}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-medium-gray">
                    <Award className="h-4 w-4" />
                    <span>{speaker.talks} charlas</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#83e935] text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Quieres ser Notificado de Nuestras Próximas Charlas?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Suscríbete a nuestro newsletter y recibe información sobre eventos exclusivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-secondary hover:shadow-xl hover:shadow-white-400/25 text-gray-600">
              <Calendar className="mr-2 h-5 w-5 text-gray-600" />
              Suscribirse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-gray-600 hover:bg-white hover:text-mistri-blue-500 glass-effect">
              Ver Calendario Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
