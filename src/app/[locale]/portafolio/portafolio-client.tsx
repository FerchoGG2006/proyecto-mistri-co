'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import { 
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
  Star,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  BarChart3,
  Lightbulb,
  Heart,
  Zap,
  Shield,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export default function PortafolioClient() {
  const t = useTranslations('pages.portfolio');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Transformación Digital - TechCorp',
      description: 'Implementación de metodología ágil y desarrollo de líderes para una empresa tecnológica.',
      category: 'transformacion',
      image: '/images/portfolio/techcorp.jpg',
      duration: '6 meses',
      results: ['40% aumento en productividad', '95% satisfacción del equipo', 'ROI del 300%'],
      client: 'TechCorp',
      year: '2023'
    },
    {
      id: 2,
      title: 'Desarrollo de Liderazgo - Global Solutions',
      description: 'Programa integral de formación de mandos medios en una multinacional.',
      category: 'liderazgo',
      image: '/images/portfolio/global-solutions.jpg',
      duration: '8 meses',
      results: ['60 líderes formados', '85% promoción interna', 'Cultura de innovación'],
      client: 'Global Solutions',
      year: '2023'
    },
    {
      id: 3,
      title: 'Optimización de Procesos - InnovateLab',
      description: 'Rediseño de procesos y mejora de la cultura organizacional.',
      category: 'procesos',
      image: '/images/portfolio/innovatelab.jpg',
      duration: '4 meses',
      results: ['50% reducción de tiempos', 'Mejora en comunicación', 'Mayor engagement'],
      client: 'InnovateLab',
      year: '2022'
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos los proyectos' },
    { value: 'transformacion', label: 'Transformación Digital' },
    { value: 'liderazgo', label: 'Desarrollo de Liderazgo' },
    { value: 'procesos', label: 'Optimización de Procesos' },
    { value: 'cultura', label: 'Cultura Organizacional' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
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
                <Calendar className="mr-2 h-5 w-5" />
                Ver casos de éxito
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <MessageSquare className="mr-2 h-5 w-5" />
                Consultar proyecto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Proyectos Completados', icon: Award },
              { number: '95%', label: 'Satisfacción del Cliente', icon: Star },
              { number: '40%', label: 'Mejora Promedio', icon: TrendingUp },
              { number: '15+', label: 'Años de Experiencia', icon: Calendar }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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
                  placeholder="Buscar proyectos..."
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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No se encontraron proyectos</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.year}</Badge>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Cliente:</h4>
                        <p className="text-sm text-gray-600">{project.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Resultados:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full group-hover:shadow-lg transition-all duration-300">
                        <a href="#">
                          Ver detalles
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
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo podemos ayudarte a transformar tu organización y alcanzar tus objetivos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda una reunión
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
