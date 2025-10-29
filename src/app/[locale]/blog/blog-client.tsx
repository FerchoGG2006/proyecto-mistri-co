'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useTranslations, useLocale } from 'next-intl'
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

export function BlogPageClient() {
  const t = useTranslations('pages.blog');
  const locale = useLocale();
  // Mock data - en producción vendría de la base de datos
  const featuredPost = {
    id: '1',
    title: 'El Futuro del Liderazgo: Competencias Clave para el Siglo XXI',
    excerpt: 'Exploramos las habilidades esenciales que necesitan los líderes modernos para navegar en un mundo en constante cambio y transformación.',
    content: 'En un mundo cada vez más complejo y cambiante, el liderazgo tradicional ya no es suficiente...',
    author: 'María González',
    authorRole: 'Directora de Desarrollo Organizacional',
    authorAvatar: '/images/blog/author-maria.jpg',
    publishDate: '2024-01-15',
    readTime: '8 min',
    category: 'Liderazgo',
    tags: ['Liderazgo', 'Transformación', 'Competencias', 'Siglo XXI'],
    image: '/images/blog/featured-post.svg',
    featured: true,
    views: 1250,
    likes: 89,
    comments: 23
  };

  const recentPosts = [
    {
      id: '2',
      title: 'Cómo Construir una Cultura de Innovación en tu Empresa',
      excerpt: 'Descubre las estrategias clave para fomentar la creatividad y la innovación en tu organización.',
      author: 'Carlos Rodríguez',
      publishDate: '2024-01-12',
      readTime: '6 min',
      category: 'Innovación',
      tags: ['Innovación', 'Cultura', 'Creatividad'],
      image: '/images/blog/blog-1.svg',
      views: 890,
      likes: 67,
      comments: 15
    },
    {
      id: '3',
      title: 'El Poder del Feedback Constructivo en el Desarrollo de Equipos',
      excerpt: 'Aprende técnicas efectivas para dar y recibir feedback que impulse el crecimiento de tu equipo.',
      author: 'Ana Martínez',
      publishDate: '2024-01-10',
      readTime: '5 min',
      category: 'Gestión de Equipos',
      tags: ['Feedback', 'Equipos', 'Desarrollo'],
      image: '/images/blog/blog-2.svg',
      views: 756,
      likes: 54,
      comments: 12
    },
    {
      id: '4',
      title: 'Transformación Digital: Más Allá de la Tecnología',
      excerpt: 'La transformación digital no es solo sobre tecnología, sino sobre personas y procesos.',
      author: 'Roberto Silva',
      publishDate: '2024-01-08',
      readTime: '7 min',
      category: 'Transformación Digital',
      tags: ['Transformación Digital', 'Tecnología', 'Procesos'],
      image: '/images/blog/blog-3.svg',
      views: 634,
      likes: 43,
      comments: 8
    }
  ];

  const categories = [
    { name: 'Liderazgo', count: 12, color: 'bg-blue-50 text-blue-700' },
    { name: 'Gestión de Equipos', count: 8, color: 'bg-green-100 text-green-800' },
    { name: 'Transformación Digital', count: 6, color: 'bg-purple-100 text-purple-800' },
    { name: 'Innovación', count: 10, color: 'bg-orange-100 text-orange-800' },
    { name: 'Coaching', count: 5, color: 'bg-pink-100 text-pink-800' }
  ];

  const popularTags = [
    'Liderazgo', 'Equipos', 'Innovación', 'Transformación', 'Coaching',
    'Gestión', 'Desarrollo', 'Cultura', 'Feedback', 'Digital'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mistri-blue-500 to-mistri-blue-600 text-white py-20">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        {/* Elementos decorativos geométricos */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/15 rounded-full blur-lg"></div>
        
        {/* Patrón de líneas decorativas */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('subtitle')}
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={t('searchPlaceholder')}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>

            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('featuredPost')}</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary/10 text-primary border-0">
                        {featuredPost.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {t('featured')}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl mb-4 line-clamp-2">
                      {featuredPost.title}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{featuredPost.views} {t('views')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{featuredPost.likes} {t('likes')}</span>
                      </div>
                    </div>
                    
                    <Button asChild className="group">
                      <Link href={`/${locale}/blog/${featuredPost.id}`}>
{t('readArticle')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('recentPosts')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post, index) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-primary/10 text-primary border-0 text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full group">
                        <Link href={`/${locale}/blog/${post.id}`}>
{t('readMore')}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('categories')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('popularTags')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    {t('newsletter.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('newsletter.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder={t('newsletter.emailPlaceholder')} type="email" />
                  <Button className="w-full">
                    {t('newsletter.subscribeButton')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
