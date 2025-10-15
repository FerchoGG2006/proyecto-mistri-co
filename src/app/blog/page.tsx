import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search,
  Calendar,
  ArrowRight,
  Clock,
  User,
  Tag,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Target,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { pageSEO } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = pageSEO.blog

export default function BlogPage() {
  // Mock data - en producción vendría de la base de datos
  const featuredPost = {
    id: '1',
    title: 'El Futuro del Liderazgo: Competencias Clave para el Siglo XXI',
    excerpt: 'Exploramos las habilidades esenciales que necesitan los líderes modernos para navegar en un mundo en constante cambio y transformación.',
    content: 'Contenido completo del artículo...',
    author: 'María González',
    publishedAt: '2024-01-15',
    readTime: '8 min',
    category: 'Liderazgo',
    tags: ['liderazgo', 'futuro', 'competencias', 'transformación'],
    coverImage: '/images/blog/featured-post.svg',
    slug: 'futuro-liderazgo-competencias-siglo-xxi'
  }

  const recentPosts = [
    {
      id: '2',
      title: 'Cómo Construir una Cultura de Innovación en tu Organización',
      excerpt: 'Descubre las estrategias prácticas para fomentar la creatividad y la innovación en equipos de trabajo.',
      author: 'Carlos Mendoza',
      publishedAt: '2024-01-12',
      readTime: '6 min',
      category: 'Innovación',
      tags: ['innovación', 'cultura', 'creatividad'],
      slug: 'construir-cultura-innovacion-organizacion'
    },
    {
      id: '3',
      title: 'Gestión del Cambio: Guía Práctica para Líderes',
      excerpt: 'Una guía completa para liderar procesos de transformación organizacional exitosos.',
      author: 'Ana Rodríguez',
      publishedAt: '2024-01-10',
      readTime: '10 min',
      category: 'Transformación',
      tags: ['cambio', 'liderazgo', 'transformación'],
      slug: 'gestion-cambio-guia-practica-lideres'
    },
    {
      id: '4',
      title: 'Desarrollo de Equipos de Alto Rendimiento',
      excerpt: 'Las claves para formar y mantener equipos que superen consistentemente las expectativas.',
      author: 'Roberto Silva',
      publishedAt: '2024-01-08',
      readTime: '7 min',
      category: 'Equipos',
      tags: ['equipos', 'rendimiento', 'desarrollo'],
      slug: 'desarrollo-equipos-alto-rendimiento'
    },
    {
      id: '5',
      title: 'Comunicación Efectiva en la Era Digital',
      excerpt: 'Cómo adaptar tus habilidades de comunicación a los nuevos desafíos del mundo digital.',
      author: 'Laura Fernández',
      publishedAt: '2024-01-05',
      readTime: '5 min',
      category: 'Comunicación',
      tags: ['comunicación', 'digital', 'habilidades'],
      slug: 'comunicacion-efectiva-era-digital'
    },
    {
      id: '6',
      title: 'Métricas de Éxito en Proyectos de Transformación',
      excerpt: 'Cómo medir y evaluar el impacto real de los procesos de cambio organizacional.',
      author: 'Diego López',
      publishedAt: '2024-01-03',
      readTime: '9 min',
      category: 'Métricas',
      tags: ['métricas', 'transformación', 'medición'],
      slug: 'metricas-exito-proyectos-transformacion'
    },
    {
      id: '7',
      title: 'Liderazgo Inclusivo: Construyendo Equipos Diversos',
      excerpt: 'Estrategias para crear entornos de trabajo inclusivos que aprovechen la diversidad.',
      author: 'Patricia Morales',
      publishedAt: '2024-01-01',
      readTime: '6 min',
      category: 'Diversidad',
      tags: ['inclusión', 'diversidad', 'liderazgo'],
      slug: 'liderazgo-inclusivo-equipos-diversos'
    }
  ]

  const categories = [
    { name: 'Liderazgo', count: 12, icon: Target },
    { name: 'Innovación', count: 8, icon: Lightbulb },
    { name: 'Equipos', count: 15, icon: Users },
    { name: 'Transformación', count: 10, icon: TrendingUp },
    { name: 'Comunicación', count: 6, icon: BookOpen }
  ]

  const popularTags = [
    'liderazgo', 'innovación', 'equipos', 'transformación', 'comunicación',
    'cambio', 'desarrollo', 'métricas', 'cultura', 'diversidad'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Insights y Tendencias
              <span className="block text-secondary">
                en Liderazgo y Organización
              </span>
          </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre artículos especializados sobre liderazgo, transformación organizacional, 
              desarrollo de equipos y las últimas tendencias en gestión empresarial.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-gray" />
                <Input
                  placeholder="Buscar artículos..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              Artículo Destacado
            </Badge>
            <h2 className="text-2xl font-bold text-dark mb-4">
              Lo más leído esta semana
            </h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-primary text-white">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-medium-gray">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                </div>
                    </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark">{featuredPost.author}</div>
                      <div className="text-xs text-medium-gray">{featuredPost.publishedAt}</div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-8">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary/60" />
                </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

      {/* Main Content */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
      {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-4">
                  Artículos Recientes
                </h2>
                <p className="text-medium-gray">
                  Mantente actualizado con las últimas tendencias y mejores prácticas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {post.category}
                  </Badge>
                        <div className="flex items-center space-x-1 text-sm text-medium-gray">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                </div>
                      <CardTitle className="text-xl font-semibold text-dark hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                      <CardDescription className="text-medium-gray">
                        {post.excerpt}
                      </CardDescription>
                </CardHeader>
                <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-secondary" />
                    </div>
                          <div>
                            <div className="text-sm font-medium text-dark">{post.author}</div>
                            <div className="text-xs text-medium-gray">{post.publishedAt}</div>
                    </div>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/blog/${post.slug}`}>
                            Leer
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                  </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Cargar más artículos
                </Button>
                    </div>
                  </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-dark">
                      Categorías
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <Link 
                          key={index}
                          href={`/blog/categoria/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <category.icon className="h-4 w-4 text-primary group-hover:text-primary" />
                            <span className="text-dark group-hover:text-primary transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                      </Badge>
                        </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-dark">
                      Tags Populares
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <Link 
                          key={index}
                          href={`/blog/tag/${tag}`}
                          className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                        >
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </Link>
            ))}
          </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-dark mb-2">
                        Newsletter
                      </h3>
                      <p className="text-sm text-medium-gray mb-4">
                        Recibe nuestros artículos más recientes directamente en tu correo
                      </p>
                      <div className="space-y-3">
                        <Input placeholder="Tu email" className="text-sm" />
                        <Button className="w-full" size="sm">
                          Suscribirse
              </Button>
            </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#83e935] text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Te gusta lo que lees?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a nuestra comunidad y recibe insights exclusivos sobre liderazgo y transformación organizacional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-secondary hover:shadow-xl hover:shadow-white-400/25 text-gray-600">
              Suscribirse al Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-gray-600 hover:bg-white hover:text-mistri-blue-500 glass-effect">
              Ver todos los artículos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}