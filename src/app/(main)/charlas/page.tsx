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
  Target,
  TrendingUp,
  Lightbulb,
  Award,
  BookOpen,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Heart,
  Brain,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'

export default function CharlasPage() {
  const upcomingTalks = [
    {
      id: 1,
      title: "El Futuro del Trabajo: Tendencias 2024",
      speaker: "Dr. María González",
      date: "2024-02-15",
      time: "18:00",
      location: "Auditorio Principal - Buenos Aires",
      description: "Exploramos las tendencias emergentes en el mundo laboral y cómo prepararse para los cambios venideros.",
      topics: ["Trabajo remoto", "IA y automatización", "Nuevas competencias", "Cultura organizacional"],
      duration: "60 minutos",
      capacity: 150,
      registered: 89,
      price: "Gratuito"
    },
    {
      id: 2,
      title: "Liderazgo en la Era Digital",
      speaker: "Carlos Mendoza",
      date: "2024-02-22",
      time: "19:00",
      location: "Centro de Convenciones - Córdoba",
      description: "Cómo adaptar el liderazgo tradicional a los desafíos del mundo digital y la transformación tecnológica.",
      topics: ["Liderazgo digital", "Gestión de equipos remotos", "Transformación digital", "Nuevas competencias"],
      duration: "75 minutos",
      capacity: 200,
      registered: 156,
      price: "Gratuito"
    },
    {
      id: 3,
      title: "Innovación y Creatividad Empresarial",
      speaker: "Ana Rodríguez",
      date: "2024-03-01",
      time: "18:30",
      location: "Hotel Sheraton - Rosario",
      description: "Estrategias para fomentar la innovación y desarrollar una cultura creativa en las organizaciones.",
      topics: ["Cultura de innovación", "Procesos creativos", "Design thinking", "Implementación"],
      duration: "90 minutos",
      capacity: 120,
      registered: 78,
      price: "Gratuito"
    }
  ];

  const pastTalks = [
    {
      id: 4,
      title: "Transformación Digital: Casos de Éxito",
      speaker: "Roberto Silva",
      date: "2024-01-20",
      description: "Análisis de casos reales de transformación digital en empresas argentinas.",
      duration: "60 minutos",
      attendees: 180,
      rating: 4.8,
      videoUrl: "https://youtube.com/watch?v=example1",
      slidesUrl: "/slides/transformacion-digital.pdf"
    },
    {
      id: 5,
      title: "Gestión del Talento en el Siglo XXI",
      speaker: "Laura Fernández",
      date: "2024-01-15",
      description: "Nuevas estrategias para atraer, desarrollar y retener el mejor talento.",
      duration: "75 minutos",
      attendees: 145,
      rating: 4.9,
      videoUrl: "https://youtube.com/watch?v=example2",
      slidesUrl: "/slides/gestion-talento.pdf"
    },
    {
      id: 6,
      title: "Sostenibilidad Empresarial",
      speaker: "Diego López",
      date: "2024-01-10",
      description: "Cómo integrar la sostenibilidad en la estrategia empresarial.",
      duration: "60 minutos",
      attendees: 165,
      rating: 4.7,
      videoUrl: "https://youtube.com/watch?v=example3",
      slidesUrl: "/slides/sostenibilidad.pdf"
    }
  ];

  const speakers = [
    {
      name: "Dr. María González",
      title: "Especialista en Futuro del Trabajo",
      company: "Universidad de Buenos Aires",
      bio: "Doctora en Psicología Organizacional con más de 15 años de experiencia en consultoría.",
      talks: 12
    },
    {
      name: "Carlos Mendoza",
      title: "Consultor en Transformación Digital",
      company: "TechCorp Argentina",
      bio: "Experto en liderazgo digital y transformación organizacional con experiencia internacional.",
      talks: 8
    },
    {
      name: "Ana Rodríguez",
      title: "Especialista en Innovación",
      company: "InnovateLab",
      bio: "Consultora especializada en cultura de innovación y procesos creativos.",
      talks: 15
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

      {/* Stats Section */}
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTalks.map((talk) => (
                  <Card key={talk.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 rounded-t-lg flex items-center justify-center">
                        <Play className="h-16 w-16 text-white opacity-80" />
                      </div>
                      <Badge className="absolute top-4 left-4 bg-secondary text-dark">
                        {talk.price}
                    </Badge>
                      <Badge variant="outline" className="absolute top-4 right-4 bg-white/90 text-dark">
                        {talk.duration}
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
                          <span>{talk.speaker}</span>
                    </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(talk.date).toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                    </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Clock className="h-4 w-4" />
                          <span>{talk.time}</span>
                    </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <MapPin className="h-4 w-4" />
                          <span>{talk.location}</span>
                    </div>
                  </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-dark mb-2">Temas:</h4>
                        <div className="flex flex-wrap gap-1">
                          {talk.topics.map((topic, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {topic}
                      </Badge>
                    ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-dark mb-1">
                          <span>Registrados</span>
                          <span>{talk.registered}/{talk.capacity}</span>
                        </div>
                        <div className="w-full bg-light-gray rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(talk.registered / talk.capacity) * 100}%` }}
                          ></div>
                        </div>
                  </div>

                      <Button className="w-full" variant="outline">
                        Registrarse
                        <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
            </TabsContent>

            <TabsContent value="anteriores" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastTalks.map((talk) => (
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
                          <span>{talk.speaker}</span>
                    </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(talk.date).toLocaleDateString('es-ES')}</span>
                    </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Clock className="h-4 w-4" />
                          <span>{talk.duration}</span>
                  </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Users className="h-4 w-4" />
                          <span>{talk.attendees} asistentes</span>
                    </div>
                        <div className="flex items-center space-x-2 text-sm text-dark">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span>{talk.rating}/5.0</span>
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
                ))}
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