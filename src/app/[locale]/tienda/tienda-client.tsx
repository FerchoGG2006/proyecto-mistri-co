'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Search, 
  Filter,
  Calendar,
  User,
  Building2,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  BarChart3,
  Lightbulb,
  Zap,
  Shield,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export default function TiendaClient() {
  const t = useTranslations('pages.store');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Curso de Liderazgo Ejecutivo',
      description: 'Programa completo de formación en liderazgo para ejecutivos y directivos.',
      price: '$299.000',
      originalPrice: '$399.000',
      image: '/images/store/curso-liderazgo.jpg',
      category: 'cursos',
      rating: 4.9,
      students: 150,
      duration: '8 semanas',
      isPopular: true
    },
    {
      id: 2,
      name: 'Metodología MISTRI®',
      description: 'Guía completa de implementación de nuestra metodología probada.',
      price: '$199.000',
      originalPrice: null,
      image: '/images/store/metodologia-mistri.jpg',
      category: 'metodologias',
      rating: 4.8,
      students: 89,
      duration: '6 semanas',
      isPopular: false
    },
    {
      id: 3,
      name: 'Coaching Ejecutivo Individual',
      description: 'Sesiones personalizadas de coaching para desarrollo de competencias directivas.',
      price: 'Consultar',
      originalPrice: null,
      image: '/images/store/coaching-ejecutivo.jpg',
      category: 'servicios',
      rating: 5.0,
      students: 45,
      duration: '3-6 meses',
      isPopular: true
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos los productos' },
    { value: 'cursos', label: 'Cursos Online' },
    { value: 'metodologias', label: 'Metodologías' },
    { value: 'servicios', label: 'Servicios' },
    { value: 'recursos', label: 'Recursos' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Explorar productos
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <MessageSquare className="mr-2 h-5 w-5" />
                Consultar servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No se encontraron productos</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                  {product.isPopular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-500 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.students} estudiantes)
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.duration}
                        </div>
                      </div>

                      <Button asChild className="w-full group-hover:shadow-lg transition-all duration-300">
                        <a href="#">
                          {product.price === 'Consultar' ? 'Consultar' : 'Agregar al carrito'}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas algo personalizado?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Desarrollamos soluciones a medida para las necesidades específicas de tu organización.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda una consulta
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <MessageSquare className="mr-2 h-5 w-5" />
              Consulta por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
