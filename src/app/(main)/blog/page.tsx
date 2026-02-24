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
import { contentES, contentPT } from '@/lib/content'
import { cookies } from 'next/headers'
import prisma from '@/lib/db'

export const revalidate = 60; // ISR cada minuto para carga instantánea

export default async function BlogPage() {
  const cookieStore = await cookies();
  const language = cookieStore.get('preferredLanguage')?.value || 'ES';
  const t = language === 'ES' ? contentES : contentPT;
  const b = t.blog

  // Fetch posts directamente desde la DB en el servidor
  const posts = await prisma.post.findMany({
    where: { status: 'Publicado' },
    orderBy: { date: 'desc' }
  });

  // El primer post publicado será el destacado
  const featuredPost = posts.length > 0 ? {
    ...posts[0],
    excerpt: posts[0].content?.substring(0, 150) + '...',
    readTime: '5 min',
    category: posts[0].category || 'General',
    slug: posts[0].id.toString()
  } : null;

  const recentPosts = posts.slice(1).map(post => ({
    ...post,
    excerpt: post.content?.substring(0, 100) + '...',
    readTime: '3 min',
    category: post.category || 'General',
    slug: post.id.toString()
  }));

  const categories = [
    { name: b.categories.liderazgo, count: 12, icon: Target },
    { name: b.categories.innovacion, count: 8, icon: Lightbulb },
    { name: b.categories.equipos, count: 15, icon: Users },
    { name: b.categories.transformacion, count: 10, icon: TrendingUp },
    { name: b.categories.comunicacion, count: 6, icon: BookOpen }
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
              {b.hero.title}
              <span className="block text-secondary">
                {b.hero.subtitle}
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {b.hero.description}
            </p>

            {/* Search Bar (Static placeholder, could be a separate client component for real search) */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-gray" />
                <Input
                  placeholder={b.hero.searchPlaceholder}
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
          {featuredPost ? (
            <>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">
                  {b.featured.badge}
                </Badge>
                <h2 className="text-2xl font-bold text-dark mb-4">
                  {b.featured.title}
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
                          <div className="text-xs text-medium-gray">{featuredPost.date}</div>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`/blog/${featuredPost.slug}`}>
                          {b.featured.readMore}
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
            </>
          ) : (
            <div className="text-center py-12 text-medium-gray">No hay artículos publicados aún.</div>
          )}
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
                  {b.recent.title}
                </h2>
                <p className="text-medium-gray">
                  {b.recent.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {recentPosts.length > 0 ? recentPosts.map((post) => (
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
                      <CardDescription className="text-medium-gray line-clamp-2">
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
                            <div className="text-xs text-medium-gray">{post.date}</div>
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/blog/${post.slug}`}>
                            {language === 'ES' ? 'Leer' : 'Ler'}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="col-span-2 text-center text-medium-gray py-8">No hay más artículos recientes.</div>
                )}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  {b.recent.loadMore}
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
                      {b.sidebar.categories}
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
                      {b.sidebar.tags}
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
                        {b.sidebar.newsletter.title}
                      </h3>
                      <p className="text-sm text-medium-gray mb-4">
                        {b.sidebar.newsletter.description}
                      </p>
                      <div className="space-y-3">
                        <Input placeholder={b.sidebar.newsletter.placeholder} className="text-sm" />
                        <Button className="w-full" size="sm">
                          {b.sidebar.newsletter.button}
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
            {b.cta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {b.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-secondary hover:shadow-xl hover:shadow-white-400/25 text-gray-600">
              {b.cta.primary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-gray-600 hover:bg-white hover:text-mistri-blue-500 glass-effect">
              {b.cta.secondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
